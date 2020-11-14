SELECT * FROM User;
SELECT * FROM Category;


DELETE FROM User;
DELETE FROM Category;
DELETE FROM Transactions;

SELECT * FROM User;
SELECT * FROM Category;
SELECT * FROM Transactions;

SELECT *
FROM Transactions 
    inner join User on Transactions.User_id = User.id
    inner join Category on Transactions.Category_id = Category.id;


