$(function () {
    var dataAxis = ['冷焊', '热焊', '假焊', '真焊', '空焊'];
    var data = [20, 18, 16, 14, 12];
    var datamap = [];
    for (var i = 0; i < data.length; i++) {
        datamap.push([{
            value: data[i],
            name: dataAxis[i]
        }])
    }
    //var container = $('.container').css('width');//获取实际高度
    //container[i].style.width//获取百分比高度
    var container = $('.container');
    var pgv = $('.pgv');
    var w = [40,55,12,21,60,75,50]; //定义进度条长度数组 注意:不能大于100
    for (var i = 0; i < container.length; i++) { //长度数组放进进度条
        container[i].style.width = w[i] + '%';
        pgv[i].before(w[i] + '%');
        console.log(pgv.length);
    }
    // each处理
    /*for(x in w){ //for in数组1分割 函数
        console.log(w[x]);
    }*/
    //每隔一秒 刷新当前时间 并展示
    setInterval(function () {
        var dateTime = new Date();
        var year = dateTime.getFullYear();
        var month = dateTime.getMonth() + 1;
        var ri = dateTime.getDate();
        var day;
        if (dateTime.getDay() == 6) {
            day = "六";
        }
        if (dateTime.getDay() == 1) {
            day = "一";
        }
        if (dateTime.getDay() == 2) {
            day = "二";
        }
        if (dateTime.getDay() == 3) {
            day = "三";
        }
        if (dateTime.getDay() == 4) {
            day = "四";
        }
        if (dateTime.getDay() == 5) {
            day = "五";
        }
        if (dateTime.getDay() == 0) {
            day = "日";
        }
        var hours = dateTime.getHours();
        var minutes = dateTime.getMinutes();
        var seconds = dateTime.getSeconds();
        $("#appdate").html(year + "年" + month + "月" + ri + "日  " + hours + ":" + minutes + ":" + seconds + "  星期" + day);
    }, 1000)
})