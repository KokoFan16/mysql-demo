# Web-based MySQL Query Example


### Setup Overview:
**Client**: A simple HTML page with a form to enter a query.  
**Server**: Node.js using Express to handle HTTP requests and communicate with a MySQL database.  
**MySQL Database**: A local MySQL instance to store data.

------------------

#### 1. Set up MySQL Database:

```
$ mysql -u root -p
$ CREATE DATABASE <db-name>;
$ USE <db-name>;
$ CREATE TABLE <table-name> (...)
$ INSERT INTO users (...) VALUES (...)
```

#### 2. Set Up the Server (Node.js + Express)
```
$ git clone git@github.com:KokoFan16/mysql-demo.git
$ cd mysql-demo
$ npm init -y
$ npm install express mysql body-parser
```
Modify the MySQL connection (including host, user, password, database) in server.js.  

#### Run the Application

-  Start the MySQL server and ensure that it is running.
-  Start your Node.js server by running:
```
$ node server.js
```
Your application should now be running at http://localhost:3000


------------------
#### Demo
![Query Example Video](https://github.com/KokoFan16/mysql-demo/blob/main/query-example.gif)
------------------

### Known issue:

**Issue**: style.css does not work   
**Solution**:    
Create ```public``` folder, and make sure your folder structure looks like this:

mysql-demo  
  ├ public  
   $~~~~$    ├ style.css  
  ├ index.html  
  ├ server.js  

Add this line into ```server.js```

```
$ app.use(express.static('public'));
```





