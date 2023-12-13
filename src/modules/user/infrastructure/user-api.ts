import { User, UserRepository } from "../domain";

export class UserApi implements UserRepository {
    async login(): Promise<User> {
        return new Promise<User>((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 'user-1',
                    avatar: 'https://tecdn.b-cdn.net/img/new/avatars/2.webp',
                    name: 'Jhon Doe'
                })
            }, 1200)
        })
    }
}
