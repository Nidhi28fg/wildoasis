import { getCabin } from "@/services/apiCabin";
import { useQuery } from "@tanstack/react-query";

export const useCabin = (id: string) => {
    const {
        isLoading,
        data: cabin,
        error,
    } = useQuery({
        queryKey: ["cabin", id],
        queryFn: () => getCabin(id),
        enabled: !!id,
    });

    return { isLoading, cabin, error };
};
