var echarts = require('echarts');



// 绘制图表 前五位品质异常
var dataAxis = ['冷焊','热焊','假焊','真焊','空焊'];
var data = [20, 18, 16, 14, 12];
var datamap = [];
for (var i=0;i<data.length;i++)
{
    datamap.push([{value:data[i],name:dataAxis[i]}])
}
/*[
    {value:20, name:'冷焊'},
    {value:16, name:'热焊'},
    {value:30, name:'假焊'},
    {value:14, name:'真焊'},
    {value:10, name:'空焊'}
]*/
var myChart1 = echarts.init(document.getElementById('main'));

//抛料趋势
var dataAxis1 = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'];
var data1 = [5, 6, 3, 4 , 6 , 4];
var myChart4 = echarts.init(document.getElementById('main4'));
//品质趋势
var data2 = [80, 60, 40, 50, 10, 30];
var data3 = [30, 30, 64, 25, 11, 40];
var myChart3 = echarts.init(document.getElementById('main3'));

//产量趋势
var data4 = [5000, 3000, 2000, 1500, 4000, 6000];
var data5 = [30, 30, 64, 25, 11, 40];
var myChart2 = echarts.init(document.getElementById('main2'));

window.onresize = function(){
    var whdef = 100/916;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    // var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
}

var  barMaxWidth = 30;
/*myChart1.setOption({
    title: {
        text: '前五名品质异常',
        subtext: '',
        x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        textStyle: {
            fontWeight:'normal',              //标题颜色
            color:'#ffffff'
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            //inside: true,
            textStyle: {
                color: '#fff'//x轴颜色
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        splitLine:{show: false},//去除网格线
        splitArea : {show : true},//保留网格区域
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            name:'品质异常',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.05)',
                }
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: [],
            animation: false
        },
        {
            type: 'bar',
            data: data,
            barMaxWidth:barMaxWidth,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    ),
                    label : {
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                        },
                        show : true,
                    }
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },

        }
    ]
});*/
myChart1.setOption({
    title : {
        text: '前五位品质异常',
        subtext: '',
        /*x:'center',*/
        textStyle: {
            color: '#638dbf',//x轴颜色
        },

    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top:'145px',
        data: dataAxis,
        selectedMode:false,//取消图例的点击事件
        textStyle: {
            color: '#fff'//x轴颜色
        }
    },
    series : [
        {
            name: '品质异常',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:20, name:'冷焊'},
                {value:16, name:'热焊'},
                {value:30, name:'假焊'},
                {value:14, name:'真焊'},
                {value:10, name:'空焊'}
            ] ,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    label:{
                        show: true,
                        formatter: '{b} : {c} ({d}%)'
                    },
                    labelLine :{show:true}
                }
            }
        }
    ]
});

myChart4.setOption({
    title: {
        text: '抛料趋势',
        subtext: '',
        /*x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        /*y: 'top',*/
        textStyle: {
            fontWeight:'normal',              //标题颜色
            color:'#638dbf'
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        splitLine:{show: false},//去除网格线
        splitArea : {show : true},//保留网格区域
        type: 'category',
        boundaryGap: false,
        data: dataAxis1,
        axisLabel: {
            //inside: true,
            textStyle: {
                color: '#fff'//x轴颜色
            }
        },
    },
    yAxis: {
        splitLine:{show: false},//去除网格线
        type: 'value',
        axisLabel: {
            //inside: true,
            textStyle: {
                color: '#fff'//x轴颜色
            }
        },
    },
    series: [{
        name:'抛料趋势',
        data: data1,
        type: 'line',
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#83bff6'},
                    {offset: 0.5, color: '#188df0'},
                    {offset: 1, color: '#188df0'}
                ]
            )
        },
        itemStyle: {
            normal: {
                color: 'yellow',
                label : {
                    textStyle: {
                        color: 'yellow',
                    },
                    show : true,
                }
            }
        },

    }]
});


