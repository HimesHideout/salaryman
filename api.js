import axios from "axios";

const baseURL = "http://localhost:9090"
// const baseURL = "INSERT URL HERE";

export const getPlayers = async () => {
    let r = await axios.get(`${baseURL}/api/players`);
    return await r.data.players;
};

export const getPlayerById = async (userId) => {
    let r = await axios.get(`${baseURL}/api/players/${userId}`);
    return await r.data.player;
}

export const updatePlayerById = async (userId, amount) => {
    let r = await axios.patch(`${baseURL}/api/players/${userId}`, {incr_balance: amount}, {
        headers: {
            Authorization: process.env.AUTH_TOKEN
        }
    })
    return await r.data.player;
}