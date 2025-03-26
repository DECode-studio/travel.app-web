import ConfigForm from "./components/form";
import HomePageController from "@/controller/home";
import Lead from "./components/lead";

type Props = {
    controller: HomePageController
}

const HeroSection = ({ controller }: Props) => {
    return (
        <div
            className={`container flex flex-col lg:flex-col relative`}
        >
            <Lead />
            <div className="z-10 w-full order-last lg:order-1 lg:-mt-40 -mt-40">

                <div className="flex flex-col">

                    <ConfigForm controller={controller} />

                </div>

            </div>

        </div>

    )
}

export default HeroSection