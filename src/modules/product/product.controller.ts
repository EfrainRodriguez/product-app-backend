import {
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Body,
  Param,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ResponseProductDto } from './dtos/response-product.dto';
import { PaginationProductDto } from './dtos/pagination-product.dto';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Create a new product' })
  @ApiOkResponse({ type: ResponseProductDto })
  @Post()
  async create(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @ApiOperation({ summary: 'Get all products' })
  @ApiOkResponse({ type: [ResponseProductDto] })
  @Get()
  async findAll(@Query() query: PaginationProductDto) {
    return this.productService.findAll(query);
  }

  @ApiOperation({ summary: 'Get a product by id' })
  @ApiOkResponse({ type: ResponseProductDto })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a product by id' })
  @ApiOkResponse({ type: ResponseProductDto })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Delete a product by id' })
  @ApiOkResponse({ type: ResponseProductDto })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
