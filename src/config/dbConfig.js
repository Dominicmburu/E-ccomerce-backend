const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Error connecting to the database via Prisma', err));

module.exports = prisma;
