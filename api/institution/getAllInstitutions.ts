import { API_URL } from '../../constants';

export default async function getAllInstitutions() {
    const response = await fetch(API_URL + '/institutions?type=S');
    return await response.json();
}