import { PrismaClient, TransactionType, AccountType } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto'
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto'

const prisma = new PrismaClient()

const fakeCategory = (): CreateCategoryDto => ({
  name: faker.commerce.department(),
  type: faker.helpers.arrayElement([
    TransactionType.EXPENSE,
    TransactionType.INCOME
  ])
})

const fakeAccount = (userId: string): CreateAccountDto => ({
  userId,
  name: faker.finance.accountName(),
  includeInTotal: faker.datatype.boolean(),
  type: faker.helpers.arrayElement(Object.values(AccountType))
})
const fakeUser = () => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
  name: faker.person.fullName()
})

const main = async () => {
  const user = await prisma.user.create({
    data: fakeUser()
  })
  for (let i = 0; i < 10; i++) {
    const category = await prisma.category.create({ data: fakeCategory() })
    const subcategory = await prisma.subcategory.create({
      data: {
        name: category.name,
        categoryId: category.id
      }
    })
    const account = await prisma.account.create({ data: fakeAccount(user.id) })
    await prisma.transaction.create({
      data: {
        amount: Number(faker.finance.amount()),
        description: faker.lorem.sentence(),
        date: faker.date.recent(),
        accountId: account.id,
        subcategoryId: subcategory.id,
        type: category.type,
        categoryId: category.id
      }
    })
  }
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
