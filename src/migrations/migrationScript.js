const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const prisma = require('../config/dbConfig');
const { parse } = require('csv-parse/sync');

const CSV_FILE_PATH = path.join(__dirname, 'legacy_data.csv');

async function migrateData() {
  const results = [];
  
  fs.createReadStream(CSV_FILE_PATH)
    .pipe(csv())
    .on('data', (data) => {
      results.push(data);
    })
    .on('end', async () => {
      console.log(`CSV file read successfully, starting migration...`);
      await processMigration(results);
    });
}

async function processMigration(data) {
  try {
    for (const row of data) {
      const { product_name, product_price, product_stock, user_name, user_email } = row;

      const existingProduct = await prisma.product.findFirst({
        where: {
          name: product_name,
        },
      });

      if (!existingProduct) {
        const product = await prisma.product.create({
          data: {
            name: product_name,
            price: parseFloat(product_price),
            stock: parseInt(product_stock, 10),
          },
        });
        console.log(`Product inserted: ${product.name}`);
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          email: user_email,
        },
      });

      if (!existingUser) {
        const user = await prisma.user.create({
          data: {
            username: user_name,
            email: user_email,
            password: 'defaultpassword',
          },
        });
        console.log(`User inserted: ${user.username}`);
      }
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
  } finally {
    await prisma.$disconnect();
  }
}

migrateData();

