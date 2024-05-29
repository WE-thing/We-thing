import axios from "axios";

export async function getMessageList({ invitationId }) {
  const resp = await axios.get(`/api/message/${invitationId}`);
  return resp.data;
}
