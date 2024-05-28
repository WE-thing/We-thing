import axios from 'axios';

export async function getAlbumList({userId}) {
    const resp = await axios.get(`api/album/${userId}`);
    return resp.data;
}

export async function postAlbum({userId}) {
    const resp = await axios.post(`/api/album/${userId}`);
    return resp.data;
}