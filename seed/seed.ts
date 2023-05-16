import { PrismaClient, Product } from '@prisma/client'
import * as dotenv from 'dotenv'
import { tableProducts } from './products/products'
dotenv.config()
import { faker } from '@faker-js/faker'
const prisma = new PrismaClient()

const createProducts = async (quantity: number) => {
  const products: Product[] = []

  console.log(`Created ${products.length} products`)

  for (let i = 0; i < quantity; i++) {
    const product = await prisma.product.create({
      data: {
        title: faker.commerce.productName(),
        slug: faker.commerce.productName(),
        price: +faker.commerce.price(),
        articul: 1234,
      },
    })
    products.push(product)
    // tableProducts.forEach(async item => {
    //     const product = await prisma.product.create({
    //         data: {
    //             title: item.title,
    //             slug: item.slug,
    //             price: item.price,
    //             articul: item.articul
    //         }
    //     })
    //     products.push(product)
    // })
  }
}

async function main() {
  console.log('Start seeding...')
  await createProducts(15)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
