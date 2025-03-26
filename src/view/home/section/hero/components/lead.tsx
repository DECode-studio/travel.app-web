import Image from "next/image"

const Lead = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">

            <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
                <h2 className="text-black dark:text-white font-medium text-4xl md:text-5xl xl:text-5xl !leading-[114%]">
                    Go Travel
                </h2>

                <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
                    The most reliable travel platform for seamless trip planning, offering fast, secure, and user-friendly services tailored to your journey.
                </span>

                <div className="text-black dark:text-white font-medium text-2xl md:text-2xl xl:text-2xl !leading-[114%]">
                    Where are you going?
                </div>
            </div>

            <div className="flex-grow">
                <Image
                    className="w-full"
                    src={'/image/bg-travel.png'}
                    alt="hero"
                    priority
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    )
}

export default Lead