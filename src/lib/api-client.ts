import { RegisterFormProps } from "@/app/(auth)/register/page"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const register = async (formData: RegisterFormProps) => {
    const res = await fetch(`${API_BASE_URL}/api/users/register`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

    const resBody = await res.json();

    if(!res.ok) {
        throw new Error(resBody.message)
    }
}