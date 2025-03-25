import Credit from "./components/credit"
import LogoApp from "./components/logo"
import Menu from "./components/menu"

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow-lg hover:shadow-3xl dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">

                    <LogoApp />
                    <Menu />

                </div>
                
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                
                <Credit />
            </div>
        </footer>
    )
}

export default Footer