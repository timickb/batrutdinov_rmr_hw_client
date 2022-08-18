import { ErrorResponse } from "@/models/ErrorResponse"
import { Kitty } from "@/models/Kitty"
import { Profile } from "@/models/Profile"

export interface ILoginRequest {
    email: string
    password: string
    phone: string
}

export type StatusResponse = { 
    kind: "status"
    status: string
 }
export interface KittyResponse { 
    kind: "kitty"
    data: Kitty
 }
export type ProfileResponse = { 
    kind: "profile"
    data: Profile
 }


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
    const response = await fetch('/api/v1/logout', {
        method: 'POST',
        cache: 'no-cache'
    });
    return await response.json();
}

export async function getKitty(): Promise<KittyResponse | ErrorResponse> {
    const response = await fetch('/api/v1/kitty');
    return await response.json();
}

export async function getProfile(): Promise<ProfileResponse | ErrorResponse> {
    const response = await fetch('/api/v1/profile');
    return await response.json();
}