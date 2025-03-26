import HomePageController from "@/controller/home"
import BgColor from "@/layout/components/background/background-color"
import HeroSection from "./section/hero"
import ItemSection from "./section/items"
import BackgroundSection from "@/layout/components/background/background-section"

const controller = new HomePageController()

const HomePage = () => {
    return (
        <>
            <main className="px-5 xl:px-50 relative overflow-hidden pt-20">
                <BgColor />

                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">

                    <HeroSection controller={controller} />

                    <div className="relative py-16">
                        <BackgroundSection className="bg-sky-50 dark:bg-black/20" />
                        <ItemSection controller={controller} />
                    </div>

                </div>
            </main>
        </>
    )
}

export default HomePage