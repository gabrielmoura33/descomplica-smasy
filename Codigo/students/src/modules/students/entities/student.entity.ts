import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cpf: string;

  @Field()
  slug: string;

  @Field()
  createdAt: Date;
}
