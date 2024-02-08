let usernameInput = document.getElementById('inputusername');
let passwordInput = document.getElementById('inputPassword6');
let emailInput = document.getElementById('inputemail');

let registerBtn = document.getElementById('sign_in');

registerBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    // calling event.preventDefault() within your event handler, you are telling the browser not to proceed with the default behavior of submitting the form.

   // In simpler terms, it stops the form from being submitted immediately when the button is clicked. This can be useful in cases where you want to perform some actions (like validation) before allowing the form submission. If you don't prevent the default behavior and there are issues with the form data (for example, if validation fails), the form would still be submitted, and the page might reload or navigate away.

    if (usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Please fill all data");
    } else if (usernameInput.value.length < 8) {
        alert("Username should be at least 8 characters");
    } else if (passwordInput.value.length < 12) {
        alert("Password should be at least 12 characters");
    } else if (!/[A-Z]/.test(passwordInput.value)) {           //hayde deyman iza bade ykoun ande bl kelme one capital letter 
        alert("Password should contain at least one capital letter");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value)) {  //hayede iza bade ykoun ande bkl  kelme symbol 
        alert("Password should contain at least one symbol");
    }// Check if the email contains '@'
    else if (!emailInput.value.includes('@')) {
        alert("Please include '@' in your email");
         // Stop further execution if '@' is not present in the email
    }
    else {    ////ya3ne iza kel yale abel meshe halon whala2 bade kamel she8el al value yale balb l3 input 
              //ya3ne hala2 ba3d makel shi zabat 3mele bl localstorage yale hye mtl data base username wkhod lvalue tab3eto mnlikataba luser 

        localStorage.setItem("username", usernameInput.value);
        localStorage.setItem("password", passwordInput.value);
        localStorage.setItem("email", emailInput.value);
        //bas bade rou7 shouf wen tsajalo aw iza la2 brou7 inspect application ,local storage ,file 

        // ALERT BA3D ma loun abet kelshii bma7alo sa7 
        alert("Registration successful! Please proceed to login.");

        //iza sayavet bl local storage lma3loumet ba3d makatb akid w3aba kel linputs l3 bade elo wadine ala login 
        //fa bst3amel shi esmo set timeout kerml 7etelo wa2t la yekhdne al location ma3 windows.location 



        setTimeout(()=>{
            window.location="login.html"
        } ,1500)// ya3ne wadine login page ba3d senye wnos mn submit 

        //aham sha8le bl web lezm ta3refa hye function(event) {event.preventDefault(); yale ketbina fo2 la2an ana mabade wa2t 
        //ef2os submit yn3amal refresh de8re hye hayde btmna3 eno lpc ysha8el rase eno submit yala refresh wkhedo la2an iza refresh
        //wkhedo ha ysayvle klshi bl local bas maha yekhdne al login la2an ana ayelo khedne ba3d di2a wnos mn t3beyet lma3loumet 
        // howe aa submit ha ysayev lma3loumet wha yfade kelshi mn limput wana ayel ba3d senye wnos iza mawjoudin ma3loumet khdne maha 
        //yle2e shi fa maha yrou7 ba3d senye wnos aa login 
    


    }

    
});
