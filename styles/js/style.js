module.exports= require('react-native').StyleSheet.create({
    
    "calendar": {
        "float": "left", "background": "#fff", "width": 300, "border": "solid 1px #CCC", "marginBottom": 10
    }
    ,
    "header": {
        "float": "left", "width": 100, "background": "#2875C7", "height": 40, "color": "#fff"
    }
    ,
    "calendar>header>*": {
        "height": 40, "lineHeight": 40, "verticalAlign": "middle"
    }
    ,
    "calendar>header>i": {
        "float": "left", "width": 40, "fontSize": 1.125, "fontWeight": "700", "position": "relative","paddingTop": 0, "paddingBottom": 0, "paddingLeft": 10, "paddingRight": 10, "cursor": "pointer"
    }
    ,
    "calendar>header>ifa-angle-left": {
        "textAlign": "left"
    }
    ,
    "calendar>header>ifa-angle-right": {
        "textAlign": "right", "marginLeft": -40
    }
    ,
    "calendar>header>span": {
        "float": "left", "width": 100, "fontWeight": "700", "textTransform": "uppercase", "paddingLeft": 50, "marginLeft": -40, "textAlign": "center", "paddingRight": 40, "color": "inherit"
    }
    ,
    "calendar>week": {
        "float": "left", "width": 100, "borderTop": "solid 1px #CCC"
    }
    ,
    "calendar>week:first-child": {
        "borderTop": "none"
    }
    ,
    "calendar>week>spanday": {
        "float": "left", "width": 14.28571429, "borderLeft": "solid 1px #CCC", "fontSize": 0.75, "textAlign": "center", "height": 30, "lineHeight": 30, "verticalAlign": "middle", "background": "#fff", "cursor": "pointer", "color": "#000"
    }
    ,
    "calendar>week>spanday:first-child": {
        "borderLeft": "none"
    }
    ,
    "calendar>week>spandaytoday": {
        "background": "#E3F2FF"
    }
    ,
    "calendar>week>spandaydifferent-month": {
        "color": "silver"
    }
    ,
    "calendar>week>spandayselected": {
        "background": "#2875C7", "color": "#fff"
    }
    ,
    "calendar>weeknames>span": {
        "color": "#2875C7", "fontWeight": "700"
    }
});