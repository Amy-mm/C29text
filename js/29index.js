/*
* Created by 2017/08/15
* */

$(function(){
    //��ҳ�˵���̬��Ⱦ
    console.log(1111);
    //��ȡ�˵�����
    getIndexMenu();
    //��ȡ�ۿ۲���
    getDissable();
    //��ȡ����
    getMore();
    //�ص�����
    backTop();



})

//��ȡ�˵�����
function  getIndexMenu(){
    $.ajax({
        url:url+'api/getindexmenu',
        //׼������
        //׼��ģ��
        //�����ݺ�ģ��
        success:function(result){
            console.log(result);
            var indexMenuHtml=template('indexMenuTpl',result);
            //��ģ���ڶ�̬��Ⱦ
            $('#menu  .row').html(indexMenuHtml);
        }
    })
}



//��ȡ�ۿ۲���
function getDissable(){
    $.ajax({
        url:url+'api/getmoneyctrl',
        //׼������
        //׼��ģ��
        //�����ݺ�ģ��
        success:function (data){
            console.log(data);
            var html=template('indexDissableTpl',{result:data.result});
            console.log(html);
            $('#dissable .dissableList').html(html);
        }
    })
}


//��ȡ����
function getMore(){
    $("#menu .row").on("click",$(".row:nth-child(8)"),function(){
        $(".item:nth-last-child(-n+4)").toggle();
    });
};


//�ص�����
function  backTop(){
    $("#footer  #backTop").on('click',function(){
        $("html  body").animate({scrollTop:0},200);
        return false;
    })
}








