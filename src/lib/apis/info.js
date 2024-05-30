import axios from "axios";

export async function getInfo({token}) {
    const resp = await axios.get('/api/info', {
        headers: {
            'authorization': token,
        }
    });
    console.log(resp);
    return resp;
}