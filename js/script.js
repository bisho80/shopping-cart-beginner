// hala2 sar badna nfout al home page aw index badna nekhfe login wl register wnbayen username wl logout 

let userinfo = document.getElementById('user-info') ////heda la2an ken mekhfe wbade bayne bl css 

let userdata = document.getElementById('user-data') ///heda bade 7et ma7alou username lal user kermel hek stad3ito 

///linket tab3oul login wregister bade e7zefoun wbayen user-info class wbade balb hal class li bayanto 7et luser-data yale hye 3ibara an esm luser 


// bade estad3e navbar links yale jeme3 register wlogin bl home kermel ekhfi bas ya3mel login sa7 

let links =document.getElementById('navbar-links')


///// kif bade et2akad enos ayer ande amalye register wzabta weno fi hada msajal sa7 ader ya3mel login ma3neha eno bl local storage 
//// ande username fine jibo bl get wet2akad mno iza fi aber lget item heto bl user-data 

if(localStorage.getItem("username")){
    links.remove() ///7zefle linket register wlogin

    //kmn bade ande luser info bade ezhero wbade het balbo luserdata 

    userinfo.style.display= "flex" ///ana amelo style display none kermel ma yekhod mase7a wkermel ma ybayen bas raho l2 sar fine bayno ade mn khikel js bl css


    userdata.innerHTML = localStorage.getItem("username")//// innerhtml iza bdak tktob shi balb hal item aw tag li enta 3ate id m3ayen ho bade ektob luser-data yale esm luser bl local storage


}

// icon colored in red <!-- Add this script at the end of the body section or in an external JavaScript file -->
function toggleFavorite(icon) {
    icon.querySelector('i').classList.toggle("fas"); // Toggle the 'fas' class (solid heart) on click
    icon.classList.toggle("favorited"); // Toggle the 'favorited' class on click
}

let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})




// bade shill html khafef bkhale item wl be2e bzide bl js aa tari2et lobject 
//bade sir esta3mel bas code ltml mara wahde wl be2e byejo lwahdon bsir b8awyer prametre 

let allproducts = document.getElementById('row-draw');

let products =[
 {
    id:1,
    tittle: "Vital Proteins Collagen Peptides",
    descreption:"Protein source: Whey protein isolate", 
    Flavor: "Unflavored ", 
    Ingredients: "No added sugar or artificial sweeteners" , 
    nowprice: "$29",  
    oldprice:"$40", 
    sale:"now 28% off",
    imageUrl: "images/isolatewhey.webp"},
    
 {   id:2,
    tittle: "Optimum Nutrition Gold Standard Whey - Double Rich Chocolate",
    descreption:"Protein source: Whey protein isolate ", 
    Flavor: "Double-rich chocolate", 
    Ingredients: "Natural and artificial",
    flavors :"no added sugar",
    nowprice: "$39", 
    oldprice:"$42",
    sale:"now 7% off",
    imageUrl: "images/Optimum-Nutrition-Double-Rich-Chocolate.webp"},
    
  {  id:3,
    tittle: "Vital Proteins Collagen Peptides",
    descreption:" Protein source:Cow-based collagen peptides ",
     Flavor: "Unflavored",
     Ingredients: "No added sugar or artificial sweeteners" ,
     nowprice: "$22",
    oldprice:"$27",
    sale:"now 20% off",
    imageUrl: "images/vital.webp"},
    
 {   id:4,
    tittle: "Orgain Simple Vegan Protein Powder - Vanilla",
    descreption:"Protein source: Pea protein, chia seeds, pumpkin seed protein, almond protein",  
    Flavor: "Vanilla",
    Ingredients: "No artificial sweeteners ",
    nowprice: "$22",
    oldprice:"$25",
    sale:"now 12% off",
    imageUrl: "images/pai.webp"},
    
{    id:5,
    tittle: "Vega Sport Premium Protein - Chocolate, 29.5 Oz.",
    descreption:"Protein source: Pea, pumpkin, and sunflower-seed protein",
    Flavor: "Chocolate",
    Ingredients: "Natural flavors and stevia" ,
    nowprice: "$33 ",
    oldprice :"$47", 
    sale: "30% off",
    imageUrl: "images/vega.webp"},
    
    {id:6,
    tittle: "Iconic Chocolate Truffle Protein Powder - 1 lb.",
    descreption:"Protein source: Whey protein isolate<br",
    Flavor:"Chocolate or vanilla",
    Ingredients:" Cocoa powder, monk fruit, and stevia ",
    nowprice:"$40",
    oldprice :"", 
    sale: "only 2 pieces", 
    imageUrl: "images/iconic.webp"},
    


]

//  hala2 bade a3mel function yale bta3mel hal cards wara ba3d 



