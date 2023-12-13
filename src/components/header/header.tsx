import { useAppContext } from "@/hooks/useAppContext";
import { ApiStatus } from "@/modules/api/domain";
import { useState } from "react";

function Header() {
    const { setUser, user, userRepository } = useAppContext()
    const [status, setStatus] = useState<ApiStatus>(ApiStatus.Idle)

    const onHandleLogin = async () => {
        setStatus(ApiStatus.Loading)
        const newUser = await userRepository.login()
        setUser(newUser)
        setStatus(ApiStatus.Success)
    }

    return (
        <header>
            {/* Navigation bar */}
            <nav
            className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
            data-te-navbar-ref=""
            >
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="flex items-center">
                {/* Hamburger menu button */}
                <button
                    className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                    type="button"
                    data-te-collapse-init=""
                    data-te-target="#navbarSupportedContentY"
                    aria-controls="navbarSupportedContentY"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* Hamburger menu icon */}
                    <span className="[&>svg]:w-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-7 w-7"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    </span>
                </button>
                </div>
                {/* Navigation links */}
                <div
                className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                id="navbarSupportedContentY"
                data-te-collapse-item=""
                >
                <ul
                    className="flex flex-col lg:flex-row"
                    data-te-navbar-nav-ref=""
                >
                    <li className="mb-4 lg:mb-0 lg:pr-2 relative" data-te-nav-item-ref="">
                        {
                            status === ApiStatus.Loading && (
                                <div
                                    className="absolute inline-block h-11 w-11 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >
                                        Loading...
                                    </span>
                                </div>
                            )
                        }
                        <button disabled={status === ApiStatus.Loading} onClick={onHandleLogin}>
                            <img
                                className="w-10 rounded-full"
                                src={user.avatar}
                                alt="Avatar"
                            />
                        </button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
    );
}

export default Header;
