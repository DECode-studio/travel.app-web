'use client'

import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import DetailPageController from "@/controller/detail"

import ActionBar from "./components/action"
import HeaderPage from "./components/detail"
import BgColor from "@/layout/components/background/background-color"
import { LoadDialog } from "@/layout/components/load"
import Carousel from "./components/slide"

const controller = new DetailPageController()

const DetailPage = observer(() => {

    useEffect(() => {
        controller.getData()
    }, [])

    return (
        <>
            <main className="relative pt-15">
                <BgColor />

                <div className="px-5 xl:px-50 relative space-y-15">
                    
                    <Carousel controller={controller} />
                    
                    <div className="relative z-10 flex flex-col w-full lg:flex-row gap-8 lg:gap-8">
                        <div className="w-full xl:w-2/3 space-y-8 xl:space-y-10 xl:pr-3">
                            <HeaderPage controller={controller} />
                            
                            <div className="lg:hidden">
                                <ActionBar controller={controller} />
                            </div>
                        </div>
                        
                        <div className="hidden lg:block xl:w-1/5">
                            <div className="sticky top-28 w-full">
                                <ActionBar controller={controller} />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            {/* <LoadDialog isOpen={controller.loadData} /> */}
        </>
    );
});

export default DetailPage;
