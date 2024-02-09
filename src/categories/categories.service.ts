import { Injectable } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const res = await this.prisma.category.create({
      data: createCategoryDto
    })
    if (res) {
      this.prisma.subcategory.create({
        data: {
          name: res.name,
          categoryId: res.id
        }
      })
    }
    return res
  }

  findAll() {
    return this.prisma.category.findMany()
  }

  findOne(id: string) {
    return this.prisma.category.findUnique({
      where: {
        id
      }
    })
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        id
      },
      data: updateCategoryDto
    })
  }

  remove(id: string) {
    return this.prisma.category.delete({
      where: {
        id
      }
    })
  }
}
