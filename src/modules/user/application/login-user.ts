import { UserRepository } from "../domain";

export async function loginUser(userRepository: UserRepository) {
    return userRepository.login()
}
