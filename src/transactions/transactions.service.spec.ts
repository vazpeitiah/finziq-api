import { Test, TestingModule } from '@nestjs/testing'
import { TransactionsService } from './transactions.service'
import { PrismaModule } from 'src/prisma/prisma.module'

describe('TransactionsService', () => {
  let service: TransactionsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsService],
      imports: [PrismaModule]
    }).compile()

    service = module.get<TransactionsService>(TransactionsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
