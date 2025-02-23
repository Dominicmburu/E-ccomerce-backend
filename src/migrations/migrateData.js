const fs = require("fs");
const path = require("path");
const pool = require("../config/dbConfig");
const csvParser = require("csv-parser");

const migrateData = () => {
  const products = [];

  fs.createReadStream(path.join(__dirname, "products.csv"))
    .pipe(csvParser())
    .on("data", (row) => {
      products.push(row);
    })
    .on("end", async () => {
      for (const product of products) {
        const { name, price, stock } = product;
        await pool.query("SELECT * FROM create_product($1, $2, $3)", [
          name,
          price,
          stock,
        ]);
      }
      console.log("Data migration completed successfully!");
    });
};

migrateData();
