import { decryptJSON } from "./encription";

const imdos = {
  async request(query, params = [], options) {
    const request = await fetch("/api/imdos/query/" + btoa(Math.random()), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: btoa(query),
        params: params,
      }),
    });

    const response = decryptJSON(await request.json());
    if (options?.first) {
      return response?.[0];
    }
    return response;
  },
};

export default imdos;

export const FILE_PATH = "https://api.careerstudy.in/";
