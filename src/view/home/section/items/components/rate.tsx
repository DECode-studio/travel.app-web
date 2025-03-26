import { useState } from "react";
import { Star, StarHalf, StarOff } from "lucide-react";

interface Props {
    rating: number
    size?: number
}

const StarRating = ({
    rating,
    size = 6
}: Props) => {

    return (
        <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, index) => {
                const currentRating = rating;
                const fullStar = index + 1 <= Math.floor(currentRating);
                const halfStar = index + 0.5 === currentRating;

                return (
                    <span
                        key={index}
                        className="cursor-pointer"
                    >
                        {fullStar ? (
                            <Star className={`w-${size} h-${size} fill-current`} size={size} />
                        ) : halfStar ? (
                            <StarHalf className={`w-${size} h-${size} fill-current`} size={size} />
                        ) : (
                            <Star className={`w-${size} h-${size} stroke-current`} size={size} />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
