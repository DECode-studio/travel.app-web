import Heading from "@/layout/components/data/heading";
import ListData from "./components/list";
import HomePageController from "@/controller/home";

type Props = {
    controller: HomePageController
}

const ItemSection = ({ controller }: Props) => {

    return (
        <div className="relative">

            <Heading
                desc="Popular destination currently in high demand this month."
                isCenter
            >
                Trending Destination
            </Heading>

            <ListData controller={controller} />

        </div>
    );
};



export default ItemSection;
