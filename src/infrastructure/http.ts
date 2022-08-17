import { ErrorResponse } from "@/models/ErrorResponse"
import { Kitty } from "@/models/Kitty"
import { Profile } from "@/models/Profile"

export interface ILoginRequest {
    email: string
    password: string
    phone: string
}

export type StatusResponse = { status: string }
export type KittyResponse = { data: Kitty }
export type ProfileResponse = { data: Profile }


export async function login(request: ILoginRequest): Promise<StatusResponse | ErrorResponse> {
    const response = await fetch('/api/v1/login', {
        method: 'POST',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
    });

    return await response.json();
}

export async function logout(): Promise<StatusResponse | ErrorResponse> {
    const response = await fetch('/api/v1/logout');
    return await response.json();
}

export async function kitty(): Promise<KittyResponse | ErrorResponse> {
    const response = await fetch('/api/v1/kitty');
    return await response.json();
}

export async function profile(): Promise<ProfileResponse | ErrorResponse> {
    const response = await fetch('/api/v1/profile');
    return await response.json();
}