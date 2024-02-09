import { Module } from '@nestjs/common'
import { SubcategoriesService } from './subcategories.service'
import { SubcategoriesController } from './subcategories.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [SubcategoriesController],
  providers: [SubcategoriesService],
  imports: [PrismaModule]
})
export class SubcategoriesModule {}
