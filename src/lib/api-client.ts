import { LoginProps } from "@/app/(auth)/login/page";
import { RegisterFormProps } from "@/app/(auth)/register/page"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const register = async (formData: RegisterFormProps) => {
    const res = await fetch(`${API_BASE_URL}/api/users/register`,
        {
            method: 'POST',
            credentials: 'include',
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

export const Login = async (formData: LoginProps) => {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`,
        {
            method: 'POST',
            credentials: 'include',
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


export const validateToken = async () => {
    const res = await fetch(`${API_BASE_URL}/api/auth/validate-token`,
        {
            credentials: 'include',
        })

    const resBody = await res.json();

    if(!res.ok) {
        throw new Error(resBody.message)
    }

    return resBody;
}