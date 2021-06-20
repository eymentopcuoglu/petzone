export enum Status {
    'IDLE', 'LOADING', 'SUCCEEDED', 'FAILED'
}

export interface RegistrationRequest {
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    password: string,
    navigation: any
}

export interface RegistrationResponse {
    user: User,
    navigation: any
}

export interface LoginRequest {
    email: string,
    password: string
}

export interface LoginResponse {
    jwt: string,
    user: User
}

export interface Institution {
    id: number,
    name: string,
    phoneNumber: string,
    institutionType: string,
    address: string
}

interface Post {
    id: number,
    userId: number,
    description: string,
    petType: string,
    postType: string,
    createdAt: Date,
    updatedAt: Date
}

export interface NotificationPost extends Post {
    longitude: number,
    latitude: number,
    noOfPets: number
}

export interface ImagedPost extends Post {
    image: Blob,
    isCompleted: boolean
}

export interface User {
    id: number,
    name: string,
    surname: string,
    phoneNumber: string,
    email: string,
    isVerified: boolean,
    createdAt: Date | null,
}