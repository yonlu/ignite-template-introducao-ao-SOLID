import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User(name, email);
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const selectedUser = this.users.find(user => user.id === id);

    if (selectedUser) {
      return selectedUser;
    }
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const selectedUser = this.users.find(user => user.email === email);

    if (selectedUser) {
      return selectedUser;
    }
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    if (!receivedUser.admin) {
      receivedUser.admin = true;
      receivedUser.updated_at = new Date();
    }
    return receivedUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
