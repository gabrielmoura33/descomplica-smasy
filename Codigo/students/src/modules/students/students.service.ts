import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from 'src/modules/database/prisma/prisma.service';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Injectable()
export class StudentsService {
  constructor(private prismaSvc: PrismaService) {}
  create(createStudentInput: CreateStudentInput) {
    const slug = slugify(createStudentInput.name, { lower: true });
    return this.prismaSvc.student.create({
      data: { ...createStudentInput, slug },
    });
  }

  findAll(search?: string) {
    return this.prismaSvc.student.findMany({
      orderBy: { updatedAt: 'desc' },
      where: {
        deletedAt: null,

        OR: [
          {
            cpf: {
              contains: search,
            },
          },
          {
            name: {
              contains: search,
            },
          },
          {
            email: {
              contains: search,
            },
          },
        ],
      },
    });
  }

  findOne(id: string) {
    return this.prismaSvc.student.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });
  }

  findBySlug(slug: string) {
    return this.prismaSvc.student.findFirst({
      where: {
        slug,
        deletedAt: null,
      },
    });
  }

  findByName(name: string) {
    return this.prismaSvc.student.findFirst({
      where: { name, deletedAt: null },
    });
  }
  update(id: string, updateStudentInput: UpdateStudentInput) {
    return this.prismaSvc.student.update({
      where: { id },
      data: updateStudentInput,
    });
  }

  remove(id: string) {
    return this.prismaSvc.student.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
