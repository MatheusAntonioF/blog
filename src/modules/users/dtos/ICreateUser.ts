import { InputType, Field } from 'type-graphql';

@InputType()
class CreateUserDTO {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

export default CreateUserDTO;
