import { Discussion } from '@/database/src';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DiscussionService {
  constructor(
    @InjectRepository(Discussion)
    private discussionRepository: Repository<Discussion>,
  ) {}

  create(discussion: Discussion): Promise<Discussion> {
    return this.discussionRepository.save(discussion);
  }

  findAll(): Promise<Discussion[]> {
    console.log("getting all discussions");
    return this.discussionRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<Discussion> {
    return this.discussionRepository.findOne({ where: { id }, relations: ['user'] });
  }

  update(id: number, discussion: Partial<Discussion>): Promise<void> {
    return this.discussionRepository.update(id, discussion).then(() => {"discussion updated successfulyy"});
  }

  remove(id: number): Promise<void> {
    return this.discussionRepository.delete(id).then(() => {"discussion removed successfully"});
  }
}
