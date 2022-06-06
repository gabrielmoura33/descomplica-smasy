import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';
import { StudentsService } from './students.service';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Mutation(() => Student)
  async createStudent(@Args('data') createStudentInput: CreateStudentInput) {
    const studentWithTheSameName = await this.studentsService.findByName(
      createStudentInput.name,
    );

    if (studentWithTheSameName) throw new Error('Student already exist!');

    return this.studentsService.create(createStudentInput);
  }

  @Query(() => [Student], { name: 'students' })
  findAll(
    @Args('search', { type: () => String, nullable: true }) search?: string,
  ) {
    return this.studentsService.findAll(search);
  }

  @Query(() => Student, { name: 'studentBySlug' })
  findOne(@Args('slug', { type: () => String }) slug: string) {
    return this.studentsService.findBySlug(slug);
  }

  @Mutation(() => Student)
  updateStudent(@Args('data') updateStudentInput: UpdateStudentInput) {
    return this.studentsService.update(
      updateStudentInput.id,
      updateStudentInput,
    );
  }

  @Mutation(() => Student)
  removeStudent(@Args('id', { type: () => String }) id: string) {
    return this.studentsService.remove(id);
  }
}
