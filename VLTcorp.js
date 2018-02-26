require("dotenv").config();
require("./VLTcorp.js");
var Discord = require("discord.js");
var client = new Discord.Client();
var VLT ;
var pr = "/" ;
var mot;
var mon;
var res;
var ora;
var teste;
var repbot = true ;
var probclever = 2 ; //   proba sur 10
var repondrebot = 1 ;
var autorep = 0 ;
var trashdrabot = 1 ;
var probaprouve = 1 ;
var avatar;
var name;
var game;
var ttt = [];
var Drago;
var Drabot;

client.login(process.env.TOKENAGENT);

function veritableau(msg) {
	let str = msg.embeds[0].fields[0].value.replace("js", "");
      while (str.includes("```"))
        str = str.replace("```", "");
      while (str.includes(" "))
        str = str.replace(" ", "");
	let tab = str.split("\n");
	str = tab[5] + tab[3] + tab[1];
     return str.split("");
  }

exports.stringToMember = function(str, guild) {
    let member;
    if (str.startsWith("<@") && str.endsWith(">"))
        member = guild.members.get(str.replace("<@","").replace(">","").replace("!",""));
    else
        member = guild.members.find("displayName",str);
    if (member !== null || member === undefined)
        return member;
    throw new Error("notAMember");
}

exports.stringToChannel = function(str, guild) {
    let channel = guild.channels.find("name", str);
    if (channel !== null || channel === undefined)
        return channel;
    throw new Error("notAChannel");
}

exports.stringToRole = function(str, guild) {
    let role;
    if (str.startsWith("<@") && str.endsWith(">"))
        role = guild.roles.get(str.replace("<@","").replace(">","").replace("&",""));
    else
        role = guild.roles.find("name",str);
    if (role !== null || role === undefined)
        return role;
    throw new Error("notARole");
}

 function joinVocal(msg) {
    msg.member.voiceChannel.join();
    guildsMusic.set(msg.guild.id, {channel:msg.channel,playing:false,paused:false,dispatcher:null,current:{ytlink:null,title:null,member:null},playlist:[null]});
}

 function playLocalFile(file, connection) {
    return connection.playStream(fs.createReadStream(file));
}


function playYoutube(ytlink, connection) {
    return connection.playStream(ytdl(ytlink, {filter:"audioonly"}));
}





