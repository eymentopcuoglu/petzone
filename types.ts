export enum Status {
    'IDLE', 'LOADING', 'SUCCEEDED', 'FAILED'
}

export interface RegistrationRequest {
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    password: string
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