import { API_URL } from '../../constants';

export default async function forgotPassword(email: string) {
    const response = await fetch(API_URL + '/auth/forgot_password?email=' + email);
    return await response.json();
}