try {
client.on("message", msg => 
{

	
	
	
//VLT president

	VLT = false;
	if (msg.author.id === process.env.VLTID) {
		VLT = true;   
    }
	
	Drago = false;
	if (msg.author.id === process.env.DRAGOID ) {
		Drago = true;   
    }
	
	Drabot = false;
	if (msg.author.id=== process.env.DRABOTID )
	{	Drabot = true;	}
	
	if(msg.content.includes("Tic-Tac-Toe") && msg.content.includes(msg.guild.me.displayName) && Drabot )
	{
		msg.channel.send("/tttplay").then(msg2 => msg2.delete(1));
		return;		
		
	}
	
	if(  (msg.content.includes("It is now ``"+ msg.guild.me.displayName +"``'s turn.") || msg.content.includes("It's your turn, ``"+ msg.guild.me.displayName)) && Drabot )
	{
		console.log(msg.content);
		try {ttt= veritableau(msg)}catch(err){console.error};
		let tabttt = [];
		var i ;
		for (i=0 ; i<ttt.length ; i++ )
		{
			if (ttt[i]=="_")
			{tabttt.push(i+1);}		
		}
		msg.channel.send(tabttt[Math.floor(Math.random()*tabttt.length)]).catch(console.error);
	}

	

	if(!msg.author.bot)
	{
		if(msg.content.startsWith("$$$") )
		{
			if (VLT)
			{
				msg.channel.send(" " + msg.author.username + " a 25132546521 :cherry_blossom: !").then(msg.delete(10000));
			return;
			}
			else
			{
				msg.channel.send(" " + msg.author.username + " a 0 :cherry_blossom: ce qui veut dire que " + msg.author.username  +" est très pauvre" ).then(msg.delete(10000));
			return;
			}
		}
		
		
		if(msg.content.startsWith(pr + "changeavatar ") && VLT)
		{
			let avatar = msg.content.replace(pr + "changeavatar ", "");
			client.user.setAvatar(avatar);
			msg.channel.send("ok je vais ressembler à ca" + avatar + " et c'est très joli" );
			msg.delete(5000);
			
		}
		
		if(msg.content.startsWith(pr + "changejeu ") && VLT)
		{
			let game = msg.content.replace(pr + "changejeu ", "");
			client.user.setGame(game);
			msg.channel.send("ok je joue à " + game + " c'est un super jeu");
			msg.delete(5000);
		}
		
		if(msg.content.startsWith(pr + "changenom ") && VLT)
		{
			let name = msg.content.replace(pr + "changenom ", "");
			client.user.setUsername(name);
			msg.channel.send("ok je m'appelle " + name + " et c'est bien" );
			msg.delete(5000);
		}
		
		
		if(msg.content.startsWith(pr + "help") || msg.content.startsWith(pr + "aide")) 
		{
			var hellp = "personne ne viandra vous aider";
			
			if (VLT)
			{				
				hellp = "à votre service";
			}
			msg.author.sendMessage(hellp);
			return;	
		}			
		
		if (msg.content.startsWith(pr + "assistance") || msg.content === "assistance") 
		{
			if (VLT) 
			{
				msg.channel.send("voilà ton café Patron"+ '\n' , {file: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/280px-A_small_cup_of_coffee.JPG"}).then(msg.delete(1000));
			}
			else
			{
				msg.reply("nous travaillons actuellement à faire de ce monde un monde meilleur").then(msg.delete(1000));
				return;
			}
		}
				
		if(msg.content.startsWith(pr + "id")) 
		{
			ora=Math.floor(Math.random()*100)
			if (ora<80)
			{
				msg.reply("voilà ton véritable ID : "+ ( Math.floor(Math.random()*100000000000000000)+100000000000000000)  );//.then(msg2 => msg2.delete(100000));
				msg.delete(5000);
				return;
			}
			else
			{
				msg.reply("voilà ton véritable ID : "+ msg.author.id  );//.then(msg2 => msg2.delete(100000));
				msg.delete(5000);
				return;
			}			
		}
		
		if(msg.content.startsWith(pr + "vient") && VLT) 
		{
			msg.member.voiceChannel.join();	
		}
	
		if(msg.content.startsWith(pr + "part") && VLT) 
		{
			msg.guild.me.voiceChannel.leave();	
		}
		
		if(msg.content.startsWith("VLTprefix")) 
		{
			msg.reply("le prefix utilisé par le VLTcorp est : "+pr).then(msg2 => msg2.delete(100000));
			msg.delete(10000);
			return;
		}

		if(msg.content.startsWith(pr + "drr ") && VLT) 
		{			
			mot = msg.content.replace(pr + "drr ", "");			
			msg.channel.send(mot).then(msg.delete(0));						
			return;			
		}		
		if(msg.content.startsWith(pr + "ima ") && VLT) 
		{
			mot = msg.content.replace(pr + "ima ", "");	
			if (mot.startsWith("http://") || mot.startsWith("https://"))
			{
				try
				{
					msg.channel.send({file: mot}).catch(err => {	});
				}
				catch(err)
				{
					console.log("erreurr :" + err);
				}			
			}
			else
			{
				msg.channel.send("lien invalide").catch(err => {	});
			}
			msg.delete(0);
			console.log("miam");
		}
				
		if(msg.content.startsWith("VLTprefix")) {
			msg.reply("le prefix utilisé par le VLTcorp est : "+pr).then(msg2 => msg2.delete(100000));
			msg.delete(10000);
			return;
		}
				
		if(msg.content.startsWith(pr + "chprefix "))
		{
			if(VLT)
			{
				if (msg.content.length > (pr.length + 9))
				{
					pr=msg.content.substring( (pr.length + 9) ,msg.content.length)
					msg.channel.send("prefixe changé en : "+pr)	.then(msg2 => msg2.delete(100000));
			msg.delete(10000);
					return;
				}
			}
			else
			{
				msg.channel.send("AHHH !! mais tu essayes de faire quoi la ?!!!").then(msg2 => msg2.delete(100000));
				msg.delete(10000);
				return;
			}			
		}	
	}		
	
	if(VLT && !msg.content.startsWith(pr)) 
	{
		ora=Math.floor(Math.random()*100)
		if (ora<probaprouve)
		{
			msg.channel.send("la VLTcorp approuve ce message").then(msg2 => msg2.delete(10000));			
		}
		return;
	}	
		if(msg.content.startsWith(pr + "nettoybot")) 
	{
		msg.channel.fetchMessages().then(msgs => 
		{
			let tab = Array.from(msgs.values());
			let supru = [];
			var i = 0;		
			while (supru.length < 90 && i < tab.length)
			{
				
				if (tab[i].author.bot)
				{
					supru.push(tab[i]);
					
				}
				i++;
			}
			if (supru.length>0)
			{
				msg.channel.bulkDelete(supru);
				msg.channel.send("c'est propre maintenant").then(msg2 => { msg2.delete(100000)});
				console.log("propre");
			}
		}).catch(console.error);
		msg.delete(0);
	}
	
});
}
catch (err)
{
console.log("voici l'erreur : " + err);
}





client.on("ready", () => {
  console.log("Je suis prêt pour monde meilleuyr o/");
});

