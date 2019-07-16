import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Rider } from '../entities/rider.entity';

@Injectable()
export class RidersService {
  constructor(
      @InjectRepository(Rider)
      private riderRepository: Repository<Rider>,
  ) {}

  async  findAll(): Promise<Rider[]> {
      return await this.riderRepository.find();
  }

  async  create(contact: Rider): Promise<Rider> {
      return await this.riderRepository.save(contact);
  }

  async update(contact: Rider): Promise<UpdateResult> {
      return await this.riderRepository.update(contact.id, contact);
  }

  async delete(id): Promise<DeleteResult> {
      return await this.riderRepository.delete(id);
  }
}
