const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2MkiRI4A#2yPArioD6-ogo3lh6Um8FXAS1gI4xoCLREMWoU0u-78",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/denuzer/DENU-ZER/blob/main/images/DENU%20ZER.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DENU-ZER Is Alive Now😍*",
BOT_OWNER: '94720630290',  // Replace with the owner's phone number



};
