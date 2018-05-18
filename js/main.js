$(function () {
    $.ajax({
        url:'/api/accounts/info.json',
        type:'get',
        datatype:'json',
        success:function (data) {
            if(data.code==1000){
                window.location.href='login.html'
            }
            console.log(data)
        }
    })
})


