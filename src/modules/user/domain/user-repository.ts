import { User } from "."

export type UserRepository = {
    login(): Promise<User>
}
