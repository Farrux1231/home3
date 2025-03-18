import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/Role/user.role';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  password: number;

  @Prop()
  role:Role
}

export const UserSchema = SchemaFactory.createForClass(User);
