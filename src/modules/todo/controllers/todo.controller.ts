import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';

@Crud({
  model: {
    type: Todo,
  },
})
@ApiTags('todo')
@Controller('rest/todo')
export class TodoController implements CrudController<Todo> {
  constructor(public service: TodoService) {}

  // service: CrudService<Todo>;
  // getManyBase?(req: CrudRequest): Promise<GetManyDefaultResponse<Todo> | Todo[]> {
  //   throw new Error('Method not implemented.');
  // }
  // getOneBase?(req: CrudRequest): Promise<Todo> {
  //   throw new Error('Method not implemented.');
  // }
  // createOneBase?(req: CrudRequest, dto: Todo): Promise<Todo> {
  //   throw new Error('Method not implemented.');
  // }
  // createManyBase?(req: CrudRequest, dto: CreateManyDto<Todo>): Promise<Todo[]> {
  //   throw new Error('Method not implemented.');
  // }
  // updateOneBase?(req: CrudRequest, dto: Todo): Promise<Todo> {
  //   throw new Error('Method not implemented.');
  // }
  // replaceOneBase?(req: CrudRequest, dto: Todo): Promise<Todo> {
  //   throw new Error('Method not implemented.');
  // }
  // deleteOneBase?(req: CrudRequest): Promise<void | Todo> {
  //   throw new Error('Method not implemented.');
  // }
  // recoverOneBase?(req: CrudRequest): Promise<void | Todo> {
  //   throw new Error('Method not implemented.');
  // }
}
