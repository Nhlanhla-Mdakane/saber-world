//making constructor for products

function product(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
}

//**remember to put this part near the end of the code


//making function for when user presses add to cart for product 1
function productOneAdd() {
    //making the product object using the constructor
    let product1 = new product(
        "PALPATINE'S LIGHTSABER",
        "4999.99",
        "https://lumiere-a.akamaihd.net/v1/images/palpatines-lightsaber_c261c820.jpeg?region=69%2C0%2C1422%2C800&width=768"
    );




    productArray.push(product1);

    //sending array to JSON object
    sessionStorage.setItem("saberWorld", JSON.stringify(productArray));





    totalAmountProducts = parseInt(totalAmountProducts) + parseInt(product1.price) + parseInt(product1.price) * (15 / 100);
    //displaying total amount to users
    alert("your Current total R:" + parseInt(totalAmountProducts.toFixed(2)));
}

//making function for when user presses add to cart for product 2
function productTwoAdd() {
    //making the product object using the constructor
    let product2 = new product(
        "Yoda's Lightsaber",
        "3499.99",
        "https://lumiere-a.akamaihd.net/v1/images/yodas-lightsaber_24cee145.jpeg?region=35%2C0%2C1425%2C800&width=768"
    );


    //inserting product 2 into array
    productArray.push(product2);

    //sending array to JSON object
    sessionStorage.setItem("saberWorld", JSON.stringify(productArray));




    totalAmountProducts = parseInt(totalAmountProducts) + parseInt(product2.price) + parseInt(product2.price) * (15 / 100);
    //displaying total amount to users
    alert("your Current total R:" + parseInt(totalAmountProducts.toFixed(2)));
}



//making function for when user presses add to cart for product 3
function productThreeAdd() {
    //making the product object using the constructor
    let product3 = new product(
        "Darth Vader's Lightsaber",
        "5999.99",
        "https://lumiere-a.akamaihd.net/v1/images/vaders-lightsaber_7a490d47.jpeg?region=125%2C0%2C1321%2C743&width=768"
    );


    //inserting product 3 into array
    productArray.push(product3);

    //sending array to JSON object
    sessionStorage.setItem("saberWorld", JSON.stringify(productArray));





    totalAmountProducts = parseInt(totalAmountProducts) + parseInt(product3.price) + parseInt(product3.price) * (15 / 100);
    //displaying total amount to users
    alert("your Current total R:" + parseInt(totalAmountProducts.toFixed(2)));
}

//making function for when user presses add to cart for product 4
function productFourAdd() {
    //making the product object using the constructor
    let product4 = new product(
        "Mace's Lightsaber",
        "2999.99",
        "https://lumiere-a.akamaihd.net/v1/images/mace-windus-lightsaber_96a893e2.jpeg?region=69%2C0%2C1422%2C800&width=768"
    );


    //inserting product 4 into array
    productArray.push(product4);

    //sending array to JSON object
    sessionStorage.setItem("saberWorld", JSON.stringify(productArray));






    totalAmountProducts = parseInt(totalAmountProducts) + parseInt(product4.price) + parseInt(product4.price) * (15 / 100);
    //displaying total amount to users
    alert("your Current total R:" + parseInt(totalAmountProducts.toFixed(2)));
}
//making function for when user presses add to cart for product 5
function productFiveAdd() {
    //making the product object using the constructor
    let product5 = new product(
        "Dooku's Lightsaber",
        "2499.99",
        "https://lumiere-a.akamaihd.net/v1/images/count-dookus-lightsaber_b5744c18.jpeg?region=69%2C0%2C1422%2C800&width=768"
    );

    //inserting product 5 into array
    productArray.push(product5);

    //sending array to JSON object
    sessionStorage.setItem("saberWorld", JSON.stringify(productArray));





    totalAmountProducts = parseInt(totalAmountProducts) + parseInt(product5.price) + parseInt(product5.price) * (15 / 100);
    //displaying total amount to users
    alert("your Current total R:" + parseInt(totalAmountProducts.toFixed(2)));
}


