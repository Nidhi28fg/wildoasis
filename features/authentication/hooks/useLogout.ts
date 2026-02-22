import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useLogout = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: () => signOut({ redirect: false }),
        onSuccess: () => {
            queryClient.removeQueries();
            router.push("/login");
            toast.success("Logged out successfully");
        },
        onError: (err: any) => {
            toast.error(err.message);
        },
    });

    return { logout, isLoading };
};
