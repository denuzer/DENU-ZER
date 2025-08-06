const { cmd, commands } = require("../command");
const yts = require("yt-search");
const { ytmp3 } = require("@vredden/youtube_scraper");

cmd(
  {
    pattern: "song",
    alias: ["song", "song download"],
    react: "🎵",
    desc: "Download Song",
    category: "download",
    filename: __filename,
  },
  async (denu, mek, m, { from, quoted, body }) => {
    try {
      const query = quoted?.text || body?.trim();
      if (!query) {
        return await denu.sendMessage(from, { text: "❌ Please provide a song name." }, { quoted: mek });
      }

      const search = await yts(query);

      if (!search || !search.videos || search.videos.length === 0) {
        return await denu.sendMessage(from, { text: "😔 Song not found." }, { quoted: mek });
      }

      const video = search.videos[0];
      const title = video?.title?.toString() || "Unknown Title";
      const url = video?.url;

      await denu.sendMessage(from, { text: 🎶 Downloading: *${title}* }, { quoted: mek });

      const audio = await ytmp3(url);

      if (!audio || !audio?.url) {
        return await denu.sendMessage(from, { text: "❌ Couldn't fetch audio URL." }, { quoted: mek });
      }

      await denu.sendMessage(from, {
        audio: { url: audio.url },
        mimetype: 'audio/mpeg',
        fileName: ${title}.mp3,
      }, { quoted: mek });

    } catch (err) {
      console.error("❌ SONG COMMAND ERROR:", err);
      await denu.sendMessage(from, {
        text: "❌ Error occurred while processing your song request.",
      }, { quoted: mek });
    }
  }
);
