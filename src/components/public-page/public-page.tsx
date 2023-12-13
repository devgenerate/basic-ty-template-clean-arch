import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Paths } from "@/constants/paths.constants";

import { useAppContext } from "@/hooks/useAppContext";

import { AuthStatus } from "@/modules/user/domain";

function PublicPage({ children }: PropsWithChildren) {
    const navigate = useNavigate()
    const { auth, user } = useAppContext()

    useEffect(() => {
        if (user.id) {
            return navigate(Paths.Home)
        }
    }, [user])

    if (auth.status === AuthStatus.Loading) {
        return <h2>Authenticating ...</h2>
    }

    return <>{children}</>;
}

export default PublicPage;
