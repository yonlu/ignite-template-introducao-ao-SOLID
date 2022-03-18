import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const selectedUser = this.usersRepository.findById(user_id);

    if (!selectedUser) {
      throw new Error("User not found");
    }

    this.usersRepository.turnAdmin(selectedUser);
    return selectedUser;
  }
}

export { TurnUserAdminUseCase };
