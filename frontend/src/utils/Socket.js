import Axios from "axios";

import Config from "../Config.json";

const { baseURL, endpoint } = Config;

const client = Axios.create({
    baseURL: baseURL,
    json: true
});

async function POST(data) {
    console.log("Sending data:");
    console.log(data);
    return client({
        method: "post",
        url: endpoint,
        data,
        headers: {}
    }).then(resp => {
        return resp.data ? resp.data : [];
    });
}

export default { POST };