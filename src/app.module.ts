import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductModule, UserModule, MongooseModule.forRoot('mongodb://localhost:27017/n16'),],
  providers: [AppService],
})
export class AppModule {}
