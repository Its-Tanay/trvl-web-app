"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import Link from "next/link";

export type RegisterFormProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const Register = ({}: RegisterFormProps) => {

    const { register, watch, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <form onSubmit={onSubmit} className='flex flex-col justify-start px-8 w-full'>
            <h2 className='scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight'>Create Account</h2>
            <p className='leading-7 [&:not(:first-child)]:mt-2 text-sm'>Embark on Your <span className='text-primary'>TRVL</span> Journey. Create Your Account Now!</p>
            <div className='flex flex-col md:flex-row mt-8 justify-between gap-4'>
                <div className='flex flex-col items-start gap-2 md:gap-4 w-full'>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input 
                        type='text' 
                        placeholder='First Name' 
                        {...register('firstName', {required: "This Field is Required"})}
                    />
                    {errors.firstName && <span className='text-red-500 text-sm'>{errors.firstName.message}</span>}
                </div>
                <div className='flex flex-col items-start gap-2 md:gap-4 w-full'>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input 
                        type='text' 
                        placeholder='First Name' 
                        {...register('lastName', {required: "This Field is Required"})}
                    />
                    {errors.lastName && <span className='text-red-500 text-sm'>{errors.lastName.message}</span>}
                </div>
            </div>
            <div className='flex flex-col items-start gap-2 md:gap-4 w-full mt-4 md:mt-8'>
                <Label htmlFor='email'>Email</Label>
                <Input 
                    type='email' 
                    placeholder='Email' 
                    {...register('email', {required: "This Field is Required"})}
                />
                {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
            </div>
            <div className='flex flex-col items-start gap-2 md:gap-4 w-full mt-4 md:mt-8'>
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
            <div className='flex flex-col items-start gap-2 md:gap-4 w-full mt-4 md:mt-8'>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <Input 
                    type='password' 
                    placeholder='Confirm Password' 
                    {...register('confirmPassword', {
                        required: "This Field is Required",
                        validate: (value) => value === watch('password') || "Passwords do not match"
                    })}
                />
                {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}
            </div>
            <div className='flex md:flex-row flex-col items-start gap-2 md:gap-4 w-full my-8'>
                <Button variant="default" type='submit'>Create Account</Button>
                <span>Already have an account? 
                    <Link href='/login'>
                        <Button variant='link' className='text-md px-2'>Sign In</Button>
                    </Link>
                </span>
            </div>
        </form>
    )
}

export default Register;