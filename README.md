# 📚 MongoDB Bookstore Project

This project demonstrates how to create and manage a simple **Bookstore Database** using **MongoDB**.  
It includes inserting book data, running queries, and performing aggregation operations using **MongoDB Compass**, **MongoDB Shell (mongosh)**, and **Node.js scripts**.

---

## 🧠 Project Overview

The purpose of this project is to practice MongoDB operations such as:

- Inserting multiple book documents
- Querying data
- Using aggregation pipelines
- Displaying results in MongoDB Compass

---

## ⚙️ Requirements

Before running this project, make sure you have:

- **Node.js** installed  
- **MongoDB** installed and running locally  
- **MongoDB Compass** (for graphical interaction)

---

## 📂 Files in This Project

- `insert_books.js` – Script used to insert all books into the MongoDB collection.  
- `queries.js` – Script used to query and aggregate the data.  
- `README.md` – Documentation explaining the setup and usage.  
- `screenshot1.png`, `screenshot2.png`, etc. – Screenshots showing MongoDB Compass outputs.

---

## 🚀 How to Run the Scripts

### Step 1: Start MongoDB Server
Make sure your MongoDB service is running locally.  
You can check this by typing the following in your terminal or command prompt:```bash mongod

### Step 2: Open MongoDB Compass
1. Launch **MongoDB Compass**.  
2. Connect to your local database using the default connection string:
 **mongodb://localhost:27017**

3. Create a new database called **bookstore**.  
4. Inside it, create a collection named **books**.

## Step 3: Insert Data
1. Open **Visual Studio Code** or any terminal.  
2. Run the script below to insert the sample data:```bash node insert_books.js


This will insert all the book documents into the **books** collection in your **bookstore** database.

## Step 4: Running Queries and Aggregations
To run all the queries:```bash node queries.js

You can also experiment with queries and aggregation pipelines inside **MongoDB Compass** using the *Filter* and *Aggregation* tabs.

## Step 5: Example Queries Performed
- Find all books that are in stock and published after 2010  
- Find all books by a particular author  
- Display only book titles and authors  
- Group books by author and count the total number of books  
- Sort books based on their publication year

## Step 6: Screenshots
Below are the required screenshots showing the project working in MongoDB Compass.

### Screenshot 1: Books Collection in MongoDB Compass
Books collection in MongoDB Compass
<img width="1658" height="778" alt="Screenshot (10)" src="https://github.com/user-attachments/assets/947b4c56-b775-4522-b7e7-b301f2179ed7" />


### Screenshot 2: Queries Results
Query results showing books per title and author
<img width="1654" height="778" alt="Screenshot (11)" src="https://github.com/user-attachments/assets/91f3cfef-1f24-42b5-96d3-f162c65d67e9" />


### Screenshot 3 : Aggregation Results
Aggregation results showing total books per author 
<img width="1661" height="864" alt="Screenshot (12)" src="https://github.com/user-attachments/assets/9c9982c2-e49b-48aa-bd35-8f0a459d1be3" />


Aggregation results showing total books per published_year
<img width="1653" height="864" alt="Screenshot (13)" src="https://github.com/user-attachments/assets/0a4e8bae-5c68-4e47-9302-617bd5371cd4" />



## Step 7: Summary
This project helped in understanding:
- How to use MongoDB Compass and mongosh  
- How to insert and query data  
- How to perform data aggregation using the `$group` and `$sum` operators  
- How to visualize MongoDB data effectively

## Step 8: Author
**Sheila Mumbi**  
MongoDB Practice Project (Bookstore Database)




