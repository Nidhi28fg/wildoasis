import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { getBookingsAFterDate } from "@/services/apiBooking";

export const useRecentBookings = () => {
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams.get("last"));
  const numDays = searchParams.get("last")
    ? Number(searchParams.get("last"))
    : 7;

  // get to date from now 
  console.log(subDays(new Date(), numDays));
  const queryDate = subDays(new Date(), numDays).toISOString();
  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAFterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings };
};
