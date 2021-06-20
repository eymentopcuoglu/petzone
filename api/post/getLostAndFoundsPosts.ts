import { API_URL } from '../../constants';
import { ImagedPost } from "../../types";

export default async function getLostAndFoundsPosts(): Promise<ImagedPost[]> {
    const response = await fetch(API_URL + '/posts?type=LF');
    return await response.json();
}