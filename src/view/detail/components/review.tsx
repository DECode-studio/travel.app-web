import DetailPageController from "@/controller/detail";
import { Star } from "lucide-react";
import { observer } from "mobx-react-lite";

type Props = {
    controller: DetailPageController
}

const ReviewComponent = observer(({ controller }: Props) => {
    return (
        <div className="p-5 border rounded-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Customer Reviews
            </h2>

            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-5"></div>

            {(controller.destination?.reviews ?? []).length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">
                    No reviews yet.
                </p>
            ) : (
                <div className="space-y-4">
                    {(controller.destination?.reviews ?? []).map((review, index) => (
                        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{review.user}</h3>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={
                                                i < (review.rating || 0)
                                                    ? "text-yellow-500"
                                                    : "text-gray-300 dark:text-gray-600"
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

export default ReviewComponent;
