import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/database/prisma/prisma.service';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Injectable()
export class StudentsService {
  constructor(private prismaSvc: PrismaService) {}
  create(createStudentInput: CreateStudentInput) {
    return this.prismaSvc.student.create({
      data: createStudentInput,
    });
  }

  findAll(search?: string) {
    return this.prismaSvc.student.findMany({
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
