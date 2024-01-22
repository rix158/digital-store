/* eslint-disable prettier/prettier */
import { IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateProductDto {
    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    detail: string;

    @IsNumber()
    @IsPositive()
    price: number;
    
    @IsString()
    @IsOptional()
    url?: string;

    @IsInt()
    @IsPositive()
    stock: number;

}