let productItem = 0;
//making array for products
let productArray = [];

//making variable for the overall total including tax, discount and delivery
let overallAmount = 0;
//making variabe that will be used to display to the user , what the current total is , including tax
let totalAmountProducts = 0;
productArray = [];
//function that displays whats in the cart to the user
function saberCart() {

    // Stuff to do as soon as the DOM is ready

    //checking if code has run before, if it hasnt im initialising the values i want to be stored in the session storage , if i have..
    //  im displaying the information in them
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        //setting array using JSON
        sessionStorage.setItem("saberWorld", JSON.stringify(productArray));
        //setting this JSON object to see if the code has been run before
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        //get JSON array so i can display user information to
        productArray = JSON.parse(sessionStorage.getItem("saberWorld"));
        //making a counter to count which position in the array i am currently in

        let i = 0;
        productArray.forEach(function(p) {
            let cartDiv = document.getElementById("divCartObjects");
            //creating and displaying product properties
            let productName = document.createElement("H3");
            productName.innerHTML = p.name;

            let productImg = document.createElement("IMG");
            productImg.src = p.img;
            productImg.style.height = "400px";
            productImg.style.width = "500px";

            let productPrice = document.createElement("H3");
            productPrice.innerHTML = "R" + p.price;

            cartDiv.appendChild(productName);

            cartDiv.appendChild(productImg);

            cartDiv.appendChild(productPrice);




            //increasing the counter
            i = i + 1;


        });



        // making confirm Button which generates a reference number and alerts user that their order is successful
        let confirmButton = document.createElement("BUTTON");
        confirmButton.innerHTML = "confirm";

        confirmButton.addEventListener("click", function() {

            //creating random number generator for refernce number for user
            function IDGenerator() {

                this.length = 8;
                this.timestamp = +new Date;

                var _getRandomInt = function(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                this.generate = function() {
                    var ts = this.timestamp.toString();
                    var parts = ts.split("").reverse();
                    var id = "";

                    for (var i = 0; i < this.length; ++i) {
                        var index = _getRandomInt(0, parts.length - 1);
                        id += parts[index];
                    }

                    return id;
                }
            }

            let generator = new IDGenerator();
            let refernceNumber = generator.generate();

            //alerting user to their total
            alert("Your order was successful");
            //alerting the user what their reference number is
            alert("Your refernce Number is " + refernceNumber);

        });
        //appending button div in html
        let confirmOrder = document.getElementById("confirmOrder");
        confirmOrder.appendChild(confirmButton);

        //this is the jquery section
        let totalButton = document.getElementById("totalButton");
        totalButton.innerHTML = "Total";

        //calculating user total using array
        productArray.forEach(function(s) {
            totalAmountProducts = totalAmountProducts + parseInt(s.price)



        });
        $("#totalButton").click(function() {




            //gets id to display total after conditions have been tested
            let total2 = document.getElementById("total2");

            //gets id to display when user presses total
            let totalDisplay = document.getElementById("total");
            totalDisplay.innerHTML = "your current total including tax  R: " + totalAmountProducts;


            /*
            i will makes these variables more clear
            */
            //making variable for when user clicks on discount
            let discount15 = document.getElementById("discount").checked;
            //making variable for when user clicks on delivery option 1
            let delivery15 = document.getElementById("delivery").checked;
            //making variable for when user clicks on delivery option 12
            let delivery10 = document.getElementById("delivery10").checked;


            //making variable for vat, so we can calculate easier
            let vat = totalAmountProducts * (15 / 100);


            //making variable for discount option , so we can calculate easier
            let discount = totalAmountProducts * (15 / 100);

            //making variable for delivery option 1, so we can calculate easier
            let delivery = totalAmountProducts * (15 / 100);
            //making variable for delivery option 2, so we can calculate easier
            let deliveryOp2 = totalAmountProducts * (10 / 100);
            //

            /*
            im not sure why the if statements dont work
            */
            //this part of the code tests which buttons the user has clicked and then gets the total accordingly
            if ((discount15.checked == true) && (delivery15.checked == true)) {



                totalAmountProducts = totalAmountProducts + vat - discount + delivery;
                //displaying new total and hiding previous statements
                total2.innerHTML = "your new total :R " + totalAmountProducts;
                $("#totalButton").hide();
                $("#total").hide();
            }




            //this part of the code tests which buttons the user has clicked and then gets the total accordingly
            else if ((discount15.checked == false) && (delivery15.checked == true)) {


                totalAmountProducts = totalAmountProducts + vat + delivery;
                //displaying new total and hiding previous statements
                total2.innerHTML = "your new total :R " + totalAmountProducts;
                $("#totalButton").hide();
                $("#total").hide();
            }



            //this part of the code tests which buttons the user has clicked and then gets the total accordingly
            else if ((discount15.checked == true) && (delivery15.checked == false)) {



                totalAmountProducts = totalAmountProducts + vat - discount;

                //displaying new total and hiding previous statements
                total2.innerHTML = "your new total :R " + totalAmountProducts;
                $("#totalButton").hide();
                $("#total").hide();
            }
            //this part of the code tests which buttons the user has clicked and then gets the total accordingly
            else if ((discount15.checked == false) && (delivery15.checked == false)) {


                totalAmountProducts = totalAmountProducts + vat;

                //displaying new total and hiding previous statements
                total2.innerHTML = "your new total :R " + totalAmountProducts;
                $("#totalButton").hide();
                $("#total").hide();
            }
            //this part of the code tests which buttons the user has clicked and then gets the total accordingly
            else if ((discount15.checked == true) && (delivery10.checked == true)) {



                totalAmountProducts = totalAmountProducts + vat - discount + deliveryOp2;

                //displaying new total and hiding previous statements
                total2.innerHTML = "your new total :R " + totalAmountProducts;
                $("#totalButton").hide();
                $("#total").hide();
            }
            //this part of the code tests which buttons the user has clicked and then gets the total accordingly
            else if ((discount15.checked == false) && (delivery10.checked == true)) {



                totalAmountProducts = totalAmountProducts + vat + deliveryOp2;

                //displaying new total and hiding previous statements
                total2.innerHTML = "your new total :R " + totalAmountProducts;
                $("#totalButton").hide();
                $("#total").hide();
            }

            //this part of the code tests which buttons the user has clicked and then gets the total accordingly
            else if ((discount15.checked == true) && (delivery10.checked === false)) {



                totalAmountProducts = totalAmountProducts + vat - discount;

                //displaying new total and hiding previous statements
                total2.innerHTML = "your new total :R " + totalAmountProducts;
                $("#totalButton").hide();
                $("#total").hide();
            }

            //this part of the code tests which buttons the user has clicked and then gets the total accordingly
            else if ((discount15.checked == false) && (delivery10.checked == false)) {


                totalAmountProducts = totalAmountProducts + vat;

                //displaying new total and hiding previous statements
                total2.innerHTML = "your new total :R " + totalAmountProducts;
                $("totalButton").hide();
                $("total").hide();

            }

            //this part hides and unhides the total and makes it animate to the right

            $("#totalButton").animate({ right: '250px' });
            $("#total").toggle(1000).css("color", "green");




        });

        //this droplist keeps repeating 3 times
        $("#cartList").click(function() {
            let cartItems = document.getElementById("cartList");
            productArray.forEach(function(c) {
                let item = document.createElement("option");
                item.innerHTML = c.name;

                cartItems.appendChild(item);
            });

        });
       //this function clears storage when user wants to clear the cart
           $("#clearStorage").click(function() {

          sessionStorage.clear();
          //reloading the page
          location.reload();
        });
    }
}
