import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';
import { CreateDTO, UpdateDTO } from './dto';

// Get one
// Get many
// Post (Create or Update)
// Delete (Delete)
@Controller('rest/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllAction(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async getOneAction(@Param('id') id: string): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      throw new HttpException(
        `Todo with id=${id} not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    return todo;
  }

  @Post()
  createAction(@Body() createDTO: CreateDTO): Promise<Todo> {
    const todo = new Todo();
    todo.title = createDTO.title;
    if (createDTO.isComplited !== undefined)
      todo.isComplited = createDTO.isComplited;
    return this.todoService.create(todo);
  }

  @Put(':id')
  async updateAction(
    @Param('id') id: string,
    @Body() { title, isComplited = false }: UpdateDTO,
  ): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      throw new NotFoundException(`Todo with id=${id} not exist`);
    }
    todo.title = title;
    todo.isComplited = isComplited;
    return this.todoService.update(todo);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void> {
    return this.todoService.remove(id);
  }
}
