import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { CategoriesModule } from './categories/categories.module'
import { AccountsModule } from './accounts/accounts.module'
import { TransactionsModule } from './transactions/transactions.module'
import { SubcategoriesModule } from './subcategories/subcategories.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    PrismaModule,
    CategoriesModule,
    AccountsModule,
    TransactionsModule,
    SubcategoriesModule,
    UsersModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
