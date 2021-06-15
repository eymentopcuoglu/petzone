import { API_URL } from '../../constants';

export default async function getLatestPosts() {
    const response = await fetch(API_URL + '/posts/latest');
    return await response.json();
}