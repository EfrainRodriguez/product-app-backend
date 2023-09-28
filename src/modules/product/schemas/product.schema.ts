import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export const PRODUCT_MODEL_NAME = 'Product';

@Schema({
  timestamps: true,
})
export class Product extends Document {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
  })
  description: string;

  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  sku: string;

  @Prop({
    type: String,
  })
  image: string;

  @Prop({
    type: String,
    required: true,
  })
  category: string;

  @Prop({
    type: Number,
    required: true,
  })
  price: string;

  @Prop({
    type: Number,
    default: 0,
  })
  stock: string;

  @Prop({
    type: Number,
    default: 1,
  })
  rating: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
