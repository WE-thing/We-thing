import axios from 'axios';

export async function getAlbumList(userid) {
    const resp = await axios.get(`/api/album/${userid}`);
    return resp.data;
}

export async function postAlbum(userid) {
    const resp = await axios.post(`/api/album/${userid}`);
    return resp.data;
}