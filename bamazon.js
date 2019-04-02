

//SQL Creation script
// create database bamazon;
// use bamazon;
// create table products (
// 	item_id int primary key,
//     product_name varchar(30),
//     department_name varchar(30),
//     price int,
//     stock_quant int
// )




//Javascript

//task 1 - display products DB contents to user
//  query db for values - select item_id AS ItemID, product name AS Name, price as Price from bamazon.products


//task 2 - inquirer prompt
//  inquirer should ask for an ID of a item from the db
        //with invalid input prompt them again
        //with valid input, prompt them for a quantity of product
            //also save the item_id, price, stock quant as variables in JS here

//check product quant against the quant of that item (values should be saved from query above)


//if its a valid amount (user wants <= total stock)
    //'fufil' their order, reduce quant in database
//update bamazon set stock_quant = ? where item_id = ITEM_ID_FROM_EARLIER_AS_VARIABLE
    //where ? is set to the amount entered earlier
//console.log("your cost is ... " + (quant * value_of_item)
//value of item should be saved from initial query