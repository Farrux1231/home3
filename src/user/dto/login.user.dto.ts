import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, Min, Max, IsNotEmpty } from 'class-validator';

export class LoginUserDto {

  @IsString()
  @ApiProperty({
    default:"+998901235467",
})
  phone:string

  @IsString()
  @ApiProperty({
    default:"string",
})
  password:string

}
