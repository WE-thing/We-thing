import axios from "axios";

export async function getAlbumList({ userId }) {
  const resp = await axios.get(`/api/album/${userId}`);
  return resp.data;
}

export async function postAlbum({userId, formData}) {
    const resp = await axios.post(`/api/album/${userId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return resp.data;
}

export async function getImage({url}) {
    const resp = await axios.get(url, {responseType:'blob'});
    return resp.data;
}
