import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useCreateBooking = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const { mutate: createBooking, isLoading: isCreating } = useMutation({
        mutationFn: (newBooking: any) => axios.post("/api/booking", newBooking),
        onSuccess: () => {
            toast.success("Booking successful! We look forward to seeing you.");
            queryClient.invalidateQueries({ queryKey: ["bookings"] });
            router.push("/");
        },
        onError: (err: any) => toast.error(err.message),
    });

    return { createBooking, isCreating };
}
