import { API_URL } from '../../constants';
import { ImagedPost } from "../../types";

export default async function getAdoptionPosts(): Promise<ImagedPost[]> {
    const response = await fetch(API_URL + '/posts?type=A');
    return await response.json();
}