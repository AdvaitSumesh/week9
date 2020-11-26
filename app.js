var cartValue = document.getElementById("cart-value");
var cartButton=document.getElementById("cart");


var book1add=document.getElementById("book1");
var book2add=document.getElementById("book2");
var book3add=document.getElementById("book3");
var book4add=document.getElementById("book4");
var book5add=document.getElementById("book5");
var book6add=document.getElementById("book6");

var game1add=document.getElementById("game1");
var game2add=document.getElementById("game2");
var game3add=document.getElementById("game3");
var game4add=document.getElementById("game4");

var craft1add=document.getElementById("craft1");
var craft2add=document.getElementById("craft2");
var craft3add=document.getElementById("craft3");
var craft4add=document.getElementById("craft4");

console.log(book1add)

var book1 = {
    name:"This was our pact",
    quantity:0,
    dollars: 7,
    cents:49 ,
}

// console.log(book1.name)

var book2 = {
    name:"The famous five" ,
    quantity:0 ,
    dollars:4 ,
    cents:59 ,
}

var book3 = {
    name:"Matlida",
    quantity:0 ,
    dollars:6 ,
    cents:80 ,
}

var book4 = {
    name:"Harry Potter",
    quantity:0 ,
    dollars:10 ,
    cents:0 ,
}

var book5 = {
    name:"For Young Readers",
    quantity:0 ,
    dollars:7 ,
    cents:29 ,
}

var book6 = {
   name:"Wimpy Kid - DIY",
    quantity:0 ,
    dollars:4 ,
    cents:99 ,
}

var game1 = {
    name:"Dart Board" ,
    quantity:0 ,
    dollars:17 ,
    cents:49 ,
}

var game2 = {
    name:"Connect 4",
    quantity:0 ,
    dollars:19 ,
    cents:99 ,
}

var game3 = {
    name:"Jenga",
    quantity:0 ,
    dollars:20 ,
    cents:99 ,
}

var game4 = {
    name:"Monopoly",
    quantity:0 ,
    dollars:19 ,
    cents:49 ,
}

var craft1 = {
    name:"Bookmarks" ,
    quantity:0 ,
    dollars:12 ,
    cents:49 ,
}
var craft2 = {
    name:"Birthday card" ,
    quantity:0 ,
    dollars:19 ,
    cents:99 ,
}
var craft3 = {
    name:"Stuffed toys" ,
    quantity:0 ,
    dollars:15 ,
    cents:99 ,
}
var craft4 = {
    name:"Dream catcher drawing" ,
    quantity:0 ,
    dollars:18 ,
    cents:49 ,
}

function updatecart(){
    cart=
    book1.quantity +
    book2.quantity +
    book3.quantity +
    book4.quantity +
    book5.quantity +
    book6.quantity +
    game1.quantity +
    game2.quantity +
    game3.quantity +
    game4.quantity +
    craft1.quantity +
    craft2.quantity +
    craft3.quantity +
    craft4.quantity +
    cartValue.innerHTML=cart;
}


book1add.oneclick= (e)=> {
    book1.quantity++;
    updatecart();
};
book2add.oneclick= (e)=> {
    book2.quantity++;
    updatecart();
};
book3add.oneclick= (e)=> {
    book3.quantity++;
    updatecart();
};
book4add.oneclick= (e)=> {
    book4.quantity++;
    updatecart();
};
book5add.oneclick= (e)=> {
    book5.quantity++;
    updatecart();
};
book6add.oneclick= (e)=> {
    book6.quantity++;
    updatecart();
};

game1add.oneclick= (e)=> {
    game1.quantity++;
    updatecart();
};
game2add.oneclick= (e)=> {
    game2.quantity++;
    updatecart();
};
game3add.oneclick= (e)=> {
    game3.quantity++;
    updatecart();
};
game4add.oneclick= (e)=> {
    game4.quantity++;
    updatecart();

    craft1add.oneclick= (e)=> {
        craft1.quantity++;
        updatecart();
    };
    craft2add.oneclick= (e)=> {
        craft2.quantity++;
        updatecart();
    };
    craft3add.oneclick= (e)=> {
        craft3.quantity++;
        updatecart();
    };
    craft4add.oneclick= (e)=> {
        craft4.quantity++;
        updatecart();
