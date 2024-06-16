import { IsString, MinLength } from "class-validator";


export class CreateCarDto {
    @IsString({
        message: 'The brand must be a cool string'
    })
    readonly brand: string;
    @IsString()
    // @MinLength(3, {message: 'El modelo debe tener 3 o mas caracteres'})
    readonly model: string;



    
}