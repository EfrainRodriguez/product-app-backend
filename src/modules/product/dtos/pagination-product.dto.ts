import {
  IsOptional,
  IsString,
  MinLength,
  Min,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationProductDto {
  @ApiProperty({
    name: 'page',
    description: 'The page of the product',
    example: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  page: number;

  @ApiProperty({
    name: 'limit',
    description: 'The limit of the product',
    example: 10,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit: number;

  @ApiProperty({
    name: 'sort',
    description: 'The sort of the product -1 for desc and 1 for asc',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  sort: number;

  @ApiProperty({
    name: 'orderBy',
    description: 'The orderBy of the product',
    example: 'createdAt',
  })
  @IsOptional()
  @IsString()
  orderBy: string;

  @ApiProperty({
    name: 'name',
    description: 'The name of the product',
    example: 'Product 1',
  })
  @IsOptional()
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    name: 'category',
    description: 'The category of the product',
    example: 'Category 1',
  })
  @IsOptional()
  @IsString()
  @MinLength(3)
  category: string;
}
