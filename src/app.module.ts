import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';

@Module({
  imports: [PrismaModule, CategoriesModule, AccountsModule, TransactionsModule, SubcategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
