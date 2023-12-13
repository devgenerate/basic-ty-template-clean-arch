import { PropsWithChildren, createContext } from "react";

import { User, UserRepository } from "@/modules/user/domain";
import { useAppContextValue } from "@/hooks/useAppContextValue";
import { VideosRepository } from "@/modules/video/domain/videos-repository";

export type AppContextType = {
    userRepository: UserRepository
    videosRepository: VideosRepository
    user: User,
    setUser(user: User): void
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export function AppContextProvider({ children }: PropsWithChildren) {
    const appContextValue = useAppContextValue()

    return (
        <AppContext.Provider value={appContextValue}>
            { children }
        </AppContext.Provider>
    )
}
