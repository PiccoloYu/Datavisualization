// 路径配置
require.config({
    paths: {
        echarts: '../echarts-2.2.7/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/bar',
        'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
    ],
    drawEcharts
);

    //需要加载封装好的图表函数
    function drawEcharts(ec){
        qualityproblem(ec);
        Reject(ec);
        Productiontrend(ec);
        Qualitytrend(ec);
    }

    //定义一个数组，作为图表只适应存储
    var echartsArray = [];

    //前五名品质异常
function qualityproblem(ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main'));
        //前五名品质异常
        var option = {
            title : {
                text: '前五位品质异常',
                x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                y: 'top',
                subtext: '',
                textStyle: {
                    fontWeight:'normal',              //标题颜色
                    color:'#ffffff'
                },
            },
            //鼠标放上去时的交互信息
            tooltip : {
                trigger: 'axis'
            },
            grid : {
                show : true,
                borderWidth:0,//去掉白色边框
            },
            legend: {
                data:[],
            },
            /*//工具栏
              toolbox: {
                  show : true,
                  feature : {
                      mark : {show: true},
                      dataView : {show: true, readOnly: false},
                      magicType : {show: true, type: ['line', 'bar']},
                      restore : {show: true},
                      saveAsImage : {show: true}
                  }
              },*/
            calculable : false,//禁止拖拽
            xAxis : [
                {
                    type : 'category',
                    data : ['冷焊','冷焊','冷焊','冷焊','冷焊'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine:{
                        show:false
                    }
                }
            ],
            yAxis : [
                {
                    min:0,
                    type : 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine:{
                        show:false//不显示网格线
                    }
                }
            ],
            series : [
                {
                    name:'品质异常',
                    type:'bar',
                    data:[20,16,12,8,4,2],
                    //barWidth : 45,//柱图宽度
                    barMaxWidth:30,//最大宽度
                    markPoint : {
                        data : [
                            /*{type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}*/
                        ]
                    },
                    itemStyle : {
                        normal : {
                            // 添加渐变颜色
                            color : (function (){
                                var zrColor = require('zrender/tool/color');
                                return zrColor.getLinearGradient(
                                    0, 0,0, 1000,
                                    [[0, 'blue'],[1, 'yellow']]
                                )
                            })(),
                            label : {
                                textStyle: {
                                    color: '#ffffff',
                                },
                                show : true,
                            }
                        }
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}//average 平均值
                        ]
                    }
                },

            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
        echartsArray.push(myChart);
    };

   //抛料趋势
function Reject(ec) {
    var myChart = ec.init(document.getElementById('main4'));
   var option = {
        title: {
            text: '抛料趋势',
            x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'top',
            subtext: '',
            textStyle: {
                fontWeight:'normal',              //标题颜色
                color:'#ffffff'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
       grid : {
           show : true,
           borderWidth:0,//去掉白色边框
       },
        legend: {
            data: []
        },
        calculable: false,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    show:false
                }

            }
        ],
        series: [
            {
                name: '数量',
                type: 'line',
                smooth: true,
                data: [1, 2, 4, 3, 5, 6],
                itemStyle: {
                    normal: {
                        color:'yellow',
                        areaStyle: {
                            type: 'default',
                            color: (function (){
                                var zrColor = require('zrender/tool/color');
                                return zrColor.getLinearGradient(
                                    0, 0,0, 1000,
                                    [[0, 'blue'],[1, 'yellow']]
                                )
                            })(),
                        },
                        label: {
                            textStyle: {
                                color: '#ffffff',
                            },
                            show: true,
                        }
                    }
                },
            },
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
    echartsArray.push(myChart);
}

//产量趋势
function Productiontrend(ec){
    var myChart = ec.init(document.getElementById('main3'));
    option = {
        title : {
            text: '产量趋势',
            x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'top',
            subtext: '',
            textStyle: {
                fontWeight:'normal',              //标题颜色
                color:'#ffffff'
            },
        },
        tooltip : {
            trigger: 'axis'
        },
        grid : {
            show : true,
            borderWidth:0,//去掉白色边框
        },
        calculable : false,
        legend: {
            y: 'bottom',    //延Y轴居底
            x: 'center' ,//x居中显示
            selectedMode:false,//取消图例的点击事件
            data:['产量','成品'],
            textStyle: {
                fontWeight:'normal',              //标题颜色
                color:'#ffffff'
            },
        },
        xAxis : [
            {
                type : 'category',
                data : ['08:00','10:00','12:00','14:00','16:00','18:00'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : '产量',
                nameTextStyle : {
                    color : '#ffffff', //设置y轴标题颜色
                },
                axisLabel : {
                    formatter: '{value}',
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    show:false
                }
            },
            {
                type : 'value',
                name : '成品',
                nameTextStyle : {
                    color : '#ffffff', //设置y轴标题颜色
                },
                axisLabel : {
                    formatter: '{value}',
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    show:false
                }
            }
        ],
        series : [
            {
                name:'产量',
                type:'bar',
                barMaxWidth:30,//最大宽度
                data:[5000, 3000, 2000, 1500, 4000, 6000],
                itemStyle : {
                    normal : {
                        color:(function (){
                            var zrColor = require('zrender/tool/color');
                            return zrColor.getLinearGradient(
                                0, 0,0, 1000,
                                [[0, 'blue'],[1, 'yellow']]
                            )
                        })(),
                        label : {
                            textStyle: {
                                color: '#ffffff',
                            },
                            show : true,
                        }
                    }
                },
            },
            {
                name:'成品',
                type:'line',
                yAxisIndex: 1,
                data:[30, 30, 64, 25, 11, 40],
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
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
    echartsArray.push(myChart);
}

//品质趋势
function Qualitytrend(ec){
    var myChart = ec.init(document.getElementById('main2'));
    option = {
        title : {
        text: '品质趋势',
            subtext: '',
            x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'top',
            textStyle: {
            fontWeight:'normal',              //标题颜色
                color:'#ffffff'
        },
    },
    tooltip : {
        trigger: 'axis'
    },
    grid : {
        show : true,
            borderWidth:0,//去掉白色边框
    },
    calculable : false,
        legend: {
        y: 'bottom',    //延Y轴居底
            x: 'center' ,//x居中显示
            selectedMode:false,//取消图例的点击事件
            data:['PCS','？？率'],
            textStyle: {
            fontWeight:'normal',              //标题颜色
                color:'#ffffff'
        },
    },
    xAxis : [
        {
            type : 'category',
            data : ['08:00','10:00','12:00','14:00','16:00','18:00'],
            show: true,
            axisLabel : {
                formatter: '{value}',
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine:{
                show:false
            }
        }
    ],
        yAxis : [
        {
            type : 'value',
            name : 'PCS',
            nameTextStyle : {
                color : '#ffffff', //设置y轴标题颜色
            },
            axisLabel : {
                formatter: '{value}',
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine:{
                show:false
            }
        },
        {
            type : 'value',
            name : '？？率',
            nameTextStyle : {
                color : '#ffffff', //设置y轴标题颜色
            },
            axisLabel : {
                formatter: '{value}',
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine:{
                show:false
            }
        }
    ],
        series : [
        {
            name:'PCS',
            type:'bar',
            barMaxWidth:30,//最大宽度
            data:[80, 60, 40, 50, 10, 30],
            itemStyle : {
                normal : {
                    color:(function (){
                        var zrColor = require('zrender/tool/color');
                        return zrColor.getLinearGradient(
                            0, 0,0, 1000,
                            [[0, 'blue'],[1, 'yellow']]
                        )
                    })(),
                    label : {
                        textStyle: {
                            color: '#ffffff',
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
            data:[30, 30, 64, 25, 11, 40],
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
};
    // 为echarts对象加载数据
    myChart.setOption(option);
    echartsArray.push(myChart);
}

    //根据窗口的大小变动图表 --- 重点
    /*window.onresize = function(){
        qualityproblem.resize();
        Reject.resize();
        //myChart1.resize();    //若有多个图表变动，可多写
    }*/

    window.onresize=function(){
        for(var i = 0;i<echartsArray.length;i++){
            echartsArray[i].resize();
        }
}
