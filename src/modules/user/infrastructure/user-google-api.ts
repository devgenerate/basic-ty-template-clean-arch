import { User, UserRepository } from "../domain";

export class UserGoogleApi implements UserRepository {
    login(): Promise<User> {

    }
}
