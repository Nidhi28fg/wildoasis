import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useLogin = () => {
    const router = useRouter();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }: any) =>
            signIn("credentials", {
                email,
                password,
                redirect: false,
            }),
        onSuccess: (callback) => {
            if (callback?.error) {
                toast.error(callback.error);
                return;
            }

            if (callback?.ok) {
                toast.success("Logged in successfully");
                router.push("/dashboard");
                router.refresh();
            }
        },
        onError: (err: any) => {
            toast.error(err.message);
        },
    });

    return { login, isLoading };
};
