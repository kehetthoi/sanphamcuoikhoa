function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value ;
    var password = document.getElementById("password").value ;
    
    var user={
        username:username,
        password:password,
       
    }
    var json=JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("dang nhap thanh cong")
    window.location.href="taikhoandangnhap.html"
     
    }