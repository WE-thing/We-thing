import axios from "axios";

export async function getInfo({token}) {
    const resp = await axios.get('/api/info', {
        headers: {
            'authorization': token,
        }
    });
    return resp.data;
}