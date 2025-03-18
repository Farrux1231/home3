import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default:"John",
})
  name: string;

  @IsString()
  @ApiProperty({
    default:"+998901235467"
})
  phone:string

  @IsString()
  @ApiProperty({
    default:"string",
})
  password:string

  @ApiProperty({
    default:"admin",
})
  role: string;

}
