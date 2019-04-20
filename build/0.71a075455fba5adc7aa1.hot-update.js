/*! lzy版权所有！ */
webpackHotUpdate(0, {
    198: function (t, e, o) {
        var a = o(199);
        a.init(document.getElementById("main")).setOption({
            title: {
                text: "前五名品质异常",
                subtext: "",
                x: "center",
                y: "top",
                textStyle: {fontWeight: "normal", color: "#ffffff"}
            },
            xAxis: {
                data: ["冷焊", "冷焊", "冷焊", "冷焊", "冷焊"],
                axisLabel: {inside: !0, textStyle: {color: "#fff"}},
                axisTick: {show: !1},
                axisLine: {show: !1},
                z: 10
            },
            yAxis: {axisLine: {show: !1}, axisTick: {show: !1}, axisLabel: {textStyle: {color: "#fff"}}},
            dataZoom: [{type: "inside"}],
            series: [{
                type: "bar",
                itemStyle: {normal: {color: "rgba(0,0,0,0.05)"}},
                barGap: "-100%",
                barCategoryGap: "40%",
                data: [],
                animation: !1
            }, {
                type: "bar",
                itemStyle: {
                    normal: {
                        color: new a.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#83bff6"
                        }, {offset: .5, color: "#188df0"}, {offset: 1, color: "#188df0"}])
                    },
                    emphasis: {
                        color: new a.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#2378f7"
                        }, {offset: .7, color: "#2378f7"}, {offset: 1, color: "#83bff6"}])
                    }
                },
                data: [20, 18, 16, 14, 12]
            }]
        })
    }
});