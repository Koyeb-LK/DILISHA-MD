const _0x41dfce=_0x4755;(function(_0x104e5b,_0x37318e){const _0x3aaa5b=_0x4755,_0x228758=_0x104e5b();while(!![]){try{const _0x15d5c5=parseInt(_0x3aaa5b(0x143))/0x1*(parseInt(_0x3aaa5b(0x122))/0x2)+-parseInt(_0x3aaa5b(0x18c))/0x3*(-parseInt(_0x3aaa5b(0x11e))/0x4)+-parseInt(_0x3aaa5b(0xf0))/0x5+parseInt(_0x3aaa5b(0x10f))/0x6+-parseInt(_0x3aaa5b(0x185))/0x7+parseInt(_0x3aaa5b(0xc4))/0x8+parseInt(_0x3aaa5b(0xfd))/0x9*(-parseInt(_0x3aaa5b(0xff))/0xa);if(_0x15d5c5===_0x37318e)break;else _0x228758['push'](_0x228758['shift']());}catch(_0xafe14b){_0x228758['push'](_0x228758['shift']());}}}(_0x2a96,0x674ad));const axios=require('axios'),fs=require('fs')[_0x41dfce(0x17d)],whois=require(_0x41dfce(0x177)),{tiktokdl}=require('tiktokdl'),path=require(_0x41dfce(0x179)),config=require(_0x41dfce(0x101)),zxcvbn=require(_0x41dfce(0x13b)),crypto=require('crypto'),dyluxApi=require('api-dylux'),cheerio=require('cheerio'),https=require('https'),{pipeline}=require(_0x41dfce(0x154)),{promisify}=require(_0x41dfce(0x120)),streamPipeline=promisify(pipeline),NineGag=require(_0x41dfce(0x10c)),Scraper=NineGag['Scraper'],{Buffer}=require(_0x41dfce(0xc6)),os=require('os'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,fetchJson,runtime,sleep}=require(_0x41dfce(0x12f)),mysteryItems=[_0x41dfce(0xcd),_0x41dfce(0xe7),_0x41dfce(0xc5),'A\x20rare\x20gem!',_0x41dfce(0x163),'A\x20secret\x20message!','A\x20beautiful\x20flower!',_0x41dfce(0xe9),_0x41dfce(0x174),_0x41dfce(0x162)],morseCodeMap={'A':'.-','B':_0x41dfce(0x117),'C':_0x41dfce(0xfc),'D':_0x41dfce(0xf7),'E':'.','F':_0x41dfce(0x156),'G':_0x41dfce(0x114),'H':'....','I':'..','J':_0x41dfce(0x13f),'K':'-.-','L':_0x41dfce(0x151),'M':'--','N':'-.','O':_0x41dfce(0xc7),'P':_0x41dfce(0xd9),'Q':_0x41dfce(0xe0),'R':_0x41dfce(0x10b),'S':_0x41dfce(0x132),'T':'-','U':_0x41dfce(0x109),'V':_0x41dfce(0x14d),'W':_0x41dfce(0x136),'X':_0x41dfce(0x15c),'Y':'-.--','Z':_0x41dfce(0xfe),0x1:_0x41dfce(0x108),0x2:'..---',0x3:_0x41dfce(0x142),0x4:_0x41dfce(0x141),0x5:'.....',0x6:_0x41dfce(0x180),0x7:_0x41dfce(0xc0),0x8:_0x41dfce(0xf2),0x9:_0x41dfce(0x14f),0x0:'-----','\x20':'/'},math=require(_0x41dfce(0x160)),PASTEBIN_API_KEY=config[_0x41dfce(0x14a)],dns=require(_0x41dfce(0x15a)),{Sticker,createSticker,StickerTypes}=require('wa-sticker-formatter'),gsmarena=require(_0x41dfce(0x140)),{checkAccess,isPremiumUser,blacklistedJIDs,premiumJIDs,dataLoaded}=require(_0x41dfce(0x102)),mono=_0x41dfce(0x133),sai=_0x41dfce(0x152),fetch=require('node-fetch'),API_URL=_0x41dfce(0x172),API_KEY='Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45',API2_URL=_0x41dfce(0x11d),CRIC_URL=_0x41dfce(0xfb),CRIC_KEY=_0x41dfce(0x110),API_BASE_URL=_0x41dfce(0xf1),Esana=require(_0x41dfce(0xd7)),api=new Esana(),{IOSNEWS}=require('ios-news'),apisg=_0x41dfce(0xd5),{cmd,commands}=require(_0x41dfce(0x17c)),fg=require(_0x41dfce(0x164)),yts=require(_0x41dfce(0x170)),pdfUrl='https://telegra.ph/file/67df6124e5ea42d98946f.jpg';function extractYouTubeId(_0x235ab8){const _0x19c31c=_0x41dfce,_0x284b2c=/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,_0x336058=_0x235ab8[_0x19c31c(0x139)](_0x284b2c);return _0x336058?_0x336058[0x1]:null;}function _0x4755(_0x359652,_0x7c4e44){const _0x2a969c=_0x2a96();return _0x4755=function(_0x4755a0,_0x1be68f){_0x4755a0=_0x4755a0-0xc0;let _0x4f37ac=_0x2a969c[_0x4755a0];return _0x4f37ac;},_0x4755(_0x359652,_0x7c4e44);}function convertYouTubeLink(_0x50dac1){const _0x59d8a0=_0x41dfce,_0x30bbf8=extractYouTubeId(_0x50dac1);if(_0x30bbf8)return _0x59d8a0(0x103);return _0x50dac1;}cmd({'pattern':_0x41dfce(0xe1),'desc':_0x41dfce(0x12c),'react':'🎧','category':'download','filename':__filename},async(_0x371341,_0x1ae007,_0x3f2955,{from:_0x2388d7,quoted:_0x2aaf17,body:_0x2a7879,isCmd:_0x2eeb8e,command:_0x5ef9bf,args:_0x6f113,q:_0x2040a3,isGroup:_0x502026,sender:_0x5ee5e3,senderNumber:_0x1ba375,botNumber2:_0x5a1370,botNumber:_0x3cf4ca,pushname:_0xa3eddf,isMe:_0x59d991,isOwner:_0x1eade9,groupMetadata:_0x37e6f7,groupName:_0x456b17,participants:_0x21a2bd,groupAdmins:_0x3bafee,isBotAdmins:_0x22b3c,isAdmins:_0x18638e,reply:_0x46352a})=>{const _0x5f41f8=_0x41dfce;try{if(!_0x2040a3)return _0x46352a(_0x5f41f8(0xc9));_0x2040a3=_0x2040a3;const _0x5a941c=await yts(_0x2040a3),_0x662868=_0x5a941c[_0x5f41f8(0x13c)][0x0],_0x1cecea=_0x662868[_0x5f41f8(0xe3)];let _0x2027ef=_0x5f41f8(0x14b)+_0x662868[_0x5f41f8(0x16a)]+_0x5f41f8(0x18d)+_0x662868[_0x5f41f8(0x188)]+'\x0a*🚀\x20𝖵𝗂𝖾𝗐𝗌*\x20:\x20'+_0x662868[_0x5f41f8(0x100)]+'\x0a*⏰\x20𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇*\x20:\x20'+_0x662868[_0x5f41f8(0x155)]+'\x0a*📆\x20𝖴𝗉𝗅𝗈𝖺𝖽𝖾𝖽\x20𝖮𝗇*\x20:\x20'+_0x662868['ago']+'\x0a*🎬\x20𝖢𝗁𝖺𝗇𝗇𝖾𝗅*\x20:\x20'+_0x662868[_0x5f41f8(0x181)]['name']+_0x5f41f8(0x112)+_0x662868[_0x5f41f8(0xe3)]+_0x5f41f8(0x121);const _0x3cf331=await _0x371341[_0x5f41f8(0x17b)](_0x2388d7,{'text':_0x2027ef,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterName':_0x5f41f8(0x128),'newsletterJid':_0x5f41f8(0x134)},'externalAdReply':{'title':_0x5f41f8(0x16f),'body':_0x662868[_0x5f41f8(0x16a)]+'\x20:\x20Powerd\x20By\x20DILISHA-MD\x20Song\x20Information\x20Search\x20Engine','thumbnailUrl':_0x662868[_0x5f41f8(0x161)],'sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':_0x1ae007}),_0x4d06cc=_0x3cf331[_0x5f41f8(0xd8)]['id'];_0x371341['ev']['on'](_0x5f41f8(0xeb),async _0x141649=>{const _0x1e679c=_0x5f41f8,_0x3b552d=_0x141649[_0x1e679c(0x18e)][0x0];if(!_0x3b552d[_0x1e679c(0xc8)])return;const _0x538481=_0x3b552d['message'][_0x1e679c(0x14e)]||_0x3b552d[_0x1e679c(0xc8)][_0x1e679c(0x189)]?.[_0x1e679c(0x157)],_0x4cd45d=_0x3b552d[_0x1e679c(0xd8)]['remoteJid'],_0x52a3ff=_0x3b552d['key']['participant']||_0x3b552d['key'][_0x1e679c(0xef)],_0x3f8cb9=_0x3b552d[_0x1e679c(0xc8)][_0x1e679c(0x189)]&&_0x3b552d['message'][_0x1e679c(0x189)][_0x1e679c(0xda)][_0x1e679c(0x145)]===_0x4d06cc;if(_0x3f8cb9){await _0x371341[_0x1e679c(0x17b)](_0x4cd45d,{'react':{'text':'','key':_0x3b552d[_0x1e679c(0xd8)]}});if(_0x538481==='1'||_0x538481==='2'){const _0x193d0c=await fg[_0x1e679c(0xe8)](_0x1cecea),_0x32e52a=_0x193d0c['dl_url'];await _0x371341[_0x1e679c(0x17b)](_0x4cd45d,{'react':{'text':'','key':_0x3b552d['key']}});if(_0x538481==='1')await _0x371341['sendMessage'](_0x4cd45d,{'audio':{'url':_0x32e52a},'mimetype':_0x1e679c(0x13d),'caption':_0x1e679c(0x166)},{'quoted':_0x3b552d});else _0x538481==='2'&&await _0x371341[_0x1e679c(0x17b)](_0x4cd45d,{'document':{'url':_0x32e52a},'mimetype':'audio/mpeg','fileName':_0x1e679c(0xe4)+_0x662868['title']+_0x1e679c(0x14c),'caption':_0x1e679c(0x166)},{'quoted':_0x3b552d});await _0x371341[_0x1e679c(0x17b)](_0x4cd45d,{'react':{'text':'','key':_0x3b552d[_0x1e679c(0xd8)]}}),console['log'](_0x1e679c(0x165));}else await _0x371341['sendMessage'](_0x4cd45d,{'react':{'text':'❓','key':_0x3b552d[_0x1e679c(0xd8)]}}),_0x46352a(_0x1e679c(0x130));}});}catch(_0x42c753){console[_0x5f41f8(0x15b)](_0x42c753),_0x46352a('𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖲𝗈𝗇𝗀\x20𝖳𝖺𝗍𝗂𝗅𝖾\x20𝖮𝗋\x20𝖴𝗋𝗅`\x20❗');}}),cmd({'pattern':'video','desc':'To\x20download\x20songs.','react':'🎬','category':_0x41dfce(0x11c),'filename':__filename},async(_0x4e1e8f,_0x19d669,_0x2cd333,{from:_0x2d442e,quoted:_0x403963,body:_0x3de9cc,isCmd:_0x411703,command:_0xa1755f,args:_0x257cde,q:_0x2dfaff,isGroup:_0x34278a,sender:_0x51d8e8,senderNumber:_0x2c60e7,botNumber2:_0x24d6ab,botNumber:_0x2167c5,pushname:_0x39dfa4,isMe:_0x3d432c,isOwner:_0x14f375,groupMetadata:_0x305b5d,groupName:_0x5dcd5c,participants:_0x3d5e81,groupAdmins:_0x11322e,isBotAdmins:_0x43414c,isAdmins:_0x19f0fb,reply:_0x993a61})=>{const _0x53e0cb=_0x41dfce;try{if(!_0x2dfaff)return _0x993a61(_0x53e0cb(0x176));_0x2dfaff=_0x2dfaff;const _0x46da50=await yts(_0x2dfaff),_0x19ac83=_0x46da50[_0x53e0cb(0x13c)][0x0],_0x55031c=_0x19ac83[_0x53e0cb(0xe3)];let _0x1fd5d0=_0x53e0cb(0x183)+_0x19ac83[_0x53e0cb(0x16a)]+_0x53e0cb(0x18d)+_0x19ac83[_0x53e0cb(0x188)]+_0x53e0cb(0xd1)+_0x19ac83[_0x53e0cb(0x100)]+_0x53e0cb(0x159)+_0x19ac83[_0x53e0cb(0x155)]+_0x53e0cb(0xec)+_0x19ac83[_0x53e0cb(0xdf)]+_0x53e0cb(0xc2)+_0x19ac83[_0x53e0cb(0x181)]['name']+_0x53e0cb(0x112)+_0x19ac83[_0x53e0cb(0xe3)]+_0x53e0cb(0x13e);const _0x33011b=await _0x4e1e8f[_0x53e0cb(0x17b)](_0x2d442e,{'text':_0x1fd5d0,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterName':'👾\x20DILISHA\x20\x20|\x20\x20\x20𝚃𝙴𝙲𝙷\x20ジ','newsletterJid':_0x53e0cb(0x134)},'externalAdReply':{'title':'DILISHA-MD\x20Video\x20Downloader','body':_0x19ac83[_0x53e0cb(0x16a)]+_0x53e0cb(0x126),'thumbnailUrl':_0x19ac83[_0x53e0cb(0x161)],'sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':_0x19d669}),_0x25d28d=_0x33011b[_0x53e0cb(0xd8)]['id'];_0x4e1e8f['ev']['on'](_0x53e0cb(0xeb),async _0x330505=>{const _0x5629f5=_0x53e0cb,_0x382691=_0x330505[_0x5629f5(0x18e)][0x0];if(!_0x382691[_0x5629f5(0xc8)])return;const _0x40b102=_0x382691[_0x5629f5(0xc8)][_0x5629f5(0x14e)]||_0x382691[_0x5629f5(0xc8)][_0x5629f5(0x189)]?.[_0x5629f5(0x157)],_0x495156=_0x382691[_0x5629f5(0xd8)][_0x5629f5(0xef)],_0x1506da=_0x382691[_0x5629f5(0xd8)][_0x5629f5(0x11f)]||_0x382691['key'][_0x5629f5(0xef)],_0x5d6b85=_0x382691['message'][_0x5629f5(0x189)]&&_0x382691[_0x5629f5(0xc8)][_0x5629f5(0x189)][_0x5629f5(0xda)]['stanzaId']===_0x25d28d;if(_0x5d6b85){await _0x4e1e8f['sendMessage'](_0x495156,{'react':{'text':'','key':_0x382691[_0x5629f5(0xd8)]}});if(_0x40b102==='1'||_0x40b102==='2'){const _0x515204=await fg[_0x5629f5(0x124)](_0x55031c),_0x136dba=_0x515204[_0x5629f5(0x125)];await _0x4e1e8f[_0x5629f5(0x17b)](_0x495156,{'react':{'text':'','key':_0x382691['key']}});if(_0x40b102==='1')await _0x4e1e8f[_0x5629f5(0x17b)](_0x495156,{'video':{'url':_0x136dba},'mimetype':'video/mp4','caption':'‎\x20‎𝖸\x20𝖳\x20\x20𝖲\x20𝖣\x20\x20𝖵\x20𝖨\x20𝖣\x20𝖤\x20𝖮\x20\x20(\x204\x208\x200\x20𝗉\x20\x20)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*'},{'quoted':_0x382691});else _0x40b102==='2'&&await _0x4e1e8f['sendMessage'](_0x495156,{'document':{'url':_0x136dba},'mimetype':_0x5629f5(0x16c),'fileName':_0x5629f5(0x18a)+_0x19ac83[_0x5629f5(0x16a)]+'.mp4','caption':_0x5629f5(0x184)},{'quoted':_0x382691});await _0x4e1e8f[_0x5629f5(0x17b)](_0x495156,{'react':{'text':'','key':_0x382691[_0x5629f5(0xd8)]}}),console['log']('Response\x20sent\x20successfully');}else await _0x4e1e8f[_0x5629f5(0x17b)](_0x495156,{'react':{'text':'❓','key':_0x382691[_0x5629f5(0xd8)]}}),_0x993a61(_0x5629f5(0x130));}});}catch(_0x127bed){console['log'](_0x127bed),_0x993a61(_0x53e0cb(0x176));}});const baseUrl='https://prabath-md-api.up.railway.app';async function socialMediaDownload(_0x7781bc){const _0x535110=_0x41dfce;let _0x2a166a;if(_0x7781bc['includes']('facebook.com')||_0x7781bc['includes'](_0x535110(0x12e)))_0x2a166a=baseUrl+_0x535110(0xea)+encodeURIComponent(_0x7781bc);else{if(_0x7781bc['includes'](_0x535110(0xdb)))_0x2a166a=baseUrl+_0x535110(0x18b)+encodeURIComponent(_0x7781bc);else{if(_0x7781bc[_0x535110(0xe2)]('twitter.com'))_0x2a166a=baseUrl+_0x535110(0x119)+encodeURIComponent(_0x7781bc);else throw new Error('𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄\x20𝖴𝗋𝗅`\x20❗');}}const _0x1b8e76=await axios[_0x535110(0x16b)](_0x2a166a);return _0x1b8e76[_0x535110(0x10e)];}function _0x2a96(){const _0x45cf48=['api-dylux','Response\x20sent\x20successfully','>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','isGroup','\x20MB\x0a📆\x20𝖫𝖺𝗌𝗍\x20𝖴𝗉𝖽𝖺𝗍𝖾\x20:\x20','‎\x20‎𝖥\x20𝖡\x20\x20𝖲\x20𝖣\x20\x20𝖵\x20𝖨\x20𝖣\x20𝖤\x20𝖮\x20\x20(\x204\x208\x200\x20𝗉\x20)\x0a‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','title','get','video/mp4','https://pomf2.lain.la/f/41i00kdh.png','No\x20Video\x20URL\x20Found\x20in\x20the\x20Response.','DILISHA-MD\x20Song\x20Downloader','yt-search','𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖤𝗇𝗍𝖾𝗋\x20𝖵𝖺𝗅𝗂𝖽\x20𝖮𝗉𝗍𝗂𝗈𝗇\x20`1\x20𝖮𝗋\x202`\x20❗','https://api.polygon.io/v2/reference/news','/api/gdrivedl?url=','A\x20special\x20key!','createWriteStream','𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖵𝗂𝖽𝖾𝗈\x20𝖳𝖺𝗍𝗂𝗅𝖾\x20𝖮𝗋\x20𝖴𝗋𝗅`\x20❗','whois','File\x20write\x20error:\x20','path','name','sendMessage','../command','promises','success\x20✅','‎\x20‎𝖥\x20𝖡\x20\x20𝖧\x20𝖣\x20\x20𝖵\x20𝖨\x20𝖣\x20𝖤\x20𝖮\x20\x20(\x207\x202\x200\x20𝗉\x20)\x0a‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','-....','author','\x20:\x20Powerd\x20By\x20DILISHA-MD\x20Apk\x20Information\x20Search\x20Engine','*乂\x20DILISHA-MD\x20VIDEO\x20DOWNLOADER*\x0a\x0a*⚙️\x20𝖳𝗂𝗍𝗅𝖾*\x20:\x20','>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*\x0a','3077697ipwCeF','*乂\x20DILISHA-MD\x20APK\x20DOWNLOADER*\x0a\x0a📁\x20𝖭𝖺𝗆𝖾\x20:\x20','https://pomf2.lain.la/f/9ggi67rj.jpg','description','extendedTextMessage','DILISHA-ᴍᴅ\x20V1.0.0\x20|\x20','/api/mediafiredl?url=','3069STEfcS','\x0a*📃\x20𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇*\x20:\x20','messages','Bytes','--...','*😢\x20Access\x20denied.\x20You\x20don\x27t\x20have\x20permission\x20to\x20use\x20this\x20command.🎁\x20Change\x20Bot\x20Mode!*','\x0a*🎬\x20𝖢𝗁𝖺𝗇𝗇𝖾𝗅*\x20:\x20','Failed\x20to\x20Fetch\x20Video\x20Data.','5101512QTWzMS','A\x20golden\x20coin!','buffer','---','message','𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖲𝗈𝗇𝗀\x20𝖳𝖺𝗍𝗂𝗅𝖾\x20𝖮𝗋\x20𝖴𝗋𝗅`\x20❗','join','package','Error:\x20','A\x20shiny\x20new\x20toy!','sender','\x0a🖇️\x20𝖡𝖺𝗌𝖾\x20𝖴𝗋𝗅\x20:\x20www.gdrive.com\x0a‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','*乂\x20DILISHA-MD\x20TIK\x20TOK\x20DOWNLOADER*\x0a\x0a🎬\x20𝖳𝖺𝗍𝗂𝗅𝖾\x20:\x20Undifended\x0a🖇️\x20𝖡𝖺𝗌𝖾\x20𝖴𝗋𝗅\x20:\x20www.tiktok.com\x0a\x0a\x0a*乂\x20REPLY\x20THE\x20DOWNLOAD\x20OPTION*\x0a\x0a1️⃣\x20\x20𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽\x20:\x20𝖵𝗂𝖽𝖾𝗈\x20𝖧𝖣\x20𝖳𝗒𝗉𝖾.\x20(\x20𝖶𝗂𝗍𝗁𝗈𝗎𝗍\x20𝖶𝖺𝗍𝖾𝗋𝗆𝖺𝗋𝗄\x20)\x0a2️⃣\x20\x20𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽\x20:\x20𝖠𝗎𝖽𝗂𝗈\x20𝖳𝗒𝗉𝖾.\x0a‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','\x0a*🚀\x20𝖵𝗂𝖾𝗐𝗌*\x20:\x20','file_type','❌\x20Error:\x20The\x20requested\x20file\x20could\x20not\x20be\x20found.\x20Please\x20check\x20the\x20URL\x20and\x20try\x20again.','GET','https://prabath-md-api.up.railway.app/api/','icon','@sl-code-lords/esana-news','key','.--.','contextInfo','mediafire.com','fileName','fileSize','❌\x20Error\x20in\x20Google\x20Drive\x20downloader:','ago','--.-','song2','includes','url','ꜱᴀʜᴀꜱ-ᴍᴅ\x20v1.0.0\x20|\x20','SAHAS-MD\x20FB\x20Downloader','response','A\x20magical\x20potion!','yta','A\x20cute\x20plushie!','/api/fdown?url=','messages.upsert','\x0a*📆\x20𝖴𝗉𝗅𝗈𝖺𝖽𝖾𝖽\x20𝖮𝗇*\x20:\x20','DILISHA\x20•\x20ᴍᴜʟᴛɪ\x20ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ\x20㋛','facebook','remoteJid','2943420avzRIh','https://api.memegen.link','---..','*🚫\x20You\x20are\x20blacklisted.\x20Access\x20denied.*','tiktok','‎\x20‎𝖳\x20𝖨\x20𝖪\x20𝖳\x20𝖮\x20𝖪\x20\x20𝖧\x20𝖣\x20\x20𝖵\x20𝖨\x20𝖣\x20𝖤\x20𝖮\x20\x20(\x207\x202\x200\x20𝗉\x20\x20)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','*乂\x20DILISHA-MD\x20FB\x20DOWNLOADER*\x0a\x0a🎬\x20𝖳𝖺𝗍𝗂𝗅𝖾\x20:\x20Undifended\x0a🖇️\x20𝖡𝖺𝗌𝖾\x20𝖴𝗋𝗅\x20:\x20www.facebook.com\x0a\x0a\x0a*乂\x20REPLY\x20THE\x20DOWNLOAD\x20OPTION*\x0a\x0a1️⃣\x20\x20𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽\x20:\x20𝖵𝗂𝖽𝖾𝗈\x20𝖧𝖣\x20𝖳𝗒𝗉𝖾.\x0a2️⃣\x20\x20𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽\x20:\x20𝖵𝗂𝖽𝖾𝗈\x20𝖲𝖣\x20𝖳𝗒𝗉𝖾.\x0a‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','-..','Fetch\x20APK\x20details\x20and\x20send\x20APK\x20file.','❌\x20An\x20error\x20occurred:\x20','https://','https://api.cricapi.com/v1/currentMatches','-.-.','54pccwQP','--..','104410KGaBbO','views','../config','../DATABASE/accessControl','https://www.youtube.com/watch?v=${videoId}','trim','googledrive','startsWith','-\x20SD\x20\x0a\x0a\x20>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','.----','..-','error','.-.','9gag','DILISHA-MD\x20Tik\x20Tok\x20Downloader','data','144798AJMHuM','f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78','https://prabath-md-api.up.railway.app/api/apkdl?q=','\x0a*🖇️\x20𝖴𝗋𝗅*\x20:\x20','status','--.','link','.apk','-...','𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄\x20𝖴𝗋𝗅`\x20❗','/api/twitter/dl?url=','gdrive','pow','download','https://api.polygon.io/v1/marketstatus/now','1896HulucQ','participant','util','\x0a\x0a*乂\x20REPLY\x20THE\x20DOWNLOAD\x20OPTION*\x20\x20\x0a\x0a*1️⃣\x20\x20𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽\x20:\x20𝖠𝗎𝖽𝗂𝗈\x20𝖳𝗒𝗉𝖾*\x0a*2️⃣\x20\x20𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽\x20:\x20𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍\x20𝖳𝗒𝗉𝖾*\x0a‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','367362xQGgre','.fb\x20<facebook\x20link>','ytv','dl_url','\x20:\x20Powerd\x20By\x20DILISHA-MD\x20Song\x20Information\x20Search\x20Engine','𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖠𝗉𝗉𝗅𝗂𝖼𝖺𝗍𝗂𝗈𝗇\x20𝖭𝖺𝗆𝖾`\x20❗','👾\x20DILISHA\x20\x20|\x20\x20\x20𝚃𝙴𝙲𝙷\x20ジ','DILISHA-MD\x20Gdrive\x20Downloader','🎗️','Error','To\x20download\x20songs.','*乂\x20DILISHA-MD\x20GDRIVE\x20DOWNLOADER*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a📁\x20𝖭𝖺𝗆𝖾\x20:\x20','fb.watch','../DATABASE/functions','𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖤𝗇𝗍𝖾𝗋\x20`𝖵𝖺𝗅𝗂𝖽\x20𝖮𝗉𝗍𝗂𝗈𝗇\x201\x20𝖮𝗋\x202`\x20❗','0\x20Bytes','...','```','120363296605464049@newsletter','\x20:\x20Powerd\x20By\x20DILISHA-MD\x20Gdrive\x20Information\x20Search\x20Engine','.--','finish','𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖦𝖽𝗋𝗂𝗏𝖾\x20𝖴𝗋𝗅`\x20❗','match','dllink','zxcvbn','videos','audio/mpeg','\x0a\x0a*乂\x20REPLY\x20THE\x20DOWNLOAD\x20OPTION*\x20\x20\x0a\x0a*1️⃣\x20\x20𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽\x20:\x20𝖠𝗎𝖽𝗂𝗈\x20𝖳𝗒𝗉𝖾*\x0a*2️⃣\x20\x20𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽\x20:\x20𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍\x20𝖳𝗒𝗉𝖾*\x0a‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','.---','gsmarena-api','....-','...--','2KJxiMt','Download\x20TikTok\x20videos','stanzaId','twdl','lastup','pipe','*𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝗂𝗇𝗀...*','PASTEBIN_API_KEY','*乂\x20DILISHA-MD\x20SONG\x20DOWNLOADER*\x0a\x0a*⚙️\x20𝖳𝗂𝗍𝗅𝖾*\x20:\x20','.mp3','...-','conversation','----.','DILISHA-MD\x20Application\x20Downloader','.-..','6467ad0b29','𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖳𝗂𝗄𝗍𝗈𝗄\x20𝖴𝗋𝗅`\x20❗','stream','timestamp','..-.','text','size','\x0a*⏰\x20𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇*\x20:\x20','dns','log','-..-','\x0a🖇️\x20𝖡𝖺𝗌𝖾\x20𝖴𝗋𝗅\x20:\x20www.playstore.com\x0a‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x20‎\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*','Detailed\x20Error:','https://pomf2.lain.la/f/eo16q3mu.png','mathjs','thumbnail','A\x20futuristic\x20gadget!','An\x20ancient\x20scroll!'];_0x2a96=function(){return _0x45cf48;};return _0x2a96();}cmd({'pattern':'fb','alias':[_0x41dfce(0xee)],'react':'🔎','desc':'Download\x20Facebook\x20videos','category':_0x41dfce(0x11c),'use':_0x41dfce(0x123),'filename':__filename},async(_0x562dc5,_0x2ce641,_0x123fb7,{from:_0x6aac1a,quoted:_0xe88898,args:_0x4e4fdf,q:_0x1672ae,isGroup:_0x4f6c2f,sender:_0x2e327a,pushname:_0x1efbe1,reply:_0x36bec0})=>{const _0x59fac7=_0x41dfce;try{const _0x57f5b5=_0x123fb7['sender'],_0x50a720=_0x123fb7[_0x59fac7(0x167)]||![];if(!checkAccess(_0x57f5b5,_0x50a720))return blacklistedJIDs[_0x59fac7(0xe2)](_0x57f5b5)?_0x36bec0(_0x59fac7(0xf3)):_0x36bec0(_0x59fac7(0xc1));if(!_0x1672ae)return await _0x36bec0(_0x59fac7(0x118));const _0x1eff3a=await socialMediaDownload(_0x1672ae);if(_0x1eff3a[_0x59fac7(0x113)]===_0x59fac7(0x17e)&&_0x1eff3a[_0x59fac7(0x10e)]){const {hd:_0xe0b7b3,sd:_0x31be39,audio:_0x36d0cd}=_0x1eff3a['data'];if(_0xe0b7b3||_0x31be39){const _0x5bf7d9=_0x59fac7(0xf6),_0x2838f6=await _0x562dc5[_0x59fac7(0x17b)](_0x6aac1a,{'text':_0x5bf7d9,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterName':_0x59fac7(0x128),'newsletterJid':_0x59fac7(0x134)},'externalAdReply':{'title':_0x59fac7(0xe5),'body':'Undifended\x20:\x20Powerd\x20By\x20DILISHA-MD\x20FB\x20Information\x20Search\x20Engine','thumbnailUrl':_0x59fac7(0x187),'sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':_0x2ce641});_0x562dc5['ev']['on'](_0x59fac7(0xeb),async _0x3f6674=>{const _0x3fd53a=_0x59fac7,_0x494748=_0x3f6674[_0x3fd53a(0x18e)][0x0];if(!_0x494748[_0x3fd53a(0xc8)]||!_0x494748[_0x3fd53a(0xc8)]['extendedTextMessage'])return;const _0x1d3157=_0x494748[_0x3fd53a(0xc8)][_0x3fd53a(0x189)]['text'][_0x3fd53a(0x104)](),_0x310ca0=_0x494748[_0x3fd53a(0xc8)][_0x3fd53a(0x189)][_0x3fd53a(0xda)];if(_0x310ca0&&_0x310ca0['stanzaId']===_0x2838f6[_0x3fd53a(0xd8)]['id']){if(_0x1d3157==='1'&&_0xe0b7b3)await _0x562dc5[_0x3fd53a(0x17b)](_0x6aac1a,{'video':{'url':_0xe0b7b3},'caption':_0x3fd53a(0x17f)},{'quoted':_0x2ce641});else _0x1d3157==='2'&&_0x31be39?await _0x562dc5[_0x3fd53a(0x17b)](_0x6aac1a,{'video':{'url':_0x31be39},'caption':_0x3fd53a(0x169)},{'quoted':_0x2ce641}):_0x36bec0(_0x3fd53a(0x171));}});}else _0x36bec0(_0x59fac7(0x16e));}else _0x36bec0(_0x59fac7(0xc3));}catch(_0xef41fc){console[_0x59fac7(0x10a)](_0x59fac7(0x15e),_0xef41fc),_0x36bec0('𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄\x20𝖴𝗋𝗅`\x20❗');}}),cmd({'pattern':'tt','alias':[_0x41dfce(0xf4)],'react':'🎵','desc':_0x41dfce(0x144),'category':_0x41dfce(0x11c),'use':'.tt\x20<tiktok\x20link>','filename':__filename},async(_0x339116,_0x430ddc,_0xad3106,{from:_0x2325c7,args:_0x2041aa,reply:_0x243d06,pushname:_0x1d3b10})=>{const _0x129d27=_0x41dfce;try{const _0x57d192=_0xad3106['sender'],_0x13770f=_0xad3106[_0x129d27(0x167)]||![];if(!checkAccess(_0x57d192,_0x13770f))return blacklistedJIDs[_0x129d27(0xe2)](_0x57d192)?_0x243d06(_0x129d27(0xf3)):_0x243d06(_0x129d27(0xc1));const _0x15eac1=_0x2041aa[_0x129d27(0xca)]('\x20');if(!_0x15eac1)return await _0x243d06(_0x129d27(0x153));let _0x53dcb7=_0x129d27(0xd0);const _0x53f0b5=await _0x339116[_0x129d27(0x17b)](_0x2325c7,{'text':_0x53dcb7,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterName':_0x129d27(0x128),'newsletterJid':'120363296605464049@newsletter'},'externalAdReply':{'title':_0x129d27(0x10d),'body':'Undifended\x20:\x20Powerd\x20By\x20SAHAS-MD\x20Tiktok\x20Information\x20Search\x20Engine','thumbnailUrl':_0x129d27(0x15f),'sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':_0x430ddc});let _0x25f114=await tiktokdl(_0x15eac1),{video:_0x467b43,music:_0x3a43fc}=_0x25f114;_0x339116['ev']['on'](_0x129d27(0xeb),async _0x420ed3=>{const _0x47d300=_0x129d27,_0x176c1d=_0x420ed3['messages'][0x0];if(!_0x176c1d['message']||!_0x176c1d[_0x47d300(0xc8)][_0x47d300(0x189)])return;const _0x480a73=_0x176c1d[_0x47d300(0xc8)][_0x47d300(0x189)][_0x47d300(0x157)][_0x47d300(0x104)](),_0x24bb9f=_0x176c1d[_0x47d300(0xc8)]['extendedTextMessage']['contextInfo'];if(_0x24bb9f&&_0x24bb9f[_0x47d300(0x145)]===_0x53f0b5[_0x47d300(0xd8)]['id']){if(_0x480a73==='1')await _0x339116[_0x47d300(0x17b)](_0x2325c7,{'video':{'url':_0x467b43},'caption':_0x47d300(0xf5)},{'quoted':_0x176c1d});else _0x480a73==='2'?await _0x339116[_0x47d300(0x17b)](_0x2325c7,{'audio':{'url':_0x3a43fc},'mimetype':_0x47d300(0x13d)},{'quoted':_0x176c1d}):await _0x339116[_0x47d300(0x17b)](_0x2325c7,{'text':_0x47d300(0x171)},{'quoted':_0x176c1d});}});}catch(_0x550ef9){console[_0x129d27(0x10a)](_0x129d27(0x12b),_0x550ef9),_0x243d06('𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖯𝗋𝗈𝗏𝗂𝖽𝖾\x20`𝖳𝗂𝗄𝗍𝗈𝗄\x20𝖴𝗋𝗅`\x20❗');}});function formatFileSize(_0x437e9c){const _0x4f840e=_0x41dfce;if(_0x437e9c===0x0)return _0x4f840e(0x131);const _0x5e5b4e=0x400,_0x2b78b5=[_0x4f840e(0x18f),'KB','MB','GB','TB'],_0x109d21=Math['floor'](Math[_0x4f840e(0x15b)](_0x437e9c)/Math[_0x4f840e(0x15b)](_0x5e5b4e));return parseFloat((_0x437e9c/Math[_0x4f840e(0x11b)](_0x5e5b4e,_0x109d21))['toFixed'](0x2))+'\x20'+_0x2b78b5[_0x109d21];}const MAX_DOWNLOAD_SIZE=0x1f4*0x400*0x400;cmd({'pattern':_0x41dfce(0x11a),'alias':[_0x41dfce(0x105)],'react':_0x41dfce(0x12a),'desc':'Download\x20Google\x20Drive\x20files','category':_0x41dfce(0x11c),'filename':__filename},async(_0x3b91d6,_0x2c5b54,_0x7cd7bc,{from:_0x144c4e,q:_0x5d3ff3,pushname:_0x21b85a})=>{const _0x359d23=_0x41dfce;if(!_0x5d3ff3||!_0x5d3ff3[_0x359d23(0x106)](_0x359d23(0xfa)))return _0x3b91d6[_0x359d23(0x17b)](_0x144c4e,{'text':_0x359d23(0x138)},{'quoted':_0x2c5b54});const _0x28a145=await fetchJson(baseUrl+_0x359d23(0x173)+encodeURIComponent(_0x5d3ff3)),_0x4cec97=_0x28a145[_0x359d23(0x10e)]||_0x28a145,_0x115949=await _0x3b91d6[_0x359d23(0x17b)](_0x144c4e,{'text':_0x359d23(0x12d)+_0x4cec97[_0x359d23(0xdc)]+'\x0a📻\x20𝖥𝗂𝗅𝖾\x20𝖲𝗂𝗓𝖾\x20:\x20'+_0x4cec97[_0x359d23(0xdd)]+_0x359d23(0xcf),'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterName':'👾\x20DILISHA\x20\x20|\x20\x20\x20𝚃𝙴𝙲𝙷\x20ジ','newsletterJid':_0x359d23(0x134)},'externalAdReply':{'title':_0x359d23(0x129),'body':(_0x4cec97[_0x359d23(0xdc)]||_0x4cec97[_0x359d23(0x16a)]||'Undifended')+_0x359d23(0x135),'thumbnailUrl':_0x359d23(0x16d),'sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':_0x2c5b54});try{const _0x4af431=_0x7cd7bc[_0x359d23(0xce)],_0x3c6849=_0x7cd7bc[_0x359d23(0x167)]||![];if(!checkAccess(_0x4af431,_0x3c6849))return blacklistedJIDs[_0x359d23(0xe2)](_0x4af431)?reply(_0x359d23(0xf3)):reply(_0x359d23(0xc1));const _0x10b818=await fetchJson(baseUrl+_0x359d23(0x173)+encodeURIComponent(_0x5d3ff3)),_0x5bf792=_0x10b818[_0x359d23(0x10e)]||_0x10b818,_0x479fd5=_0x5bf792[_0x359d23(0xdd)]||0x0,_0x368127=0x1f4*0x400*0x400;if(_0x479fd5>_0x368127)return await _0x3b91d6[_0x359d23(0x17b)](_0x144c4e,{'text':'⚠️\x20The\x20file\x20size\x20is\x20too\x20large.\x20Maximum\x20allowed\x20size\x20is\x20500\x20MB.\x20The\x20provided\x20file\x20is\x20'+formatFileSize(_0x479fd5)+'.'},{'quoted':_0x2c5b54}),await _0x3b91d6[_0x359d23(0x17b)](_0x144c4e,{'react':{'text':'⚠️','key':_0x2c5b54['key']}});const _0x4e7d16=_0x359d23(0x166);await _0x3b91d6[_0x359d23(0x17b)](_0x144c4e,{'document':{'url':_0x5bf792[_0x359d23(0x11c)]||_0x5bf792[_0x359d23(0x115)]||_0x5bf792[_0x359d23(0xe3)]},'fileName':_0x5bf792[_0x359d23(0xdc)]||_0x5bf792[_0x359d23(0x16a)],'mimetype':_0x5bf792['mimeType']||_0x5bf792[_0x359d23(0xd2)],'caption':_0x4e7d16},{'quoted':_0x2c5b54}),await _0x3b91d6['sendMessage'](_0x144c4e,{'react':{'text':'✅','key':_0x2c5b54[_0x359d23(0xd8)]}});}catch(_0x5d3707){console[_0x359d23(0x10a)](_0x359d23(0xde),_0x5d3707);const _0x309e85=_0x5d3707[_0x359d23(0xe6)]&&_0x5d3707[_0x359d23(0xe6)][_0x359d23(0x113)]===0x194?_0x359d23(0xd3):_0x359d23(0xf9)+_0x5d3707[_0x359d23(0xc8)];await _0x3b91d6['sendMessage'](_0x144c4e,{'text':_0x309e85},{'quoted':_0x2c5b54}),await _0x3b91d6[_0x359d23(0x17b)](_0x144c4e,{'react':{'text':'❌','key':_0x2c5b54[_0x359d23(0xd8)]}});}}),cmd({'pattern':'apkdl','desc':_0x41dfce(0xf8),'category':_0x41dfce(0x11c),'react':'🔎','filename':__filename},async(_0x1ad0b1,_0x1d1e64,_0x34b17e,{from:_0x11ecd8,reply:_0x4c33ff,q:_0x55c4fb,pushname:_0x24364e})=>{const _0x2e8688=_0x41dfce;try{const _0x38c4e8=_0x34b17e['sender'],_0x523ccd=_0x34b17e[_0x2e8688(0x167)]||![];if(!checkAccess(_0x38c4e8,_0x523ccd))return blacklistedJIDs[_0x2e8688(0xe2)](_0x38c4e8)?_0x4c33ff(_0x2e8688(0xf3)):_0x4c33ff(_0x2e8688(0xc1));if(!_0x55c4fb)return _0x4c33ff(_0x2e8688(0x127));const _0x12d666=_0x2e8688(0x111)+_0x55c4fb+'&apikey='+sai,_0x59caea=await axios[_0x2e8688(0x16b)](_0x12d666),_0x58258a=_0x59caea['data'];if(!_0x58258a||!_0x58258a['data'])return _0x4c33ff(_0x2e8688(0x127));const _0x38478c=_0x58258a[_0x2e8688(0x10e)],_0x1e4d9b=_0x38478c['icon'],_0x17614e=_0x38478c[_0x2e8688(0x17a)],_0x44dcdc=_0x38478c[_0x2e8688(0xcb)],_0x589239=_0x38478c[_0x2e8688(0x147)],_0x12a66c=_0x38478c[_0x2e8688(0x158)],_0x45eaa5=_0x38478c[_0x2e8688(0x13a)];await _0x1ad0b1[_0x2e8688(0x17b)](_0x11ecd8,{'image':{'url':_0x1e4d9b},'text':_0x2e8688(0x186)+_0x17614e+'\x0a📻\x20𝖥𝗂𝗅𝖾\x20𝖲𝗂𝗓𝖾\x20:\x20'+_0x12a66c+_0x2e8688(0x168)+_0x589239+_0x2e8688(0x15d),'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterName':_0x2e8688(0x128),'newsletterJid':'120363296605464049@newsletter'},'externalAdReply':{'title':_0x2e8688(0x150),'body':_0x17614e+_0x2e8688(0x182),'thumbnailUrl':_0x38478c[_0x2e8688(0xd6)],'sourceUrl':'','mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':_0x1d1e64});const _0x24f7ad=path[_0x2e8688(0xca)](__dirname,_0x44dcdc+'.apk'),_0x234ae8=await axios({'url':_0x45eaa5,'method':_0x2e8688(0xd4),'responseType':_0x2e8688(0x154)}),_0x1f6519=fs[_0x2e8688(0x175)](_0x24f7ad);_0x234ae8[_0x2e8688(0x10e)][_0x2e8688(0x148)](_0x1f6519),_0x1f6519['on']('error',_0x472ad8=>{const _0x4ec554=_0x2e8688;console['error'](_0x4ec554(0x178)+_0x472ad8[_0x4ec554(0xc8)]),_0x4c33ff('Error:\x20'+_0x472ad8[_0x4ec554(0xc8)]);}),await new Promise((_0x10aa91,_0x189f05)=>{const _0x28c7f3=_0x2e8688;_0x1f6519['on'](_0x28c7f3(0x137),_0x10aa91),_0x1f6519['on'](_0x28c7f3(0x10a),_0x189f05);}),await _0x1ad0b1[_0x2e8688(0x17b)](_0x11ecd8,{'document':{'url':_0x24f7ad},'mimetype':'application/vnd.android.package-archive','fileName':_0x17614e+_0x2e8688(0x116),'caption':_0x2e8688(0xed),'footer':_0x2e8688(0xed)},{'quoted':_0x1d1e64}),fs['unlinkSync'](_0x24f7ad);}catch(_0x57186a){console[_0x2e8688(0x10a)](_0x57186a),_0x4c33ff(_0x2e8688(0xcc)+_0x57186a['message']);}}),cmd({'pattern':'twitter','alias':[_0x41dfce(0x146)],'desc':'download\x20tw\x20videos','category':'download','react':'🔎','filename':__filename},async(_0x364816,_0x45e186,_0x48c8d7,{from:_0x4a2289,quoted:_0x4c923d,body:_0x5b6c20,isCmd:_0x4b08fe,command:_0x239563,args:_0x41aea0,q:_0x68062a,isGroup:_0x2a286c,sender:_0x4639f2,senderNumber:_0x19370f,botNumber2:_0x52162c,botNumber:_0x1ed461,pushname:_0x1f9341,isMe:_0x53aff1,isOwner:_0x14b2d6,groupMetadata:_0x2b1e9f,groupName:_0x1af4a0,participants:_0x4031bb,groupAdmins:_0xc67a45,isBotAdmins:_0x289af1,isAdmins:_0x454953,reply:_0x2638d8})=>{const _0x3f7509=_0x41dfce;try{if(!_0x68062a&&!_0x68062a[_0x3f7509(0x106)]('https://'))return _0x2638d8('𝖯𝗅𝖾𝖺𝗌𝖾\x20𝖦𝗂𝗏𝖾\x20𝖬𝖾\x20𝖳𝗐𝗂𝗍𝗍𝖾𝗋\x20𝖴𝗋𝗅');let _0x36c700=await fetchJson(baseUrl+'/api/twitterdl?url='+_0x68062a);_0x2638d8(_0x3f7509(0x149)),await _0x364816[_0x3f7509(0x17b)](_0x4a2289,{'video':{'url':_0x36c700[_0x3f7509(0x10e)][_0x3f7509(0x10e)]['HD']},'mimetype':'video/mp4','caption':'-\x20HD\x20\x0a\x0a\x20>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20DILISHA\x20ᴛᴇᴄʜ*'},{'quoted':_0x45e186}),await _0x364816[_0x3f7509(0x17b)](_0x4a2289,{'video':{'url':_0x36c700[_0x3f7509(0x10e)][_0x3f7509(0x10e)]['SD']},'mimetype':'video/mp4','caption':_0x3f7509(0x107)},{'quoted':_0x45e186}),await _0x364816[_0x3f7509(0x17b)](_0x4a2289,{'audio':{'url':_0x36c700[_0x3f7509(0x10e)][_0x3f7509(0x10e)]['audio']},'mimetype':_0x3f7509(0x13d)},{'quoted':_0x45e186});}catch(_0x3d9201){console['log'](_0x3d9201),_0x2638d8(''+_0x3d9201);}});
