import { Injectable } from '@nestjs/common';
import { UserAuth } from 'Interfaces/User';

@Injectable()
export class UsersService {
  private readonly users: UserAuth[] = [
    {
      userId: '1',
      userName: 'John Marston',
      passWord: 'rdr1'
    },
    {
      userId: '2',
      userName: 'Arthur Morgan',
      passWord: 'rdr2'
    }
  ];

  async findOne(username: string): Promise<UserAuth | undefined> {
    return this.users.find((user) => user.userName === username);
  }
}
