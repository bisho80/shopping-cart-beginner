let productsIncart = localStorage.getItem("productsIncart");
let allproducts = document.getElementById('row-draw');

if (productsIncart) {
    let items = JSON.parse(productsIncart);
    drawCartProducts(items);  // Corrected the function name to drawCartProducts
}

function drawCartProducts(products) {  // Corrected the function name to drawCartProducts
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
                    <a href="#" class="btn btn-primary" onClick="Remove(event, ${item.id})">Remove from cart</a><span class="favorite-icon" onclick="toggleFavorite(this)">
                        <i class="far fa-heart"></i>    
                    </span>
                </div>
            </div>
        </div>
        `;
    });

    allproducts.innerHTML = y.join('');
}
