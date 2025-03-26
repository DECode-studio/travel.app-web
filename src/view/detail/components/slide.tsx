import DetailPageController from "@/controller/detail";
import { observer } from "mobx-react-lite";
import { useState } from "react";

type Props = {
    controller: DetailPageController
}

const Carousel = observer(({
    controller
}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (controller.destination.photos ?? []).length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (controller.destination.photos ?? []).length) % (controller.destination.photos ?? []).length);
    };

    return (
        <div className="relative w-full mt-11">
            <div className="relative overflow-hidden rounded-3xl w-full aspect-[16/9]">
                {(controller.destination.photos ?? []).map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className={`w-full aspect-[16/9] absolute block transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                            } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
                {(controller.destination.photos ?? []).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
});

export default Carousel;