myChart3.setOption({
    title: {
        text: '品质趋势',
        subtext: '',
       /* x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）*/
        textStyle: {
            fontWeight:'normal',              //标题颜色
            color:'#638dbf'
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        y: 'bottom',    //延Y轴居底
        x: 'center' ,//x居中显示
        selectedMode:false,//取消图例的点击事件
        data:['产量','成品'],
            //inside: true,
            textStyle: {
                color: '#fff'//x轴颜色
            }

    },
    xAxis: [
        {
            splitLine:{show: false},//去除网格线
            splitArea : {show : true},//保留网格区域
            type: 'category',
            data: dataAxis1,
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                //inside: true,
                textStyle: {
                    color: '#fff'//x轴颜色
                }
            },
        }
    ],
    yAxis: [
        {
            splitLine:{show: false},//去除网格线
            type: 'value',
            name: '产量',
            nameTextStyle : {
                color : '#ffffff', //设置y轴标题颜色
            },
            splitLine:{
                show:false
            },
            min: 0,
            axisLabel: {
                formatter: '{value}',
                //inside: true,
                textStyle: {
                    color: '#fff'//x轴颜色
                }
            },
        },
        {
            splitLine:{show: false},//去除网格线
            type: 'value',
            name: '成品',
            nameTextStyle : {
                color : '#ffffff', //设置y轴标题颜色
            },
            min: 0,
            axisLabel: {
                formatter: '{value}',
                //inside: true,
                textStyle: {
                    color: '#fff'//x轴颜色
                }
            },
        }
    ],
    series: [
        {
            name:'PCS',
            type:'bar',
            data:data2,
            barMaxWidth:barMaxWidth,
            itemStyle : {
                normal : {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    ),
                    label : {
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                        },
                        show : true,
                    }
                }
            },
        },
        {
            name:'？？率',
            type:'line',
            yAxisIndex: 1,
            data:data3,
            itemStyle : {
                normal : {
                    color:'yellow',
                    label : {
                        textStyle: {
                            color: 'yellow',
                        },
                        show : true,
                    }
                }
            },
        }
    ]
});



myChart2.setOption({
    title: {
        text: '产量趋势',
        subtext: '',
       /* x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）*/
        textStyle: {
            fontWeight:'normal',              //标题颜色
            color:'#638dbf'
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        y: 'bottom',    //延Y轴居底
        x: 'center' ,//x居中显示
        selectedMode:false,//取消图例的点击事件
        data:['PCS','？？率'],
        //inside: true,
        textStyle: {
            color: '#fff'//x轴颜色
        }

    },
    xAxis: [
        {
            splitLine:{show: false},//去除网格线
            splitArea : {show : true},//保留网格区域
            type: 'category',
            data: dataAxis1,
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                //inside: true,
                textStyle: {
                    color: '#fff'//x轴颜色
                }
            },
        }
    ],
    yAxis: [
        {
            splitLine:{show: false},//去除网格线
            type: 'value',
            name: '产量',
            nameTextStyle : {
                color : '#ffffff', //设置y轴标题颜色
            },
            min: 0,
            axisLabel: {
                formatter: '{value}',
                //inside: true,
                textStyle: {
                    color: '#fff'//x轴颜色
                }

            },
        },
        {
            splitLine:{show: false},//去除网格线
            type: 'value',
            name: '成品',
            nameTextStyle : {
                color : '#ffffff', //设置y轴标题颜色
            },
            min: 0,
            axisLabel: {
                formatter: '{value}',
                //inside: true,
                textStyle: {
                    color: '#fff'//x轴颜色
                }
            },
        }
    ],
    series: [
        {
            name:'PCS',
            type:'bar',
            data:data4,
            barMaxWidth:barMaxWidth,
            itemStyle : {
                normal : {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    ),
                    label : {
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                        },
                        show : true,
                    }
                }
            },
        },
        {
            name:'？？率',
            type:'line',
            yAxisIndex: 1,
            data:data5,
            itemStyle : {
                normal : {
                    color:'yellow',
                    label : {
                        textStyle: {
                            color: 'yellow',
                        },
                        show : true,
                    }
                }
            },
        }
    ]
});
