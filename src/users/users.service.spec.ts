import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let usersService: UsersService;
  const usersRepositoryMock = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((user) =>
        Promise.resolve({ id: Date.now(), ...user }),
      ),
    findOneBy: jest.fn().mockImplementation((email) => {
      return Promise.resolve({
        id: 1,
        email: 'aaa@aaa.com',
        password: 'sdvjnfjlvjncvbsdufbvfdsjvns',
      });
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: usersRepositoryMock,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });
  it('create new user', async () => {
    expect(
      await usersService.create({ email: 'aaa@aaa.com', password: '123' }),
    ).toEqual({
      id: expect.any(Number),
      email: 'aaa@aaa.com',
      password: '123',
    });
  });

  it('find user by email new user', async () => {
    expect(await usersService.getUserByEmail('aaa@aaa.com')).toEqual({
      id: 1,
      email: 'aaa@aaa.com',
      password: 'sdvjnfjlvjncvbsdufbvfdsjvns',
    });
  });
});
