import { Test, TestingModule } from '@nestjs/testing';
import { RidersService } from './riders.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('RidersService', () => {
  let service: RidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RidersService,
        { provide: Repository, useValue: Repository },
      ],
    }).compile();

    service = module.get<RidersService>(RidersService);


    // beforeEach(async () => {
    //   const mod: TestingModule = await Test
    //     .createTestingModule({
    //       components: [
    //         RoleService
    //       ],
    //       controllers: [
    //         RoleController
    //       ],
    //       imports: [
    //         {
    //           provide: 'RoleSchemaModel',
    //           useValue: {
    //             // Your mock
    //           }
    //         }
    //       ]
    //     })
    //     .compile();
    //   controller = mod.get<RoleController>(RoleController);
    //   service = mod.get<RoleService>(RoleService);
    // });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
