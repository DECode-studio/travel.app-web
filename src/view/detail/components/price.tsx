
import DetailPageController from "@/controller/detail"
import Button from "@/layout/components/button/button"
import { moneyFormatter } from "@/service/formatter/money"
import { observer } from "mobx-react-lite"

type Props = {
    controller: DetailPageController
}

const PriceField = observer(({ controller }: Props) => {

    return (
        <div className="flex flex-col">

            <div className={`flex flex-row`}>

                <span className="text-black dark:text-white font-semibold text-lg">
                    Total
                </span>

                <div className="flex-grow"></div>

                <span className="text-gray-500 dark:text-white font-normal text-lg">
                    {moneyFormatter(controller.priceOrder)}
                </span>

            </div>

            <Button
                className={`ttnc-ButtonPrimary disabled:bg-opacity-70 mt-4 bg-cyan-700 hover:bg-cyan-800 text-neutral-50 w-full`}
                onClick={() => { }}
            >
                Checkout
            </Button>

        </div>
    )
})

export default PriceField