import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashRepository = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashRepository,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create two users with the same email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashRepository = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashRepository,
    );

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
