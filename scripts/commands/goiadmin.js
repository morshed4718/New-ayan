module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0, 
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61564523816700") {
    var aid = ["100075133524968"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _𝗠𝗼𝗿𝘀𝗵𝗲𝗱 বস এর মন ভালো নেই আস্কে-!💔🥀", "- ニꙮ𝗠𝗼𝗿𝘀𝗵𝗲𝗱 বস এখন বিজি আছে যা বলার আমাকে বলতে পারেন⃪⃝❤‍🔥", "আমার 𝗠𝗼𝗿𝘀𝗵𝗲𝗱 বস এর একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে-🤣🤣","Mantion_দিস না বাঁলপাঁক্না ফাহিম প্রচুর বিজি 🥵🥀🤐","-বস একটু ব্যস্ত আছে ওয়েট কর আমি বলতেছি দাঁড়াও তোমাকে রিপ্লাই দিবে____// 🩷😌","আমার বস 𝗠𝗼𝗿𝘀𝗵𝗲𝗱 একটু ব্যস্ত আছে ওয়েট করেন রিপ্লে দিবে_____//😺😊🤗","বসকে এত মেনশন দিও না আজকে তার মন ভালো নেই-🐸😾🔪","বস কে এত মেনশন না দিলে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","Mantion_দিস না বাঁলপাঁক্না আরিয়ান প্রচুর বিজি 🥵🥀🤐","আরিয়ান বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল 𝗠𝗼𝗿𝘀𝗵𝗲𝗱 রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স-🤭🫣","মেনশন দিসনা পারলে একটা গফ দে-🙂😜","Mantion_দিস না বাঁলপাঁক্না ফাহিম প্রচুর বিজি 🥵🥀🤐","𝗠𝗼𝗿𝘀𝗵𝗲𝗱 বস চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিল-🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
