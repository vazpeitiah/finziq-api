import { Test, TestingModule } from '@nestjs/testing'
import { AccountsController } from './accounts.controller'
import { AccountsService } from './accounts.service'
import { PrismaModule } from 'src/prisma/prisma.module'

describe('AccountsController', () => {
  let controller: AccountsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsController],
      providers: [AccountsService],
      imports: [PrismaModule]
    }).compile()

    controller = module.get<AccountsController>(AccountsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
