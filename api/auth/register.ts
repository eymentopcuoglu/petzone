import { API_URL } from '../../constants';

export default async function register(name: string, surname: string, email: string, phoneNumber: string, password: string) {
    const response = await fetch(API_URL + '/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            surname,
            email,
            phoneNumber,
            password
        })
    });
    return await response.json();
}