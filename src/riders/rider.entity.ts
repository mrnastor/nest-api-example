import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Rider {
    @PrimaryGeneratedColumn()
    @ApiModelProperty()
    id: number;

    @Column()
    @ApiModelProperty()
    firstName: string;

    @Column()
    @ApiModelProperty()
    lastName: string;

    @Column({ nullable: true })
    @ApiModelProperty()
    email: string;

    @Column({ nullable: true })
    @ApiModelProperty()
    phone: string;

    @Column({ nullable: true })
    @ApiModelProperty()
    city: string;

    @Column({ nullable: true })
    @ApiModelProperty()
    country: string;
}