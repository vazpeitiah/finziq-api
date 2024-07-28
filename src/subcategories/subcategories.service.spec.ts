import { Test, TestingModule } from '@nestjs/testing'
import { SubcategoriesService } from './subcategories.service'
import { PrismaModule } from 'src/prisma/prisma.module'

describe('SubcategoriesService', () => {
  let service: SubcategoriesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcategoriesService],
      imports: [PrismaModule]
    }).compile()

    service = module.get<SubcategoriesService>(SubcategoriesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
