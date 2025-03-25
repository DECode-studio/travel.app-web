const Menu = () => {
    return (
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                    Home
                </a>
            </li>
            <li>
                <a
                    href="https://porto-ku.excitech.id/user?id=nur.wahid.azhar"
                    className="hover:underline me-4 md:me-6"
                    target="_blank"
                >
                    Developer
                </a>
            </li>
            <li>
                <a
                    href="https://play.google.com/store/apps/dev?id=7095559884749351358"
                    className="hover:underline me-4 md:me-6"
                    target="_blank"
                >
                    Play Store
                </a>
            </li>
        </ul>
    )
}

export default Menu