import dayjs from "dayjs";

export const formatNumber = (number: number) => {
    if (number === undefined || number === null) {
        return '';
    }
    return number.toLocaleString();
};

export const formatDate = (date: string, format?: string) => {
    return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
};