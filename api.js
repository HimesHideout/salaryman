const axios = require("axios");

const baseURL = "http://localhost:9090"
// const baseURL = "INSERT URL HERE";

const getPlayers = async () => {
    let r = await axios.get(`${baseURL}/api/players`);
    return await r.data.players;
};

const getPlayerById = async (userId) => {
    let r = await axios.get(`${baseURL}/api/players/${userId}`);
    return await r.data.player;
}
module.exports = {getPlayers, getPlayerById}