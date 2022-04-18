const Discord = require("discord.js");
const { swap_pages2 } = require("../../utilfunctions")
const { Roles } = require("../../../settings.json");
module.exports = {
    name: "help", 
    category: "Information", 
    aliases: ["h", "commandinfo", "cmds", "cmd", "halp"],
    description: "Returns all Commmands, or one specific command", 
    run: async (client, message, args, prefix) => {
        
        var embed1 = new Discord.MessageEmbed()
        .setColor("#6861fe")
        .setAuthor({ name: 'www.kooje.me | #GENERAL', iconURL: message.guild.iconURL({dynamic: true}), url: 'https://kooje.me' })
        .setDescription('\`,help\` | \`,invite @BOT\` | \`,ping\` | \`,uptime\` | \`,howtopay\` | \`,howtoorder\` |\n\`,owner @Bot\` | \`,bots @USER\` | \`,botdetails @BOT\` | \`,paymentinfo @BOT\` |\n\`,translate\` | \`,modifybot\` | \`,sendmessage\`')
        .setFooter({ text: 'www.kooje.me'});

    var embed2 = new Discord.MessageEmbed()
        .setColor("#6861fe")
        .setAuthor({ name: 'www.kooje.me | #STAFF', iconURL: message.guild.iconURL({dynamic: true}), url: 'https://kooje.me' })
        .setDescription('\`,rank @User\` | \`,leaderboard [Days]\` | \`,close\` | \`,setprotyo\` | \`,howtopay\` | \`,setmod\` |\n\`,setimportant\` | \`,setfinished\` | \`,setbot\` | \`,addticket @User\` |\n\`,removeticket @User\` | \`,createbot\` | \`,cancelcreation\`')
        .setFooter({ text: 'www.kooje.me'});

    var embed3 = new Discord.MessageEmbed()
        .setColor("#6861fe")
        .setAuthor({ name: 'www.kooje.me | #MANAGEMENT', iconURL: message.guild.iconURL({dynamic: true}), url: 'https://kooje.me' })
        .setDescription('\`,addbot <@USER> <@Bot <BOTTYPE>\` | \`,removebot <@USER> <@Bot>\` | \`,changebot <@USER> <@Bot> <BOTTYPE>\` | \`,setneworiginalbot\` | \`,payment <Time> <@User> <@Bot>\` | \`,invitepayment <Time> <@User> <@Bot>\` |\n\`,boostpayment <Time> <@User> <@Bot>\` | \`,removepayment <Time> <@Bot>\` | \`,closeall\` | \`,bm\` |\n\`,removeticket @User\` | \`,startbot <@Bot>\` | \`,restartbot <@Bot>\` | \`,stopbot <@Bot>\` | \`,removebothost <@Bot>\` | \`,recoverbothost <@Bot>\` | \`,forcestartbot <@Bot>\` | \`,forcerestartbot <@Bot>\` | \`,forcestopbot <@Bot>\` | \`,noguildremovebothost\`')
        .setFooter({ text: 'www.kooje.me'});
        
    swap_pages2(client, message, [
        embed1,
        embed2,
        embed3
    ]);
    }
}