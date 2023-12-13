import { useState } from "react";

import { User } from "@/modules/user/domain";

import { AppContextType } from "@/context/app.context";
// import { VideosApi } from "@/modules/video/infrastructure/videos-api";
import { UserApi } from "@/modules/user/infrastructure/user-api";
import { VideosLocalStorage } from "@/modules/video/infrastructure/videos-local-storage";

const DEFAULT_USER: User = {
    avatar: 'https://ui-avatars.com/api/?background=0D8ABC&color=fff',
    id: '',
    name: ''
}

const videosRepository = new VideosLocalStorage()
const userRepository = new UserApi()

export function useAppContextValue(): AppContextType {
    const [user, setUser] = useState<User>({ ...DEFAULT_USER })

    return { user, setUser, userRepository, videosRepository }
}
