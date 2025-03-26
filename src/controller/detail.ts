import { DestinationModel } from "@/service/model/destination";
import { makeAutoObservable } from "mobx";

import destinations from "@/service/data/destinations.json"

class DetailPageController {

    listDestination: DestinationModel[] = destinations
    destination: DestinationModel = {}

    id: string = '0'
    priceOrder: number = 0
    qtyOrder: number = 1

    loadData: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    getData = () => {
        this.loadData = true

        const param = new URLSearchParams(window.location.search);
        this.id = param.get('id') ?? '0'
        this.destination = this.listDestination.filter((e) => e.id == Number(this.id))[0]

        this.priceOrder = this.destination?.price ?? 0
        this.qtyOrder = 1

        this.loadData = false
    }

    actionMethod = (
        mode: string,
        data?: any
    ) => {
        if (mode == 'set-qty') {
            this.qtyOrder = data
            this.priceOrder = (this.destination?.price ?? 0) * data
        }
    }
}

export default DetailPageController