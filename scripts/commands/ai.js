module.exports = {
  config: {
  name: "ai",
  version: "1.0.0",
  permission: 0,
  credits: "ArYan",
  description: "",
  prefix: 'awto', 
  category: "user", 
  usages: "query",
  cooldowns: 5,
  dependencies: {
    "nayan-server": ''
  }
  },

  start: async function({ nayan, events, args, Users, NAYAN }) {

    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const uid = events.senderID;
  var nn = await Users.getNameUser(uid);
  let np = args.join(" ");
  const { gpt } = require("nayan-server");

gpt({
    messages: [
        {
            role: "assistant",
            content: "Hello! How are you today?"
        },
        {
            role: "user",
            content: `Hello, my name is ${nn}.`
        },
        {
            role: "assitant",
            content: `Hello, ${nn}! How are you today?`
        }
    ],
    prompt: `${np}`,
    model: "GPT-4",
    markdown: false
}, (err, data) => {
    console.log(data)
  const answer = data.gpt
    var msg = [];
    {
        msg += `🍒  𝗠𝗼𝗿𝘀𝗵𝗘𝗱 𝗔𝗜  🍒\n❍━━━━━━━━━━━━━❍\n ${answer}\n❍━━━━━━━━━━━━━❍`
    }
     NAYAN.react("✅")
    return NAYAN.reply(msg)
  });

  }
};
