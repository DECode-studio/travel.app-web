import { observer } from "mobx-react-lite";
import DetailPageController from "@/controller/detail";

import { InformationCircleIcon } from "hugeicons-react";
import Label from "@/layout/components/data/label";

import PriceField from "./price";
import NumberInput from "@/layout/components/field/number";

type ComponentsProps = {
    controller: DetailPageController
}

const ActionBar = observer(({ controller }: ComponentsProps) => {
    return (
        <div className="p-5 rounded-3xl border shadow-xl w-full lg:w-96">

            <Label
                icon={<InformationCircleIcon className="text-white h-5 w-5" />}
                label="Order your destiantion right now, and embark on a hassle-free journey! ✈️🌍"
                labelStyle="text-white text-sm"
                backgroundColor="bg-cyan-700"
                clasName="rounded-2xl items-center center-justify"
            />

            <div className="border-b border-neutral-300 dark:border-neutral-700 my-4 mx-2"></div>

            <div className='text-sm font-medium text-gray-900 dark:text-gray-300 mb-2'>
                {'How many people are going to apply together?'}
            </div>

            <NumberInput
                min={1}
                value={controller.qtyOrder ?? 1}
                onChange={
                    (value) => controller.actionMethod('set-qty', value)
                }
            />

            <div className="border-b border-neutral-300 dark:border-neutral-700 my-4 mx-2"></div>

            <PriceField controller={controller} />

        </div>
    );
});

export default ActionBar