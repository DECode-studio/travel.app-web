const LogoApp = () => {
    return (
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
                src="/icon/app-icon.png"
                className="h-8"
                alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-700 dark:text-white">
                Go Travel
            </span>
        </a>
    )
}

export default LogoApp