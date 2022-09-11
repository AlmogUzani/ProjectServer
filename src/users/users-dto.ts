import {
    IsDateString,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    MaxLength,
    MinLength,
  } from 'class-validator';

export class UsersDto {

    @IsOptional()
    @IsNumber()
    userID: number;

    @IsNotEmpty({ message: 'Name should be provided' })
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @MaxLength(3)
    age: number;

    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsDateString()
    registerDate: Date;

    @IsNotEmpty()
    // @MinLength(6)
    // @MaxLength(10)
    password: string;

    @IsNotEmpty()
    @MinLength(9)
    phoneNumber:string

    @IsNotEmpty()
    @MinLength(3)
    address:string
}
