import { Controller, Get, Post,Put, Delete, Body, Param } from '@nestjs/common';
import { ApiImplicitParam } from '@nestjs/swagger';
import { Rider } from '../rider.entity';
import { RidersService } from './riders.service';

@Controller('riders')
export class RidersController {
  constructor(private ridersService: RidersService){}

  @Get()
  index(): Promise<Rider[]> {
    return this.ridersService.findAll();
  }

  @Post('create')
  async create(@Body() riderData: Rider): Promise<any> {
    return this.ridersService.create(riderData);
  }

  @Put(':id/update')
  @ApiImplicitParam({ name: 'id' })
  async update(@Param('id') id, @Body() riderData: Rider): Promise<any> {
    riderData.id = Number(id);
      console.log('Update #' + riderData.id)
      return this.ridersService.update(riderData);
  }

  @Delete(':id/delete')
  @ApiImplicitParam({ name: 'id' })
  async delete(@Param('id') id): Promise<any> {
    return this.ridersService.delete(id);
  }
}
