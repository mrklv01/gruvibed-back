"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv = require("dotenv");
dotenv.config();
const faker_1 = require("@faker-js/faker");
const prisma = new client_1.PrismaClient();
const createProducts = async (quantity) => {
    const products = [];
    console.log(`Created ${products.length} products`);
    for (let i = 0; i < quantity; i++) {
        const product = await prisma.product.create({
            data: {
                title: faker_1.faker.commerce.productName(),
                slug: faker_1.faker.commerce.productName(),
                price: +faker_1.faker.commerce.price(),
                articul: 1234,
            },
        });
        products.push(product);
    }
};
async function main() {
    console.log('Start seeding...');
    await createProducts(15);
}
main()
    .catch(e => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map