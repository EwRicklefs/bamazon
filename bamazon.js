

//SQL Creation script
// create database bamazon;
// use bamazon;
// create table products (
// 	item_id int primary key,
//     product_name varchar(30),
//     department_name varchar(30),
//     price int,
//     stock_quant int
// );


var inquirer = require('inquirer');


//Javascript

//task 1 - display products DB contents to user
//  query db for values - select item_id AS ItemID, product name AS Name, price as Price from bamazon.products
//also save all the items ids as an array 
val itemIdArr = []

//task 2 - inquirer prompt
//  inquirer should ask for an ID of a item from the db
        //with invalid input prompt them again
        //with valid input, prompt them for a quantity of product
            //also save the item_id, price, stock quant as variables in JS here

            
inquirer.prompt([
    {
        type: 'input',
        name: 'userID',
        message: 'What item would you like to purchase?'
    }
]).then(function(val) {
    if (itemIdArr.contains(val.userID)) { //this might need type conversion
        var itemID = userID
        inquirer.prompt([
            {
                type: 'input',
                name: 'quant',
                message: 'How many would you like to buy?'
            }

        ]).then(function(val2) {
            var totalStock = //select stock_quant from bamazon.production where item_id=itemID
            if (totalStock > val2.quant) {
                //update bamazon.production set stock_quant=(totalstock - val2.quant) where item_id=itemID
            } else {
                console.log("thats more than we have!")
            }

        })
    } else {
        console.log("invalid item ID")
    }
});
//check product quant against the quant of that item (values should be saved from query above)


//if its a valid amount (user wants <= total stock)
    //'fufil' their order, reduce quant in database
//update bamazon set stock_quant = ? where item_id = ITEM_ID_FROM_EARLIER_AS_VARIABLE
    //where ? is set to the amount entered earlier
//console.log("your cost is ... " + (quant * value_of_item)
//value of item should be saved from initial query