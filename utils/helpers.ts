import { differenceInDays, format, formatDistance, parseISO } from "date-fns";
export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

interface IOptions {
  end?: boolean;
}

export const getToday = (options?: IOptions): string => {
  const today = new Date();
  if (options?.end) {
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }

  return today.toISOString();
};

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

export const subtractDates = (dateStr1: string, dateStr2: string) =>
  differenceInDays(parseISO(dateStr1), parseISO(dateStr2));

export const formatDate = (date: string | Date, formatStr = "MMM dd yyyy") =>
  format(new Date(date), formatStr);

export const getNightsPhrase = (n: number) => (n === 1 ? "1 night" : `${n} nights`);

export const getStatusStyles = (status: string) => {
  const styles: Record<string, string> = {
    unconfirmed: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    "checked-in": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    "checked-out": "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300",
  };
  return styles[status] || "bg-gray-100 text-gray-700";
};

