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

export const getItemsInShop = async () => {
    let r = await axios.get(`${baseURL}/api/shop`);
    return await r.data.items;
}