

// security codig

if (sessionStorage.getItem("user") == null) {
    window.location.replace("../../../index.html")
}
else {
    var current_user = sessionStorage.getItem("user")
    // add new contact box
    var add_icon = document.getElementById("new_contact");
    add_icon.onclick = function () {
        var bg = document.getElementById("contact_bg");
        bg.style.display = "block";
    }

    // close box
    var bg = document.getElementById("contact_bg");
    var close = document.getElementById("close");
    close.onclick = function () {
        // var bg = document.getElementById("contact_bg");
        bg.style.display = "none";
    }

    //add contact in local storage

    var add= document.getElementById("add");
    add.onclick= function(){
        var c_name = document.getElementById("c_name");
        var c_num = document.getElementById("c_num");
if(c_name.value != "" && c_num.value != ""){
    var new_contect = {
        name:c_name.value,
        c_num:c_num.value

    }
     var json_text = JSON.stringify(new_contect);
     localStorage.setItem(current_user+"_contact"+c_name.value, json_text)
}
else{
    alert("Please enter name and phone no.")
    return false;
}

    }
    // conunt key
    // alert(localStorage.length);
    // localStorage.length;

    // find 2 No. key
    // localStorage.key(2);

    function all_contact(){
        var i;
        for(i=0; i<localStorage.length; i++){

            var all_keys=localStorage.key(i);
            
            if(all_keys.match(sessionStorage.getItem("user")+"_contact")){
                var json_txt = localStorage.getItem(all_keys);
                var obj = JSON.parse(json_txt);
                alert(obj.name)

                // create dynamic contact

                // var contact_box = document.createElement("DIV");
                // contact_box.setAttribute("id","contact");
                // var name_p = document.createElement("P");
                // var name_i = document.createElement("I");
                // name_i.setAttribute("class", "fas fa-user")
                // var tool = document.createElement("DIV");
                // tool.setAttribute("id", "tool");

                // var edit_i = document.createElement("I");
                // edit_i.setAttribute("class", "fas fa-edit")
                // var del_i = document.createElement("I");
                // del_i.setAttribute("class", "fas fa-trash");


                // var line = document.createElement("HR");
                // line.setAttribute("color","purple");
                // line.setAttribute("width","75%")
                // line.setAttribute("size","1")
                // var num_p = document.createElement("P");
                // var num_i = document.createElement("I");
                // num_i.setAttribute("class","fas fa-mobile-alt");

                // // define who is inside in which tag
                // name_p.appendChild(name_i);
                // name_p.innerHTML +=obj.name;
                // tool.appendChild(edit_i);
                // tool.appendChild(del_i);

                // num_p.appendChild(num_i);
                // num_p.innerHTML += obj.number;
                // contact_box.appendChild(name_p);
                // contact_box.appendChild(tool);
                // contact_box.appendChild(line);
                // contact_box.appendChild(num_p);

                // // set it into all contact box
                // var all_contacts_box= document.getElementById("all_contact_box");
                // all_contacts_box.appendChild(contact_box)

            }
        }
    }

}