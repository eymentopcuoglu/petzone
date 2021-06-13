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