import DetailPageController from "@/controller/detail";
import { observer } from "mobx-react-lite";

type Props = {
    controller: DetailPageController
}

const DetailPage = observer(({ controller }: Props) => {

    return (
        <div className=" p-5 border rounded-3xl">

            <div className="text-gray-900 dark:text-gray-300 text-2xl font-semibold mb-3">
                {controller.destination?.title ?? ""}
            </div>

            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-5"></div>

            <div className="text-gray-900 dark:text-gray-300">
                {controller.destination?.summary ?? ""}
            </div>
        </div>
    );
})

export default DetailPage