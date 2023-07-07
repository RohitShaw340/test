const express = require("express");
const app = express();
// const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3001;

// const db = mysql.createPool({
//   host: "sql300.epizy.com",
//   user: "epiz_33284042",
//   password: "ZfuRJARJOEUP1a",
//   database: "epiz_33284042_expences",
// });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/api/send", (req, res) => {
  // const name = req.body.item_name;
  // const price = req.body.item_price;
  // const date = req.body.item_date;

  // // console.log(req.body);

  // const insert_query =
  //   "insert into expencedata(item_name,item_date,item_price) values (?,?,?);";
  // db.query(insert_query, [name, date, price], (err, result) => {
  //   console.log(err);
  // });
});

app.get("/api/get", (req, res) => {
  // const select_query = "select * from expencedata order by item_date DESC;";

  // db.query(select_query, (err, result) => {
  //   console.log(err);
  //   res.send(result);
  //   console.log(result);
  // });
});

app.post("/api/delete", (req, res) => {
  // const id = req.body.item_id;
  // console.log(id);
  // const delete_query = "DELETE from expencedata WHERE id= ? ";
  // db.query(delete_query, [id], (err, result) => {
  //   console.log(err);
  //   console.log(result);
  // });
});

app.listen(port);
