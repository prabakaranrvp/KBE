/*  Module Name : Calendar
 *  Description : Screen for the user logged in, to view his projects on calendar
 */

// React Components
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Button,
    Navigator
} from 'react-native';

// App Modules
import CommonComponents from './commonComponents.js';

//React 3rd Party 
import moment from 'moment';

//Class : Calendar
//To Show Calendar for the logged user and to Render events on dates
export default class Calendar extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
        	month: moment().month()
        };
    }

    previous() {
        var month = this.state.month;
        month.add(-1, "M");
        this.setState({ month: month });
    }

    next() {
        var month = this.state.month;
        month.add(1, "M");
        this.setState({ month: month });
    }

    select(day) {
        this.props.selected = day.date;
        this.forceUpdate();
    }

    render() {
        return( 
        	<View>
	            <View>	                
	                {this.renderMonthLabel()}
	            </View>
	            <DayNames />
	            {this.renderWeeks()}
        	</View>
        );
    }

    renderWeeks() {
        var weeks = [],
            done = false,
            date = moment().month(this.state.month).startOf("month").add("w" -1).day("Sunday"),
            monthIndex = date.month(),
            count = 0;

        while (!done) {
            weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month} select=    {this.select} selected={this.props.selected} />);
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }

        return weeks;
    }

    renderMonthLabel() {
        console.log(this.state.month);
        return (<Text>{moment().month(this.state.month).format("MMMM, YYYY")}</Text>);
    }
};

var DayNames = React.createClass({
    render() {
        return( 
        	<View>
	            <Text>Sun</Text>
	            <Text>Mon</Text>
	            <Text>Tue</Text>
	            <Text>Wed</Text>
	            <Text>Thu</Text>
	            <Text>Fri</Text>
	            <Text>Sat</Text>
        	</View>
        );
    }
});

var Week = React.createClass({
    render() {
        var days = [],
            date = this.props.date,
            month = this.props.month;

        for (var i = 0; i < 7; i++) {
            var day = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === moment().month(month),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };
            days.push(<Text key={day.date.toString()} className={"day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : "")} onClick={this.props.select.bind(null, day)}>{day.number}</Text>);
            date = date.clone();
            date.add(1, "d");

        }

        return (<View key={days[0].toString()}>{days}</View>);
    }
});