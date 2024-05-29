import axios from "axios";

export async function postLogin({ userName, phoneNumber }) {
  try {
    const resp = await axios.post(`/api/user/login`, {
      userName: userName,
      phoneNumber: phoneNumber,
    });
    return resp;
  } catch (e) {
    throw new Error(e.response.data);
  }
}
