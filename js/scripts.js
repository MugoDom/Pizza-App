$(function (){
    $("#total-order").hide();
    $(".cdata-overlay").hide();

});

$("#checkout").click(function(){
    let size = $("#size option:selected").val();
    let topping = $("#topping option:selected").val();
    let crust = $("#crust option:selected").val();
    let number = ($("#number").val());
    
    console.log(number);



    let order = (size, topping, crust, number, total) => {
        return {size, topping, crust, number, total};
    };


    //checking the prices of customer selection
    let price, totalPrice;
    switch(topping){
        case topping = "pepperoni":
            switch(size){
                case size = "small":
                    price = 500;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "medium":
                    price = 750;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "large":
                    price = 1000;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;


            }
            break;
        case topping = "mushroom":
            switch (size){
                case size = "small":
                    price = 500;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "medium":
                    price = 750;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "large":
                    price = 1000;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

            }
            break;
        case topping = "bacon":
            switch (size) {
                case size = "small":
                    price = 500;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "medium":
                    price = 750;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "large":
                    price = 1000;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

            }
            break;

        case topping = "greenpeppers":
            switch (size){
                case size = "small":
                    price = 500;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "medium":
                    price = 750;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "large":
                    price = 1000;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

            }
            break;

        case topping = "cheese":
            switch (size){
                case size = "small":
                    price = 500;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "medium":
                    price = 750;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

                case size = "large":
                    price = 1000;
                    if (crust === "chicago"){
                        totalPrice = (price * number) + 200;
                    } else if (crust === "sicilian"){
                        totalPrice = (price * number) + 250;
                    } else if (crust === "stuffed"){
                        totalPrice = (price * number) + 150;
                    } else {
                        totalPrice = (price * number) + 100;
                    }
                    break;

            }
    }

    let newOrder = order(size, topping, crust, number, totalPrice);
    console.log(newOrder);
   


    //write to order

    $("#checkout").click(function(){
        $("#total-order").slideDown();
        $(".cdata-overlay").slideUp();
        $("#order-list").slideDown();
        $(".deliver").show();
        $(".not-a-delivery").show();
        



        $("#order-list").text(" ");
        $("#order-list").append("<br>" + "Size :  "
        + newOrder.size + "<br>" + "Crust :     "
        + newOrder.crust + "<br>" + "Topping :     "
        + newOrder.topping + "<br>" + " Number of pizzas :    "
        + newOrder.number + "<br>" + "Total Price :  "
        + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
});
    $(".deliver").click(function(){
        prompt("Please enter your Location.");
        alert("Your order will be delivered soon.")
    });

    });




