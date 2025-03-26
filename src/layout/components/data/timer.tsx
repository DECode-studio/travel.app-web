import { useEffect, useState } from "react";

type CountdownTimerProps = {
    value: any;
    flexStyle?: string
    containerStyle?: string
};

export const CountdownTimer = ({
    value,
    flexStyle = 'flex space-x-4 text-center',
    containerStyle
}: CountdownTimerProps) => {
    const targetDate = new Date(value).getTime(); // Inisialisasi targetDate
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                };
            } else {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className={`${flexStyle}`}>
            <div className={`${containerStyle}`}>
                <span className="text-2xl font-bold">{timeLeft.days}</span>
                <span className="block text-sm">Days</span>
            </div>
            <div className={`${containerStyle}`}>
                <span className="text-2xl font-bold">{timeLeft.hours}</span>
                <span className="block text-sm">Hours</span>
            </div>
            <div className={`${containerStyle}`}>
                <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                <span className="block text-sm">Minutes</span>
            </div>
            <div className={`${containerStyle}`}>
                <span className="text-2xl font-bold">{timeLeft.seconds}</span>
                <span className="block text-sm">Seconds</span>
            </div>
        </div>
    );
};