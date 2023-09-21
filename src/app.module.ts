import "dotenv/config";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CoinModule } from "./coin/coin.module";
import { CollectionModule } from "./collection/collection.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    CoinModule,
    CollectionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
