import HomePageController from "@/controller/home";
import { moneyFormatter } from "@/service/formatter/money";
import { DestinationModel } from "@/service/model/destination";
import { observer } from "mobx-react-lite";
import StarRating from "./rate";

type Props = {
    controller: HomePageController;
    data: DestinationModel;
};

const CardData = observer(({
    controller,
    data
}: Props) => {

    return (
        <div className="overflow-hidden bg-white p-3 lg:p-5 rounded-3xl shadow-md hover:shadow-2xl w-full max-w-sm">
            <a
                href={`/detail?id=${data?.id ?? ''}`}
                className="flex flex-col space-y-3"
            >

                <img
                    src={(data.photos ?? []).length > 0 ? (data.photos ?? [])[0] : ''}
                    className="w-full rounded-2xl aspect-[16/10]"
                />

                <span className="font-semibold text-black dark:text-white text-sm lg:text-lg">
                    {data.title}
                </span>

                <StarRating
                    rating={data?.rating ?? 0}
                    size={5}
                />

                <div className="text-cyan-700 font-semibold text-sm lg:text-lg">
                    {moneyFormatter(data?.price ?? 0)}
                </div>

            </a>
        </div>
    );
});

export default CardData;