function drawItem() {
    let y = products.map((item) => {
        return `
        <div class="col">
            <div class="card" style="width: 24rem;">
                <img src="${item.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.tittle}</h5>
                    <p class="card-text">${item.descreption}<br>| Flavor:${item.Flavor} |<br>Ingredients: ${item.Ingredients} <br> ${item.nowprice} <br><strike>${item.oldprice}</strike> <span>${item.sale}</span></p>
                    </p>
                    <br>
                    <a href="#" class="btn btn-primary" onClick="addToCart(event, ${item.id})">Add to cart</a><span class="favorite-icon" onclick="toggleFavorite(this)">
                        <i class="far fa-heart"></i>    
                    </span>
                </div>
            </div>
        </div>
        `;
    });

    allproducts.innerHTML = y.join(''); // Join the array into a string and set innerHTML
//     //let fruits = ['Apple', 'Banana', 'Orange'];

// // Using join with a separator (comma)
// let joinedStringWithComma = fruits.join(', ');
// console.log(joinedStringWithComma);
// // Output: "Apple, Banana, Orange"

// // Using join with no separator
// let joinedStringNoSeparator = fruits.join('');
// console.log(joinedStringNoSeparator);
// // Output: "AppleBananaOrange"
}

drawItem()
 /////////////////////////////hek sha8alet lfuction wlem ykounou bayano

 // hala2 bade a3mel sha8le eno ef2os add to cart dawe ande bade wyzid number aa hasab ana shou zeyid 
 let Badje = document.querySelector(".badge")
 let cartProductDiv = document.querySelector(".carts_products div")


//  function check(){         // bade  a3mel fuction iza howe user waamal aded to cart wmano msajal aw ando account byekhdo aa login iza howe user byekhdo aa products card waham shi fo2 lonclick=check()  ahm shi ben jkawsayn manesa am a3mel call la fuction wakid manensa ""
//     if(localStorage.getItem=("username")){
//         window.location="carts-products.html"
//     }
//     else{
//         window.location="login.html"
//     }
//  }

// let addedItem = [];
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    Badje.style.display = "block";
    Badje.innerHTML = addedItem.length;
}



let cartproductdiv = document.querySelector(".carts-products div")   /// abde estad3e ldiv teb3a lal carst products kermel bas het add to cart yenxal balb hayde div 

if(localStorage.getItem=("username")){
    function addToCart(event,id){
        event.preventDefault();
        let choosenItem = products.find((item) => item.id === id );
        cartProductDiv.innerHTML += `<p>${choosenItem.tittle}</p>`;
        

        addedItem = [...addedItem , choosenItem]
        localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
        let cartProductsLength = document.querySelectorAll(".carts_products div p")
        // console.log(cartProductsLength.length)
        Badje.style.display ="block";
        Badje.innerHTML = cartProductsLength.length;
    }
}else {
    window.location ="login.html"
}
 






// let cartproductdiv = document.querySelector(".carts-products div")   /// abde estad3e ldiv teb3a lal carst products kermel bas het add to cart yenxal balb hayde div 
// function addToCart(event,id){    /////leh hatet fo2 bl html bl fuction li ande addToCart(${item.id}) la2an makel ladd to cart buttom bade yehon ya3mlo mtl ba3d waslan kel wahde mekhtelfen an tene la2an lama bef2os te3ite awal wahde bada tredele 3nwen awal wahde wl tenye kmn fa michen hek heda code li had on clik howe ma3ne lama ef2os ala addtocart jeble lid lal wahdet add to cart yale f2aset aleha wla tet2akad 3mol console.log(id)
//     event.preventDefault(); // Prevent the default behavior of the anchor element 
//     //When you click on the "Add to Cart" button, the default behavior of an anchor (<a>) element is to navigate to the URL specified in its href attribute. In your case, the href attribute is set to "#", which typically brings the page back to the top.
    
//    // To prevent the default behavior and avoid navigating to the top of the page, you can modify your addToCart function to include event.preventDefault() ///plus <a href="#" class="btn btn-primary" onClick="addToCart(event, ${item.id})">Add to cart</a>



//     let choosenitem = products.find((item)=>item.id===id);  // ma3neha eno find dawerle bl items lmawjoudin balb lproducts ande 6 item iza mn hawde 6 litem yale fo2 ando lid bisewe id yale ana fa2aste aleh wakhadtoparametre bl fucntion(id) khazenle lakan hal item bl choosen item wfine het console.log(choosenitem) et2akad 

//     cartproductdiv.innerHTML += `<p style="font-size: 11px; font-weight: bold;">${choosenitem.tittle}</p>`// hon am ektob balb ldiv lfadye yalle stad3t abel lfunction whatet p la2an ansor block ana bade yehon wbade yeh yktble bas mn choose item tittle 

//     let cardproductslenghth = document.querySelectorAll(".carts-products div p") // bade shouf kam p ande bhal div wala adad lp tba3le ra2m bl badge 
//     Badje.style.display="block";
//     Badje.innerHTML=cardprductslenghth.length;


// }


/// hala2 bade a3mel fuction bshakel iza f2aset al icon yftahle cartproducts aw y5lya block fi halet ana dayef shi ya3ne mana fadye wfi hal ana mbayan wabde sakera mishen ma dal al sheshe kel lwa2et
let shopping_cart_icon = document.querySelector(".shoppingcart")
let cartProduct=document.querySelector(".carts-products")
shopping_cart_icon.addEventListener("click", opencart)


function opencart(){                            
    if(cartproductdiv!=""){
        if(cartProduct.style.display=="block"){    ///aham shi lezm a3rfo eno == hye motab2a  l=== hye mo3adale hol li byfr2o hon am tabe2 
            cartProduct.style.display="none"
        }
    else {
        
            cartProduct.style.display="block"
    }
}

}