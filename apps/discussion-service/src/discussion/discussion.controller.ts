import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { Discussion } from '@/database/src';

@Controller('discussions')
export class DiscussionController {
  constructor(private readonly discussionService: DiscussionService) {}

  @Post()
  create(@Body() discussion: Discussion) {
    return this.discussionService.create(discussion);
  }

  @Get()
  findAll() {
    return this.discussionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discussionService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() discussion: Partial<Discussion>) {
    return this.discussionService.update(+id, discussion);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discussionService.remove(+id);
  }
}
