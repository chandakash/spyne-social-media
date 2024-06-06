import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from "@spyne-social-media/database";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    console.log("here")
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  update(id: number, user: Partial<User>): Promise<void> {
    return this.userRepository.update(id, user).then(() => {"user updated Successfully"});
  }

  remove(id: number): Promise<void> {
    return this.userRepository.delete(id).then(() => {"user removed Successfully"});
  }

  async searchUsers(name: string)  {
    console.log({name})
    return this.userRepository
    .createQueryBuilder('users')
    .where('users.name ILIKE :name', { name: `%${name}%` })
    .getMany();
  }
}
