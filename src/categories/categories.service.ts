import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  create(data: CreateCategoryDto) {
    return this.prisma.category.create({ data });
  }
  update(id: number, data: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
