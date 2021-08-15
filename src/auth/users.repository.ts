import { EntityRepository, Repository } from 'typeorm';
import { authCredentialsDTO } from './dtos/authCredentials.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createrUser(authCredentialsDto: authCredentialsDTO): Promise<void> {
    const { username, password } = authCredentialsDto;
    const user = this.create({ username, password });
    await this.save(user);
  }
}
