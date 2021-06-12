import API_URL from '../../constants';

export default async function getAllInstitutions() {
    const response = await fetch(API_URL + '/institution');
    return await response.json();
}