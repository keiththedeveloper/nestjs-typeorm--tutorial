import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find(); //Select * from user;
  }

  async getOneById(id: number): Promise<User> {
    try {
      const user = this.usersRepository.findOneOrFail(id); //select * from user where user.id=id;
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  createUser(name: string): Promise<User> {
    const newUser = this.usersRepository.create({ name });
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.getOneById(id);
    user.name = name;
    return this.usersRepository.save(user);
  }

  async deleteUser(d: number): Promise<User> {
    const user = await this.getOneById(id);
    return this.usersRepository.remove(user);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
