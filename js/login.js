// mnjib lma3loumet mara wahde mn regsiter 

let usernameInput = document.getElementById('inputusername');
let passwordInput = document.getElementById('inputPassword6');
let loginBtn = document.getElementById('sign_in');

// awal sah8le bade jib lbayanet mnl local storage akid bjib bl get 

let getUsername = localStorage.getItem("username") ///getitem ya3ne jble lvlaue yale balb lkey "username"
let getpassword = localStorage.getItem("password") ///getitem ya3ne jble lvlaue yale balb lkey "password"

/// lama ef2os aa login 3mele 
loginBtn.addEventListener("click", function(e){
    e.preventDefault() ///atoul matnsia he bas ykoun andak click 
    if(usernameInput.value===""||passwordInput.value===""){
        alert("please fill data")  ////iza ltnen aw wahde fadye bta3te error abyon 
    }////iza jarrab aktar mn 3 marrat btnatro 30 senye la yerja3 ya3mel logout
    else{
        if(getUsername && getUsername.trim() === usernameInput.value.trim && getpassword && getpassword.trim()===passwordInput.value){

             // ALERT BA3D ma loun abet kelshii bma7alo sa7 
             // hatet trim end lgetusername kermel iza ken mdakhal lshakhel value bl registration wfi fawasel abel wab3d lesm khedle bas lesem bala fawsl
             //whatet usernameinput.value.trim kermel bl login ana wma ektob iza fi fawasel abel wba3d kmn ma tekhdon khod bas lesem bidoun lfawasel
             
        alert("Registration successful! Please proceed to login.")

        setTimeout(()=>{
            window.location="index.html"
        } ,1500)// ya3ne wadine login page ba3d senye wnos mn submit 

        }
    
    else{
        alert("Registration failed! Please try again.");

    }
}

})