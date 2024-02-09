import { Injectable } from '@nestjs/common'
import { CreateSubcategoryDto } from './dto/create-subcategory.dto'
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SubcategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createSubcategoryDto: CreateSubcategoryDto) {
    return this.prisma.subcategory.create({
      data: createSubcategoryDto
    })
  }

  findAll() {
    return this.prisma.subcategory.findMany({
      where: {
        active: true
      }
    })
  }

  findOne(id: string) {
    return this.prisma.subcategory.findUnique({
      where: {
        id
      }
    })
  }

  update(id: string, updateSubcategoryDto: UpdateSubcategoryDto) {
    return this.prisma.subcategory.update({
      where: {
        id
      },
      data: updateSubcategoryDto
    })
  }

  remove(id: string) {
    return this.prisma.subcategory.update({
      where: {
        id
      },
      data: {
        active: false
      }
    })
  }
}
