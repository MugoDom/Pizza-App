





$("#checkout").click(function(){
    let size = $("#size option:selected").val();
    let topping = $("#topping option:selected").val();
    let crust = $("#crust option:selected").val();
    let numberOrder = $("number option:selected").val();


    let order = (size, topping, crust, numberOrder, total) => {
        return {size, topping, crust, numberOrder, total};
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

});