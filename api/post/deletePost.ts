import { API_URL } from '../../constants';

export default async function deletePost(postId: number, token: string) {
    const response = await fetch(API_URL + '/posts/' + postId, {
        method: 'DELETE',
        headers: {
            'authorization': 'Bearer ' + token
        }
    });
    return await response.json();
}