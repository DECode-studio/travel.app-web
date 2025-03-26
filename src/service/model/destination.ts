import { PaxModel } from "./pax"
import { ReviewModel } from "./review"

export type DestinationModel = {
    id?: number,
    title?: string,
    summary?: string
    photos?: string[]
    rating?: number
    reviews?: ReviewModel[]
    include?: string[]
    exclude?: string[]
    terms_conditions?: string
    price?: number,
    currency?: string,
    pax?: PaxModel
}