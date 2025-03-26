'use client';

import HomePageController from "@/controller/home";
import Button from "@/layout/components/button/button";
import { IconButton } from "@/layout/components/button/icon-button";
import DropdownField from "@/layout/components/field/dropdown";
import { GlobeIcon, MapsGlobal02Icon, Search02Icon } from "hugeicons-react"
import { observer } from "mobx-react-lite";

type Props = {
    controller: HomePageController
}

const ConfigForm = observer(({ controller }: Props) => {

    return (
        <div className="w-full relative p-5 lg:p-4 mt-8 flex flex-col lg:flex-row rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">

            <DropdownField
                className="flex-[1.5] mb-2 lg:mb-0"
                placeholder="Come From"
                description="Where are you come from?"
                icon={<GlobeIcon />}
                listData={controller.listCountry}
                initData={controller.selectedNationality.name ?? ''}
                renderItem={(item) => (
                    <span
                        key={item.id_country ?? ""}
                        className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                    >
                        <span className="block text-neutral-400">
                            <GlobeIcon className="h-4 sm:h-6 w-4 sm:w-6" />
                        </span>
                        <span className="block font-medium text-neutral-700 dark:text-neutral-200">
                            {item.name ?? ''}
                        </span>
                    </span>
                )}
                onSelect={(value) => controller.actionMethod('set-nationality', value)}
            />

            <div className="self-center border-r border-slate-200 dark:border-slate-700 lg:h-8 h-1 mx-4"></div>

            <DropdownField
                className="flex-[1.5] mb-2 lg:mb-0"
                placeholder="Going To"
                description="Where are you going to?"
                icon={<MapsGlobal02Icon />}
                listData={controller.listCountry}
                initData={controller.selectedGoingTo.name ?? ''}
                renderItem={(item) => (
                    <span
                        key={item.id_country ?? ""}
                        className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                    >
                        <span className="block text-neutral-400">
                            <MapsGlobal02Icon className="h-4 sm:h-6 w-4 sm:w-6" />
                        </span>
                        <span className="block font-medium text-neutral-700 dark:text-neutral-200">
                            {item.name ?? ''}
                        </span>
                    </span>
                )}
                onSelect={(value) => controller.actionMethod('set-going-to', value)}
            />

            <div className="justify-center lg:block hidden">
                <IconButton
                    icon={<Search02Icon />}
                    backColor="bg-cyan-700"
                    hoverColor="bg-cyan-800"
                    onClick={() => controller.actionMethod('search')}
                />
            </div>

            <div className="flex justify-center mt-2 lg:hidden">
                <Button
                    type="button"
                    className={`w-full disabled:bg-opacity-70 bg-cyan-700 hover:bg-cyan-800 text-neutral-50`}
                    icon={<Search02Icon />}
                    onClick={() => controller.actionMethod('search')}
                >
                    SEARCH
                </Button>
            </div>

        </div>

    )
})

export default ConfigForm