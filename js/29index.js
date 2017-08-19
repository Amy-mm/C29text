/*
* Created by 2017/08/15
* */

$(function(){
    //首页菜单动态渲染
    console.log(1111);
    //获取菜单部分
    getIndexMenu();
    //获取折扣部分
    getDissable();
    //获取更多
    getMore();
    //回到顶部
    backTop();



})

//获取菜单部分
function  getIndexMenu(){
    $.ajax({
        url:url+'api/getindexmenu',
        //准备数据
        //准备模版
        //绑定数据和模版
        success:function(result){
            console.log(result);
            var indexMenuHtml=template('indexMenuTpl',result);
            //在模版内动态渲染
            $('#menu  .row').html(indexMenuHtml);
        }
    })
}



//获取折扣部分
function getDissable(){
    $.ajax({
        url:url+'api/getmoneyctrl',
        //准备数据
        //准备模版
        //绑定数据和模版
        success:function (data){
            console.log(data);
            var html=template('indexDissableTpl',{result:data.result});
            console.log(html);
            $('#dissable .dissableList').html(html);
        }
    })
}


//获取更多
function getMore(){
    $("#menu .row").on("click",$(".row:nth-child(8)"),function(){
        $(".item:nth-last-child(-n+4)").toggle();
    });
};


//回到顶部
function  backTop(){
    $("#footer  #backTop").on('click',function(){
        $("html  body").animate({scrollTop:0},200);
        return false;
    })
}








