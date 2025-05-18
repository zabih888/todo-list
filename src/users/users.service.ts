import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /** GET /users */
  findAll() {
    return this.prisma.user.findMany();
  }

  /** GET /users/:id */
  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  /** POST /users */
  create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  /** DELETE /users/:id */
  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
