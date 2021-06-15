import { API_URL } from '../../constants';

export default async function login(email: string, password: string) {
    const response = await fetch(API_URL + '/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await response.json();
}