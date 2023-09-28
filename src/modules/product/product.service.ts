import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Product } from './schemas/product.schema';
import { generateSKU } from 'src/libs/utils/hashing.util';
import { ProductMovement } from './schemas/movements.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
    @InjectModel(ProductMovement.name)
    private readonly productMovementModel: Model<ProductMovement>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const sku = generateSKU();
    const createdProduct = new this.productModel(
      Object.assign(createProductDto, { sku }),
    );
    return createdProduct.save();
  }

  async findAll(query: any) {
    const nameSearch = query.name
      ? { name: { $regex: query.name, $options: 'i' } }
      : {};
    const categorySearch = query.category ? { category: query.category } : {};

    const filters = { ...nameSearch, ...categorySearch };

    const count = await this.productModel.count(filters);
    const products = await this.productModel
      .find(filters)
      .sort({ [query.orderBy]: query.sort })
      .limit(query.limit || 10)
      .skip(query.page * query.limit || 0)
      .exec();
    return { count, limit: query.limit, page: query.page, data: products };
  }

  async findOne(id: string) {
    return this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const currentProduct = (await this.productModel.findById(id).exec()) as any;
    if (!currentProduct) {
      throw new Error('Product not found');
    }

    // register movement if stock or price changes
    if (
      updateProductDto.stock !== currentProduct.stock ||
      currentProduct.price !== updateProductDto.price
    ) {
      const movement = new this.productMovementModel({
        product: id,
        oldPriceValue: currentProduct.price,
        oldStockValue: currentProduct.stock,
        newPriceValue: updateProductDto.price,
        newStockValue: updateProductDto.stock,
      });
      await movement.save();
    }

    return this.productModel.updateOne({ _id: id }, updateProductDto).exec();
  }

  async delete(id: string) {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
