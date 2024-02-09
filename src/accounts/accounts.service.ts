import { Injectable } from '@nestjs/common'
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  create(createAccountDto: CreateAccountDto) {
    return this.prisma.account.create({
      data: createAccountDto
    })
  }

  findAll() {
    return this.prisma.account.findMany({
      where: {
        active: true
      }
    })
  }

  findOne(id: string) {
    return this.prisma.account.findUnique({
      where: {
        id
      }
    })
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.prisma.account.update({
      where: {
        id
      },
      data: updateAccountDto
    })
  }

  remove(id: string) {
    return this.prisma.account.update({
      where: {
        id
      },
      data: {
        active: false
      }
    })
  }
}
