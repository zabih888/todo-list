import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { UpdateTaskDto } from './dto/update-tasks.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }
  update(id: number, data: UpdateTaskDto) {
    return this.prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
