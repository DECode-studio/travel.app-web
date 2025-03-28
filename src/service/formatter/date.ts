import { format, parseISO, isValid } from "date-fns";
import { enUS, id } from "date-fns/locale";

// Deteksi bahasa otomatis
const getLocale = () => (typeof window !== "undefined" ? window.navigator.language : "en-US");
const currentLocale = getLocale().startsWith("id") ? id : enUS;

// Helper untuk memastikan input berupa Date
const ensureDate = (time: Date | string | any): Date => {
    if (time instanceof Date) return time;
    if (typeof time === "string") {
        const parsed = parseISO(time);
        if (isValid(parsed)) return parsed;
    }
    if (time?.toDate instanceof Function) return time.toDate();
    throw new Error("Invalid date input");
};

// Fungsi formatters
export const dateDayTimeFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "EEE, dd MMMM yyyy HH:mm", { locale: currentLocale });
};

export const dateDayFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "EEE, dd MMMM yyyy", { locale: currentLocale });
};

export const dateFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "dd MMMM yyyy", { locale: currentLocale });
};

export const monotoneDateFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "yyyy-MM-dd", { locale: currentLocale });
};

export const dateSlashFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "dd/MM/yyyy", { locale: currentLocale });
};

export const dateTimeFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "dd/MM/yyyy HH:mm", { locale: currentLocale });
};

export const dayToTimeFormatter = (time1: Date | string, time2: Date | string): string => {
    const date1 = ensureDate(time1);
    const date2 = ensureDate(time2);
    return `${format(date1, "EEEE HH:mm", { locale: currentLocale })} - ${format(date2, "EEEE HH:mm", { locale: currentLocale })}`;
};

export const dateToDateFormatter = (time1: Date | string, time2: Date | string): string => {
    const date1 = ensureDate(time1);
    const date2 = ensureDate(time2);
    return `${format(date1, "dd/MM/yyyy")} - ${format(date2, "dd/MM/yyyy")}`;
};

export const timeFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "HH:mm", { locale: currentLocale });
};

export const monthFullFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "MMMM", { locale: currentLocale });
};

export const monthYearFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "MMM yy", { locale: currentLocale });
};

export const yearFormatter = (time: Date | string): string => {
    const date = ensureDate(time);
    return format(date, "yyyy", { locale: currentLocale });
};
