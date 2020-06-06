const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NjI5NDA5OTM0MzQxMTc3MzU4.XZZWEw.WEJqIqoPLcXE1zWVa2BRpPKNZeY';

bot.on('ready' , () =>{
    console.log('Leos soul has arrived and is online');
})

bot.on('message' , msg=>{

    if(msg.content.toLowerCase() === "no u" && !msg.author.bot){
        msg.channel.send('No u');
    }

})


bot.on('message' , msg=>{

    if(msg.content.toLowerCase() === "proof" && !msg.author.bot){
        msg.channel.send('No u');
    }

})

bot.on('message' , msg=>{

    if(msg.content.toLowerCase() === "tomato" && !msg.author.bot){
        msg.channel.send('Tomato is the best fruit and a cool dude');
    }

})


bot.on('message' , msg=>{

    if(msg.content.toLowerCase() === "ping" && !msg.author.bot){
        msg.channel.send('pong');
    }

})

bot.on('message' , msg=>{

    if(msg.content.toLowerCase() === "500" && !msg.author.bot){
        msg.channel.send('https://m0.joe.co.uk/wp-content/uploads/2016/07/13153252/eddieH.gif');
    }

})

bot.on('message' , msg=>{

    if(msg.content.toLowerCase() === "swole is the goal" && !msg.author.bot){
        msg.channel.send('Swole is the goal');
        msg.channel.send('Size is the prize');
        msg.channel.send('Its gainz oclock mother fuckers');
        msg.channel.send('LETS GO');
        
    }

})



bot.login(token);

