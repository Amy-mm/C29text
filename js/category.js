/**
 *
 * Created  by 2017/08/16
 */
$(function () {
    getCategoryTitle();
    bindLiClick();

})


//title  动态渲染

function getCategoryTitle() {
    $.ajax({
        url: url + "api/getcategorytitle",
        success: function (data) {
            //console.log(data);
            //绑定数据和模版

            var html = template("categoryTitleTpl", {data: data.result})
            $("#categoryMenuUU").html(html);
        }
    })
}
//
////给Title绑定点击事件
//
//function bindLiClick() {
//    $("#categoryMenuUU").on("click", $(".categoryTitle"), function () {
//        //获取对应的Id；
//        var tid = parseInt($(window.event.target).attr("titleId"));
//        console.log(tid);
//        //发送请求
//        $.ajax({
//            url: url + "api/getcategory",
//            data: {titleid: tid},
//            success: function (data) {
//                console.log(data);
//                var html = template("categoryListTpl", {data: data.result});
//                console.log(html);
//                $(".categoryList" + tid).html(html);
//            },
//            complete: function () {
//                $(".categoryList").hide();
//                $(".categoryList" + tid).show();
//            }
//        })
//    })
//}

//给title绑定点击事件
function bindLiClick () {
    $("#categoryMenuUU").on("click",$(".categoryTitle"), function (e) {
        //获取对应的id
        var tid = parseInt($(window.event.target).attr("titleId"));
        console.log(tid);
        //发送请求
        $.ajax({
            url : url + "api/getcategory",
            data : {titleid : tid},
            success : function (data) {
                console.log(data);
                var html = template("categoryListTpl",{data:data.result});
                $(".categoryList"+tid).html(html);
            },
            complete : function () {
                $(".categoryList").hide();
                $(".categoryList"+tid).show();
            }
        })
    })
}

