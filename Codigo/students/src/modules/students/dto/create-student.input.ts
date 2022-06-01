import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cpf: string;
}
