import axios from "axios";

export async function getAlbumList({ userId }) {
    const resp = await axios.get(`/api/info/${userId}`);
    return resp.data;
}