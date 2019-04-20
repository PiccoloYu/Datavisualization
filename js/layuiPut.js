/*必须使用这个方法先引用对应的模块*/
layui.use(['layer','laydate','table','element'],function(){  //[mods]加载的模块，现在加载的是弹出层
    var layer = layui.layer//获得layer模块
        ,laydate = layui.laydate
        ,table=layui.table,
        element = layui.element;//获得laydate模块
    //使用模块
   // layer.msg('风继续吹')
    //layui时间模块
    /*laydate.render({
        elem: '#appdate',
        format: 'yyyy-MM-dd HH:mm:ss ',
        value: new Date()
    });*/
    /*laydate.render({
        elem: '#appdate',
        value: new Date() ,
        format: 'yyyy-MM-dd HH:mm:ss ',
        done: function(value, date){}
    });*/
    //layui表格模块
    table.render({
        elem: ''
        ,url:''
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[
        ]]
    });
    //进度条
    element.on('collapse(filter)', function(data){
        console.log(data.show); //得到当前面板的展开状态，true或者false
        console.log(data.title); //得到当前点击面板的标题区域DOM对象
        console.log(data.content); //得到当前点击面板的内容区域DOM对象
    });
    //触发事件
    var active = {
        setPercent: function(){
            //设置50%进度
            element.progress('demo', '50%')
        }
        ,loading: function(othis){
            var DISABLED = 'layui-btn-disabled';
            if(othis.hasClass(DISABLED)) return;

            //模拟loading
            var n = 0, timer = setInterval(function(){
                n = n + Math.random()*10|0;
                if(n>100){
                    n = 100;
                    clearInterval(timer);
                    othis.removeClass(DISABLED);
                }
                element.progress('demo', n+'%');
            }, 300+Math.random()*1000);

            othis.addClass(DISABLED);
        }
    };
})