// window.onload = function(){
    if(sessionStorage.getItem("user")==null){
        window.location.replace("../index.html");
    }
    else{

        // logout

        var logout = document.getElementById("logout");
        logout.onclick = function(){
            sessionStorage.clear();
            var logout_text = document.getElementById("logout_text");
            logout_text.innerHTML = "please wait...";
            setTimeout(function(){window.location = "../index.html"},2000)
        }

        // profile name

        var user_email = sessionStorage.getItem("user");
        var json_text= localStorage.getItem(user_email)
        var obj_data = JSON.parse(json_text);
        // alert(atob(obj_data.username));

        var profile_name= document.getElementById("profile_name");
        profile_name.innerHTML = atob(obj_data.username);
        document.getElementById("profile_username").innerHTML = atob(obj_data.username);
        

        
        // profile pic coding

        var img_url = localStorage.getItem(user_email + "image");
        var profile_picture = document.getElementById("profile_picture");
        profile_picture.style.backgroundImage= "url("+ img_url +")";
        profile_picture.style.backgroundSize = "cover";
        profile_picture.style.backgroundPosition = "center";
        
        if(localStorage.getItem(user_email + "image") != null);
        var page_cover = document.getElementById("page_cover");
        // page_cover.style.display = "none";

        // profile pic upload 

        var profile_upload = document.getElementById("profile_upload")
        profile_upload.onchange = function(){
            var reader= new FileReader();
            reader.readAsDataURL(profile_upload.files[0]);
            reader.onload= function(){
                var filename = reader.result;
                var profile_pic= document.getElementById("profile_pic");
                var profile_icon = document.getElementById("profile_icon");
                profile_pic.style.backgroundImage = "url("+ filename +")";
                profile_pic.style.backgroundSize= "cover";
                profile_pic.style.backgroundPosition = "center";
                profile_icon.style.display= "none";
                var next_btn = document.getElementById("next");
                next_btn.style.display = "block";

                next_btn.onclick = function(){
                    var page_cover = document.getElementById("page_cover");
                    page_cover.style.display = "none";
                }

            }

        }

       
    }
// }