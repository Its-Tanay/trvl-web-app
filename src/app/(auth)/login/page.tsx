"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import * as apiClient from "@/lib/api-client";
import { useToast } from "@/components/ui/toasts/use-toast";

export type LoginProps = {
    email: string;
    password: string;
}

const Login = ({}: LoginProps) => {

    const {toast} = useToast();

    const { register, handleSubmit, formState: {errors} } = useForm<LoginProps>();

    const mutation = useMutation({
        mutationFn: apiClient.Login,
        onSuccess: async () => {
            console.log("Login Successful")
            toast({description: "User logged in !", variant: "default"});
        },
        onError: async (error: Error) => {
            console.log("Login Failed")
            toast({description: error.message, variant: "destructive"})
        }
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        mutation.mutate(data)
    });

    return (
        <form onSubmit={onSubmit} className="flex flex-col justify-start px-8 w-full">
            <h2 className="scroll-m-20 text-3xl md:text-3xl font-semibold tracking-tight">
                Login
            </h2>
            <p className='leading-7 [&:not(:first-child)]:mt-2 text-sm'>Embark on Your <span className='text-primary'>TRVL</span> journey. Welcome Back! Log in to Your Account Now!</p>
            <div className="flex flex-col items-start gap-2 md:gap-4 w-full mt-8">
                <Label htmlFor='email'>Email</Label>
                    <Input 
                        type='email' 
                        placeholder='Email' 
                        {...register('email', {required: "This Field is Required"})}
                    />
                {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
            </div>
            <div className="flex flex-col items-start gap-2 md:gap-4 w-full mt-4 md:mt-8">
                <Label htmlFor='password'>Password</Label>
                    <Input 
                        type='password' 
                        placeholder='Password' 
                        {...register('password', 
                            {
                                required: "This Field is Required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long"
                                }
                            })}
                    />
                {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
            </div>
            <div className="flex md:flex-row flex-col items-start gap-2 md:gap-4 w-full my-8">
                <Button variant="default" type="submit">Login</Button>
                <span> Dont have an account?
                    <Link href="/register">
                        <Button variant="link" className="text-md px-2">Sign Up</Button>
                    </Link>
                </span>
            </div>
        </form>
    );
}

export default Login;