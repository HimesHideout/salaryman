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
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im4yZHNtNEZ0Q0p5cFNYbXpLNDlnMyJ9.eyJpc3MiOiJodHRwczovL2Rldi1idHc0aWwxMTg2cGl0d2R4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJ6QWdGOXY1ejk5cWRwQUllUnpkbFg3WVNNT2t5Q2lTRUBjbGllbnRzIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo5MDkwIiwiaWF0IjoxNzAwNTE1NzE4LCJleHAiOjE3MDA2MDIxMTgsImF6cCI6InpBZ0Y5djV6OTlxZHBBSWVSemRsWDdZU01Pa3lDaVNFIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.lTPedbgNGMv9TpX3xu_30EcEnJyFHWJQVTAN8zTlHI1-OtlTggP1dGL1vlelF1FINxjz41NQl29zPaOeOFIgbzqqFAsaX427bGX28uRiLJcVsdKDHx-RKCfIBU5Q4ewAsVohPpsTqPc_WRjDTn2DBAA2cHmqnjVrMiOy5s7q0g7JuA3nlUz1cKKXnlLmiDzEGlWPE_TADk2u9-lWuEASIDOOY8bUi_hbaTV0w_wtz8CtldFXIvsfLhnyHPfLF3cVFAn-yO4y0td6pDVtmf0xH5RzsleMOehcPI4iWS7CDKZWlNb01hDK6EF1KA8udZI7C0OiQTQ33U-K8sA6-_EdCQ"
        }
    })
    return await r.data.player;
}