
/* start signup coding*/
var signup_frm= document.getElementById("signup_frm");

 
signup_frm.onsubmit= function(){
    var user = btoa(document.getElementById("username").value);
    var email =btoa(document.getElementById("email").value);
    var phone =btoa(document.getElementById("phone").value); 
    var pass = btoa(document.getElementById("password").value);


    var user_object_data ={username:user, email:email, phone:phone, password:pass}
    var user_text_data = JSON.stringify(user_object_data)

    if(user != "" && email != "" && phone != "" &&  pass != ""){
        localStorage.setItem(email,user_text_data);
        var signup_btn =  document.getElementById("signup_btn");
        signup_btn.style.background="#14b149"; // green
        signup_btn.innerHTML=" <i class= 'fas fa-check-circle'></i> Sign up Successful"

        setTimeout(function(){
            signup_btn.style.background = " linear-gradient(to right, #F27121, #E94057, #8A2387)";

            signup_btn.innerHTML= "Sign up";
            signup_frm.reset()
        },3000);
        return false
    }
    }
    /* end signup coding */

    /* email validation */
    var email_input = document.getElementById("email");
    email_input.onchange = function(){

    var email = btoa(document.getElementById("email").value);
    var warning= document.getElementById("email_notice"); 
    var signup_btn =  document.getElementById("signup_btn");    
    if(localStorage.getItem(email) != null){

        warning.style.display= "block";
        email_input.style.borderBottomColor= "red"
        signup_btn.disabled=true;
        signup_btn.style.background= "#ccc";

        email_input.onclick = function(){
            email_input.value= "";
            email_input.style.borderBottomColor= "#ccc"
            warning.style.display= "none";
            signup_btn.disabled=false;
            signup_btn.style.background= "linear-gradient(to right, #F27121, #E94057, #8A2387)";

            

        }
    }
}
/* email validation end */

/* start login coding */
var login_frm = 
document.getElementById("login_frm");
 
login_frm.onsubmit = function(){
    var email = document.getElementById("login_email");
    var password = document.getElementById("login_password");
    var login_email_war= document.getElementById("login_email_warning")
    var login_password_war= document.getElementById("login_password_warning")
    if(localStorage.getItem(btoa(email.value))== null){
        // alert("your email id is not registered");
        login_email_war.style.display = "block";
        email.style.borderBottomColor = "red";

        email.onclick = function(){
            email.value ="";
            login_email_war.style.display = "none";
            email.style.borderBottomColor = "#ccc";
        }

    }
    else{
        var text_data= localStorage.getItem(btoa(email.value));
        var obj_data = JSON.parse(text_data);
        // alert(obj_data.email)
        var correct_email= obj_data.email;
        var correct_password = obj_data.password;

        if( btoa(email.value)== correct_email)
        {
            if(btoa(password.value)== correct_password){
                // alert("login success")
                sessionStorage.setItem("user", btoa(email.value));
                window.location.replace("profile/profile.html")

            }
            else{
                // alert("invalid user or password")
                login_password_war.style.display = "block";
                email.style.borderBottomColor = "red";
        
                password.onclick = function(){
                    password.value ="";
                    login_password_war.style.display = "none";
                    password.style.borderBottomColor = "#ccc";
                }
            }
        }
    }
    return false;
}
/* end login coding */