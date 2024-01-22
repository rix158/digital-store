/* eslint-disable prettier/prettier */
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    title: string;

    @Column('text')
    detail: string;

    @Column('float', {
        default: 0.00
    })
    price: number;

    @Column('text', {
        unique: true,
        nullable: true,
    })
    url: string;

    @Column('int', {
        default: 0
    })
    stock: number;


    @BeforeInsert()
    checkUrlInsert() {
        if(!this.url){
            this.url = this.title
        }

        this.url = this.url
        .toLowerCase()
        .split(' ').join('_')
        .split("'").join('')
    }

}
