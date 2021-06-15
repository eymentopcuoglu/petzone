import { API_URL } from '../../constants';
import { NotificationPost } from "../../types";

export default async function getNotificationPosts(): Promise<NotificationPost[]> {
    const response = await fetch(API_URL + '/posts?type=N');
    return await response.json();
}