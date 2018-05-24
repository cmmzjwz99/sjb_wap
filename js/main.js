$(function () {
    $.ajax({
        url:'/api/accounts/info.json',
        type:'get',
        datatype:'json',
        success:function (data) {
            if(data.code==1000){
                if ($.cookie('login_id') != null) {
                    $.ajax({
                        url: '/api/accounts/login',
                        type: 'post',
                        data: {user:{
                            login: $.cookie('login_id'),
                            password:$.cookie('pwd')
                        }},
                        success: function (data) {
                            if (data.code != 0) {
                                window.location.href='login.html'
                            }
                        }
                    })
                }else{
                    window.location.href='login.html'
                }
            }
            console.log(data)
        }
    })
})


