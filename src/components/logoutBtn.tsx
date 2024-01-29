import React from 'react';
import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as apiClient from '@/lib/api-client';
import { useToast } from '@/components/ui/toasts/use-toast';

const LogOutBtn = () => {

    const queryClient  = useQueryClient();

    const {toast} = useToast();

    const mutation = useMutation({
        mutationFn: apiClient.Logout,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["validateToken"]});
            toast({description: "User logged out !", variant: "default"});
        },
        onError: (error: Error) => {
            toast({description: error.message, variant: "destructive"})
        }
    })

    const handleLogout = () => {
        mutation.mutate();
    }

    return (
        <Button variant="ghost" onClick={handleLogout}>
            Log out
        </Button>
    );
}

export default LogOutBtn;