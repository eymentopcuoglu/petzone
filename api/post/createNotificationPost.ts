import API_URL from '../../constants';

export default async function createNotificationPost(userIdentifier: number, description: string, title: string, petType: string,
                                                     postType: string, longitude: number, latitude: number,
                                                     noOfPets: number, token: string) {
    const body = new FormData();
    body.append('userIdentifier', '' + userIdentifier);
    body.append('description', description);
    body.append('title', title);
    body.append('petType', petType);
    body.append('postType', postType);
    body.append('longitude', '' + longitude);
    body.append('latitude', '' + latitude);
    body.append('noOfPets', '' + noOfPets);

    const response = await fetch(API_URL + '/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body
    });
    return await response.json();
}