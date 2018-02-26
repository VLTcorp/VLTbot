require("dotenv").config();
var Discord = require("discord.js");
var client = new Discord.Client();

var connection;
var VLT ;
var Drabot;
var pr = "/" ;
var mot;
var ora;
var historyy="";
var volonte;
var contt;
var nbessail = 10000;
var nbessaic = 50000;
var temphist = 3600000;
var tlimit = 1900;
var tab = [];
var supru = [];
var mikasupr = "141629369150865408";
var idassistant = "273747395685122048";
var mystere = false;
var cleverint = true;
var cleveron = false ;
var ttt ;
var amourre = ["oui","nan", "t'es moche " ,"kawaii" , "hors de ma vu", "baka"];

client.login(process.env.TOKENCLONE);

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


const cleverbot = require("cleverbot.io");
clever = new cleverbot(process.env.CLEVERVALU,process.env.CLEVERFF);
clever.setNick("VLTcorp");
console.log("clever pret"); 

try {
client.on("message", msg => 
{
	if (!msg.guild) return;
	
	
	
	VLT = false;
	if (msg.author.id === process.env.VLTID) 
	{	VLT = true;   }
	
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
		
	
	if(msg.content.startsWith(pr + "crr ") && VLT) 
	{
		//if (msg.content.length > pr.length + 4)
		
		mot = msg.content.replace(pr + "crr ", "");			
		msg.channel.send(mot).then(msg.delete(0));
		
		return;			
	}
	
	if(msg.content.startsWith(pr + "imo ") && VLT) 
		{
			mot = msg.content.replace(pr + "imo ", "");	
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
		
	if(msg.content.startsWith(pr + "disc"))
	{	
		if(cleverint)
		{
		cleverint=false;
		msg.channel.send("je ne répond plus au bot");//.then(msg2 => { msg2.delete(10000)})	;
		}
		else
		{	
		cleverint=true;
		msg.channel.send("je répond au bot");//.then(msg2 => { msg2.delete(10000)})				
		}		
	}	
	
	if(msg.content.startsWith(pr + "clever"))
	{	
		if(cleveron)
		{
		cleveron=false;
		msg.channel.send("je ne répond plus au clever");//.then(msg2 => { msg2.delete(10000)})	;
		}
		else
		{	
		cleveron=true;
		msg.channel.send("je répond au clever");//.then(msg2 => { msg2.delete(10000)})				
		}		
	}	
	
	if(msg.content.startsWith(pr + "amour"))
	{
		if (VLT)
		{
			msg.channel.send("oui patron sempai !")
			
		}
		else
		{ msg.channel.send(amourre[Math.floor(Math.random()*amourre.length)] ) }
		return;	
	}
	
	if(msg.content.startsWith(pr + "existe") && (msg.author.id != mikasupr)) 
	{
		msg.channel.fetchMessages().then(msgs => 
		{
			let tab = Array.from(msgs.values());
			let supru = [];
			var i = 0;		
			while (supru.length < 90 && i < tab.length)
			{
				console.log("tab num" + i);
				if (tab[i].author.id == mikasupr)
				{
					supru.push(tab[i]);
					console.log("valide" + i);
				}
				i++;
			}
			if (supru.length>0)
			{
				for (var u = 0 ; u < supru.length ; u++)
				{
					supru[u].delete(100);
					console.log("supr" + u);
				}
				//msg.channel.bulkDelete(supru);
				msg.channel.send("à votre service").then(msg2 => { msg2.delete(10000)});
				console.log("wololo");
			}
			console.log("finish");
		}).catch(console.error);
		msg.delete(0);
	}
	
	if(msg.content.startsWith(pr + "changeavatar ") && VLT)
	{
		let avatar = msg.content.replace(pr + "changeavatar ", "");
		client.user.setAvatar(avatar);
		msg.channel.send("ok je vais ressembler à ca" + avatar + " et c'est très joli" );
		msg.delete(5000);			
	}
	
	if (msg.author.id == mikasupr && mystere)
    {
		console.log("bravo");
		msg.delete(120000);		
	}
	
	if( msg.channel.name.toLowerCase() == "cleverbot" && msg.author.id != client.user.id && (!msg.author.bot || cleverint) && !(msg.content.startsWith(pr)) && cleveron  )
	{
		try{
		console.log("message pour "+ msg.author.username);	
		console.log(" : "+ msg.content);
        clever.create(function (err, session) 
        {
            clever.ask(msg.content, function (err, response) 
            {
				if (err) 
				{console.error(err);}
                else
				{msg.channel.send(response).catch(console.error);}
				console.log("reponce :" + response);
            });
        }); 
		}catch(err){console.log(err)}
	}
	
	if (msg.content.startsWith(pr + "mystere"))
	{
		if (mystere)
		{
			mystere = false ;			
			console.log("libre");
		}
		else
		{
			mystere = true ;
			console.log("mystere");
		}
		msg.delete(1000);
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

