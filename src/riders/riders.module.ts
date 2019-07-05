import { Module } from '@nestjs/common';
import { RidersService } from './riders/riders.service';
import { RidersController } from './riders/riders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from './rider.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rider]),
  ],
  providers: [RidersService],
  controllers: [RidersController]
})
export class RidersModule {}
