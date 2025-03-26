"use client"

import HomePageController from "@/controller/home";
import CardData from "./card"
import { observer } from "mobx-react-lite";

type Props = {
    controller: HomePageController
}

const ListData = observer(({ controller }: Props) => {
    return (
        <div className="px-4">

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {controller.listDestination.map((item) => (
                    <CardData
                        key={item.id ?? ''}
                        controller={controller}
                        data={item}
                    />
                ))}
            </div>

        </div>
    )
})

export default ListData