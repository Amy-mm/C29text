/**
 *
 * Created  by 2017/08/16
 */
$(function () {
    getCategoryTitle();
    bindLiClick();

})


//title  ��̬��Ⱦ

function getCategoryTitle() {
    $.ajax({
        url: url + "api/getcategorytitle",
        success: function (data) {
            //console.log(data);
            //�����ݺ�ģ��

            var html = template("categoryTitleTpl", {data: data.result})
            $("#categoryMenuUU").html(html);
        }
    })
}
//
////��Title�󶨵���¼�
//
//function bindLiClick() {
//    $("#categoryMenuUU").on("click", $(".categoryTitle"), function () {
//        //��ȡ��Ӧ��Id��
//        var tid = parseInt($(window.event.target).attr("titleId"));
//        console.log(tid);
//        //��������
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

//��title�󶨵���¼�
function bindLiClick () {
    $("#categoryMenuUU").on("click",$(".categoryTitle"), function (e) {
        //��ȡ��Ӧ��id
        var tid = parseInt($(window.event.target).attr("titleId"));
        console.log(tid);
        //��������
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

