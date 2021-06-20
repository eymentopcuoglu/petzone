import { API_URL } from '../../constants';

export default async function createImagedPost(userIdentifier: number, description: string, title: string, petType: string,
                                               postType: string, image: string, isCompleted: boolean, token: string) {
    const body = new FormData();
    body.append('userIdentifier', '' + userIdentifier);
    body.append('description', description);
    body.append('title', title);
    body.append('petType', petType);
    body.append('postType', postType);
    body.append('imageFile', image);
    body.append('isCompleted', isCompleted.toString());

    const response = await fetch(API_URL + '/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            'authorization': 'Bearer ' + token
        },
        body
    });
    return await response.json();
}