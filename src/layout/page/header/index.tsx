import { useEffect, useState } from "react";
import LogoApp from "./component/logo"
import { Menu, MobileMenu } from "./component/menu"
import ButtonMode from "./component/mode"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={` border-gray-200 fixed w-full z-20 top-0 start-0 ${isScrolled
                ? 'bg-white/60 dark:bg-gray-900/60 shadow-lg backdrop-blur-sm'
                : 'bg-transparent'
                }`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <LogoApp />

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse flex-wrap">

                    <ButtonMode />
                    <MobileMenu />

                </div>

                <Menu />
            </div>
        </nav>
    )
}

export default Header