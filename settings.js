//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['201288455338'] //ur owner number
global.ownername = "Youssef Al Soltan" //ur owner name
global.ytname = "YT: Youssef-AlSoltan" //ur yt chanel name
global.socialm = "Insta: @1y._.o2" //ur github or insta name
global.location = "Egypt, Al Behera, Kafr Al dwar" //ur location

//bot bomdy 
global.owner = ['201288455338']
global.ownertag = '201288455338' //ur tag number
global.botname = 'بوت السلطان|bot alsoltan' //ur bot name
global.linkz = "https://youtube.com/channel/UCf57gAihG_YlH7Rj-gbKuHA" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/channel/UCf57gAihG_YlH7Rj-gbKuHA" //ur website to be displayed
global.botscript = '+201288455338' //script link
global.reactmoji = "😎" //ur menu react emoji
global.themeemoji = "😍" //ur theme emoji
global.packname = "By Youssef Al Soltan" //ur sticker watermark packname
global.author = "By @201288455338" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['201288455338'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'تم ✓',
    admin: 'هذه الميزة للمشرف فقط!',
    botAdmin: 'يجب أن يكون البوت مسؤولاً أولاً!',
    owner: 'هذه الميزة للمالك فقط!',
    group: 'لميزة تستخدم فقط للمجموعات!',
    private: 'الميزاة المستخدمة فقط للدردشة الخاصة!',
    bot: 'هذه الميزة مخصصة للبوت فقط',
    wait: 'تحت المعالجة...',
    linkm: 'أين الرابط?',
    error: 'خطأ!!',
    endLimit: 'الحد اليومي الخاص بك قد انتهى، سيتم إعادة تعيين الحد كل 12 ساعة',
    ban: 'لقد تم منعك من قبل المالك، إذا كنت تريد أن تكون غير محظور، تحدث الي صاحب البوت.',
    nsfw: 'لم يتم تنشيط ميزة nsfw، يرجى الاتصال بصاحب البوت للتنشيط',
    banChat: 'عذرآ عزيزي البوت تم منعه من الاستخدام في هذه المجموعه يرجي التحدث الي صاحب البوت للاستخدام'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
