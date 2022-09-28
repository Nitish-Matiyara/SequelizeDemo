const sequelize = require("../server")
const Book = require("../models/bookModel")
sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 
    /// CREATE
    Book.create({
        title: "Clean Code",
        author: "Robert Cecil Martin",
        release_date: "2021-12-14",
        subject: 3
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });

    Book.create({
        title: "Harry Potter",
        author: "J.K. Rowling",
        release_date: "2021-11-10",
        subject: 4
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });


    // READ
    Book.findAll().then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });
   // READ from Where
    Book.findOne({
        where: {
            title : "Harry Potter"
        }
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

    //DELETE
    Book.destroy({
        where: {
            title : "Harry Potter"
        }
    }).then(() => {
        console.log("Successfully deleted record.")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });