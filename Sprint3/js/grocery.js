// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (var i = 0; i < products.length; i++) {
        if (i == id-1) {
            cartList.push(products[id-1]);
        }
    }
    
}

// Exercise 2
function cleanCart() {
    cart =[]; 
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    for (var i = 0; i <cart.length; i++){
        switch(cart[i]['type']) {
            case 'grocery':
                subtotal.grocery.value = subtotal.grocery.value + cart[i]['subtotal'];
                break;
            case 'beauty':
                subtotal.beauty.value = subtotal.beauty.value + cart[i]['subtotal'];
                break;
            case 'clothes':
                subtotal.clothes.value = subtotal.clothes.value + cart[i]['subtotal'];
                break;
        }
    }
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    total = 0;
    for (let itemInCart in subtotal) {
        total += (subtotal[itemInCart].value - subtotal[itemInCart].discount);
    }
}

// Exercise 5 (este es nuevo a diferencia dela anterior)
function applyPromotionsSubtotals() {
    var sumaSobtotal = 0;
    for (var i = 0; i <cart.length; i++) {
        if (cart[i].subtotalWithDiscount != 0){
            sumaSobtotal += cart[i]['subtotal'] - cart[i]['subtotalWithDiscount'];
        }
    }
    subtotal.grocery.discount = sumaSobtotal;

}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    for (var i = 0; i < cartList.length; i++) {
        let existProduct = false; // para control de si existe el producto en el array cart.
        for (var j = 0; j < cart.length; j++) {
            if (cartList[i]['name'] == cart[j]['name']) {
                existProduct = true;
                cart[j].quantity+=1;  
                cart[j].subtotal += cart[j].price;
                cart[j].subtotalWithDiscount += cart[j].price;
            }
        }
         if (existProduct == false) {
           
            var product = {name: cartList[i]['name'], price: cartList[i]['price'], type: cartList[i]['type']}
            //var product = cartList[i]; ----> esta linea copia toda la info del objeto en el arral cartList al nuevo peor lo que se modifique en el nuevo tambien lo hace el objeto del cartList
            product.quantity = 1;
            product.subtotal = product.price;
            product.subtotalWithDiscount = product.price;
            cart.push(product); //push para subir algo a una array en este caso al array "cart"
         }
    }
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (var i = 0; i < cart.length; i++) {
        var subtotalDescuento = 0;
        /* ---Descuento para el Cooking oil --- */
        if (cart[i]['name'] == 'cooking oil' && cart[i]['quantity'] >= 3) {
           subtotalDescuento = cart[i]['quantity'] * 10;
           cart[i]['subtotalWithDiscount'] = subtotalDescuento;
           subtotal.grocery.discount += cart[i]['subtotal'] - subtotalDescuento;
        }
  
        /* ---Descuento para el Instant cupcake mixture --- */
        if (cart[i]['name'] == 'Instant cupcake mixture' && cart[i]['quantity'] >= 10) {
            subtotalDescuento = (2 * cart[i]['price'] * cart[i]['quantity']) / 3; // otra opcion es  (2 * cart[i]['subtotal']) / 3;
            cart[i]['subtotalWithDiscount'] = subtotalDescuento;
            subtotal.grocery.discount += cart[i]['subtotal'] - subtotalDescuento;  //el += es para sumar las propiedades (resultaoos) del parametro "subtotal.grocery.discount", que se encuentra en el primer "if"
        }
  
    }
}

// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (var i = 0; i < products.length; i++) {
        if (i == id-1) {
            let existProduct = false;
            
            for (var j = 0; j < cart.length; j++){
                if (products[i]['name'] == cart[j]['name']) {
                    existProduct = true;
                    cart[j].quantity += 1;  
                    cart[j].subtotal += cart[j].price;
                }   
            }

            if (existProduct == false) {
                var product = {name: products[i]['name'], price: products[i]['price'], type: products[i]['type']}
                product.quantity = 1;
                product.subtotal = product.price;
                product.subtotalWithDiscount = 0;
                cart.push(product);
            }
        }
    }
    calculateSubtotals();

    calculateTotal();
    
    applyPromotionsCart();

    applyPromotionsSubtotals();
}

// Exercise 9
/*
function removeFromCart(id) {
    for (var i = 0; i < cart.length; i++) {
        if (i == id-1) {
            if (cart[i]['quantity'] > 1) {
                cart[i]['quantity'] -= 1;
                cart[i]['subtotal'] -= cart[i]['price']
                cart[i]['subtotalWithDiscount'] = 0;
            }
            else if (cart[i]['quantity'] == 1 && cart.length == 1) {
                cart = [];
            }
            else if (cart[i]['quantity'] == 1) {
                cart.splice(i,1);

            }
        }
    }
    calculateSubtotals();

    calculateTotal();
    
    applyPromotionsCart();

    applyPromotionsSubtotals();
}
*/
// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom


}