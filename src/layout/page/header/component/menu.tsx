import { Menu11Icon } from "hugeicons-react"

export const Menu = () => {
    return (
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                    <a
                        href="#"
                        className="block py-2 px-3 text-cyan-700 dark:text-white hover:font-semibold" aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="https://porto-ku.excitech.id/user?id=nur.wahid.azhar"
                        className="block py-2 px-3 text-cyan-700 dark:text-white hover:font-semibold"
                        target="_blank"
                    >
                        Developer
                    </a>
                </li>
                <li>
                    <a
                        href="https://play.google.com/store/apps/dev?id=7095559884749351358"
                        className="block py-2 px-3 text-cyan-700 dark:text-white hover:font-semibold"
                        target="_blank"
                    >
                        Play Store
                    </a>
                </li>
            </ul>
        </div>
    )
}

export const MobileMenu = () => {
    return (
        <div className="md:hidden group relative">
            <div className="flex items-center">
                <div
                    className="p-2 aspect-square w-[44px] h-[44px] rounded-full border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-300" data-c-toggle="c-active"
                >
                    <Menu11Icon className="text-blakc dark:text-white" />
                </div>
            </div>

            <ListMenu />
        </div>
    )
}

const ListMenu = () => {
    return (
        <div className="absolute right-0 w-[250px] group-[:not(:hover)]:invisible group-[:not(:hover)]:opacity-0 transition-all duration-[.3s] mt-5 rounded-full">
            <div className="relative flex flex-col">

                <div className="border-t-[1px] border-t-cyan-700 border-opacity-30" />
                <div className="flex">
                    <div className="flex-1 flex flex-col">

                        <MenuItem
                            route="/"
                            title="Home"
                        />

                        <div className="border-t-[1px] border-t-cyan-700 border-opacity-30" />

                        <MenuItem
                            route="https://porto-ku.excitech.id/user?id=nur.wahid.azhar"
                            title="Developer"
                        />

                        <div className="border-t-[1px] border-t-cyan-700 border-opacity-30" />

                        <MenuItem
                            route="https://play.google.com/store/apps/dev?id=7095559884749351358"
                            title="Play Store"
                        />

                    </div>
                </div>
                <div className="border-t-[1px] border-t-cyan-700 border-opacity-30" />

            </div>
            <div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-l-cyan-700 border-t-cyan-700 border-opacity-30">
            </div>
            <div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-l-cyan-700 border-t-cyan-700 border-opacity-30">
            </div>
        </div>
    )
}

type ItemProps = {
    route: string
    title: string
}

const MenuItem = ({
    route,
    title
}: ItemProps) => {
    return (
        <a className="group/c relative overflow-hidden" href={route} target="_blank">
            <div className="px-[30px] py-[15px]">
                <div className="relative">
                    <div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-cyan-700 group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">
                        {title}
                    </div>
                    <div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">
                        {title}
                    </div>
                </div>
            </div>
        </a>
    )
}