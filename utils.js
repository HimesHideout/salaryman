const fs = require("fs")
exports.createUser = (userID) => {
    let userData = JSON.parse(fs.readFileSync("__tests__/test-data.json", "utf-8"))
    userData[userID] = {
        balance: 0,
        inventory: {}
    }
    fs.writeFileSync("__tests__/test-data.json", JSON.stringify(userData, 0, 2),)
}