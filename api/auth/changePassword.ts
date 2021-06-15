import { API_URL } from '../../constants';

export default async function login(newPassword: string, token: string) {
    const response = await fetch(API_URL + '/auth/change_password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            newPassword: newPassword
        }),
    });
    return await response.json();
}
