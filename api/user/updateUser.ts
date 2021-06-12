import API_URL from '../../constants';

export default async function register(userId: number, name: string, surname: string, email: string, phoneNumber: string, token: string) {
    const response = await fetch(API_URL + '/users/' + userId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            name,
            surname,
            email,
            phoneNumber
        })
    });
    return await response.json();
}