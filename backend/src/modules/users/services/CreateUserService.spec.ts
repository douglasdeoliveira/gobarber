import { container } from 'tsyringe';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CacheUserService from './CacheUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashRepository: FakeHashProvider;
let createUser: CreateUserService;
let fakeCacheProvider: FakeCacheProvider;
let cacheUser: CacheUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashRepository = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashRepository);

    fakeCacheProvider = new FakeCacheProvider();
    cacheUser = new CacheUserService(fakeCacheProvider);

    jest.spyOn(container, 'resolve').mockImplementation(() => {
      return {
        execute: () => jest.fn(),
      };
    });
  });

  it('should be able to create a new user', async () => {
    const cacheUserExecute = jest.spyOn(cacheUser, 'execute');

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(cacheUserExecute).toHaveBeenCalled();
    expect(user).toHaveProperty('id');
  });

  it('should not be able to create two users with the same email', async () => {
    const userEmail = 'johndoe@example.com';

    await createUser.execute({
      name: 'John Doe',
      email: userEmail,
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: userEmail,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
