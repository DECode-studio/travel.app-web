import { observer } from "mobx-react-lite";

type Props = {
    currentIndex: number
    lastPage: number
    onChange: (
        mode: string,
        data?: any
    ) => void;
};

const PaginationIndex = observer(({
    currentIndex,
    lastPage,
    onChange
}: Props) => {
    const getPageIndex = (): number[] => {

        const start = Math.max(1, currentIndex - 1);
        const end = Math.min(lastPage, currentIndex + 1);

        if (currentIndex === lastPage) {
            return [lastPage - 2, lastPage - 1, lastPage].filter(num => num >= 1);
        }

        let pageNumbers: number[] = [];
        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    return (
        <div className="flex flex-row items-center justify-center gap-2 mt-5">
            <button
                className="px-4 py-2 border border-cyan-700 rounded-xl bg-white text-cyan-700"
                onClick={() => onChange("change-index", Math.max(1, currentIndex - 1))}
                disabled={currentIndex === 1}
            >
                Prev
            </button>
            {getPageIndex().map((page) => (
                <button
                    key={page}
                    className={`px-4 py-2 border border-cyan-700 rounded-xl ${page === currentIndex
                        ? "bg-cyan-700 text-white"
                        : "bg-white text-cyan-700 "
                        }`}
                    onClick={() => onChange("change-index", page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="px-4 py-2 border border-cyan-700 rounded-xl bg-white text-cyan-700"
                onClick={() => onChange("change-index", Math.min(lastPage, currentIndex + 1))}
                disabled={currentIndex === (lastPage)}
            >
                Next
            </button>
        </div>
    );
});

export default PaginationIndex;
