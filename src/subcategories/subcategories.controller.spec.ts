import { Test, TestingModule } from '@nestjs/testing'
import { SubcategoriesController } from './subcategories.controller'
import { SubcategoriesService } from './subcategories.service'
import { PrismaModule } from 'src/prisma/prisma.module'

describe('SubcategoriesController', () => {
  let controller: SubcategoriesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubcategoriesController],
      providers: [SubcategoriesService],
      imports: [PrismaModule]
    }).compile()

    controller = module.get<SubcategoriesController>(SubcategoriesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
