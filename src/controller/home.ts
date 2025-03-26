import { CountryModel } from "@/service/model/country";
import { makeAutoObservable } from "mobx";
import { DestinationModel } from "@/service/model/destination";

import countries from "@/service/data/countries.json"
import destinations from "@/service/data/destinations.json"

class HomePageController {
    listCountry: CountryModel[] = countries
    listDestination: DestinationModel[] = destinations

    selectedGoingTo: CountryModel = {}
    selectedNationality: CountryModel = {}

    constructor() {
        makeAutoObservable(this)
    }

    actionMethod = (
        mode: string,
        data?: any
    ) => {
        if (mode == 'set-nationality') {
            this.selectedNationality = data
        }

        if (mode == 'set-going-to') {
            this.selectedGoingTo = data
        }
    }
}

export default HomePageController