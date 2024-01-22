/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

  ){}
  async create(createProductDto: CreateProductDto) {
    
    try{
      const product  =  this.productRepository.create(createProductDto);
      await this.productRepository.save(product);

      return product;

    } catch(error){
      console.log(error);
      throw new InternalServerErrorException('Ocurrio un problema al agregar un producto');
    }
  }

  findAll() {
    try {
      return this.productRepository.find();     

    } catch(error){

      throw new InternalServerErrorException('Ocurrio un error al leer la informacion');
    }
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOneBy({id});
    if(!product){
      throw new NotFoundException('Producto no encontrado');
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    const product = await this.findOne( id );
    await this.productRepository.remove(product);
  }
}
