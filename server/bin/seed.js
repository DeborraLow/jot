const mongoose = require("mongoose");
const Emoji = require("../models/emoji");

const dbtitle = "jot"
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Emoji.collection.drop();

const emojis = [
    {
        url: "./assets/images/emojis/051-angel.svg",
        name: "angel",
    },
    {
        url: "./assets/images/emojis/051-angry-1.svg",
        name: "angry",
    },
    {
        url: "./assets/images/emojis/051-angry.svg",
        name: "angry",
    },
    {
        url: "./assets/images/emojis/051-arrogant.svg",
        name: "arrogant",
    },
    {
        url: "./assets/images/emojis/051-bored.svg",
        name: "bored",
    },
    {
        url: "./assets/images/emojis/051-confused.svg",
        name: "confused",
    },
    {
        url: "./assets/images/emojis/051-cool-1.svg",
        name: "cool",
    },
    {
        url: "./assets/images/emojis/051-cool.svg",
        name: "cool",
    },
    {
        url: "./assets/images/emojis/051-crying-1.svg",
        name: "crying",
    },
    {
        url: "./assets/images/emojis/051-crying-2.svg",
        name: "crying",
    },
    {
        url: "./assets/images/emojis/051-crying.svg",
        name: "crying",
    },
    {
        url: "./assets/images/emojis/051-cute.svg",
        name: "cute",
    },
    {
        url: "./assets/images/emojis/051-embarrassed.svg",
        name: "embarrassed",
    },
    {
        url: "./assets/images/emojis/051-emoji.svg",
        name: "emoji",
    },
    {
        url: "./assets/images/emojis/051-greed.svg",
        name: "greed",
    },
    {
        url: "./assets/images/emojis/051-happy-1.svg",
        name: "happy",
    },
    {
        url: "./assets/images/emojis/051-happy-2.svg",
        name: "happy",
    },
    {
        url: "./assets/images/emojis/051-happy-3.svg",
        name: "happy",
    },
    {
        url: "./assets/images/emojis/051-happy-4.svg",
        name: "happy",
    },
    {
        url: "./assets/images/emojis/051-happy-5.svg",
        name: "happy",
    },
    {
        url: "./assets/images/emojis/051-happy-6.svg",
        name: "happy",
    },
    {
        url: "./assets/images/emojis/051-happy-7.svg",
        name: "happy",
    },
    {
        url: "./assets/images/emojis/051-happy.svg",
        name: "happy",
    },
    {
        url: "./assets/images/emojis/051-in-love.svg",
        name: "love",
    },
    {
        url: "./assets/images/emojis/051-kiss-1.svg",
        name: "kiss",
    },
    {
        url: "./assets/images/emojis/051-kiss.svg",
        name: "kiss",
    },
    {
        url: "./assets/images/emojis/051-laughing-1.svg",
        name: "laugh",
    },
    {
        url: "./assets/images/emojis/051-laughing-2.svg",
        name: "laugh",
    },
    {
        url: "./assets/images/emojis/051-laughing.svg",
        name: "laugh",
    },
    {
        url: "./assets/images/emojis/051-muted.svg",
        name: "muted",
    },
    {
        url: "./assets/images/emojis/051-nerd.svg",
        name: "nerd",
    },
    {
        url: "./assets/images/emojis/051-sad-1.svg",
        name: "sad",
    },
    {
        url: "./assets/images/emojis/051-sad-2.svg",
        name: "sad",
    },
    {
        url: "./assets/images/emojis/051-sad.svg",
        name: "sad",
    },
    {
        url: "./assets/images/emojis/051-scare.svg",
        name: "scare",
    },
    {
        url: "./assets/images/emojis/051-serious.svg",
        name: "serious",
    },
    {
        url: "./assets/images/emojis/051-shocked.svg",
        name: "sick",
    },
    {
        url: "./assets/images/emojis/051-sick.svg",
        name: "sick",
    },
    {
        url: "./assets/images/emojis/051-sleepy.svg",
        name: "sleepy",
    },
    {
        url: "./assets/images/emojis/051-smart.svg",
        name: "smart",
    },
    {
        url: "./assets/images/emojis/051-surprised-1.svg",
        name: "suprised",
    },
    {
        url: "./assets/images/emojis/051-surprised-2.svg",
        name: "suprised",
    },
    {
        url: "./assets/images/emojis/051-surprised-3.svg",
        name: "suprised",
    },
    {
        url: "./assets/images/emojis/051-surprised-4.svg",
        name: "suprised",
    },
    {
        url: "./assets/images/emojis/051-surprised.svg",
        name: "suprised",
    },
    {
        url: "./assets/images/emojis/051-suspicious.svg",
        name: "suspicious",
    },
    {
        url: "./assets/images/emojis/051-tongue.svg",
        name: "tongue",
    },
    {
        url: "./assets/images/emojis/051-vain.svg",
        name: "vain",
    },
    {
        url: "./assets/images/emojis/051-wink-1.svg",
        name: "wink",
    },
    {
        url: "./assets/images/emojis/051-wink.svg",
        name: "wink",
    },

];


Emoji.create(emojis, (err, emojis) => {
    if (err) { throw (err) }
    console.log("Success", emojis);
    mongoose.connection.close();
})

