import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { SubcategoriesService } from './subcategories.service'
import { CreateSubcategoryDto } from './dto/create-subcategory.dto'
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { TransactionEntity } from 'src/transactions/entities/transaction.entity'

@Controller('subcategories')
@ApiTags('subcategories')
export class SubcategoriesController {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Post()
  @ApiCreatedResponse({ type: TransactionEntity })
  create(@Body() createSubcategoryDto: CreateSubcategoryDto) {
    return this.subcategoriesService.create(createSubcategoryDto)
  }

  @Get()
  @ApiOkResponse({ type: TransactionEntity, isArray: true })
  findAll() {
    return this.subcategoriesService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: TransactionEntity })
  findOne(@Param('id') id: string) {
    return this.subcategoriesService.findOne(id)
  }

  @Patch(':id')
  @ApiOkResponse({ type: TransactionEntity })
  update(
    @Param('id') id: string,
    @Body() updateSubcategoryDto: UpdateSubcategoryDto
  ) {
    return this.subcategoriesService.update(id, updateSubcategoryDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: TransactionEntity })
  remove(@Param('id') id: string) {
    return this.subcategoriesService.remove(id)
  }
}
