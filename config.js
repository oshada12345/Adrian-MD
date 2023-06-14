const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
    zahwa: 'https://api.zahwazein.xyz'
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
    'https://api.zahwazein.xyz': 'zenzkey_1fb6d1325155'
}
global.lolhuman = 'APOLOZEA'
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'SATHAN'
global.namaowner = 'SATHAN'

//—————「 Setting Owner 」—————//
global.owner = ['94703698781']
global.ownernomer = "94703698781"
global.premium = ['94703698781']
global.ultah = 'Maret 24, 2024'

//—————「 Setting Donasi 」—————//
global.dana = '94703698781'

//—————「 Set Kebutuhan Button 」—————//
global.email = '94703698781.com'
global.namaweb = 'TikTok'
global.myweb = 'https://tiktok.com/@94703698781.am'
global.region = '94703698781'
global.github = 'https://github.com/94703698781'
global.mygc = 'https://chat.whatsapp.com/94703698781'
global.myig = 'https://instagram.com/dryan94703698781pu'

//—————「 Set Wm 」—————//
global.packname = 's t i c k e r by S A T A N\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = 'Fuck You Bitch\nYEEEEEE'

//—————「 Set Nama Session 」—————//
//gausah di apa² ini!
global.sessionName = 'session'

//—————「 Set Prefix 」—————//
//gausah di apa² ini!
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['', '!', '.', '#', '$', ',']

//—————「 Set Simbol 」—————//
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗EKA Hari Whotto',
    admin: '❗moda pco meka adminlata witharai !',
    botAdmin: '❗pco meka group adminta witharai puluwan!',
    owner: '❗meka mage !',
    group: '❗meka group chat ekak modayo !',
    private: '❗private chat witharai !',
    bot: '🤖 Special Features for Bot Number Users!',
    wait: '⏳ Being processed (man eka hadala dennam tikak inna) !',
    endLimit: '🕊️ Your Daily Limit Has Been Expired, The Limit Will Reset Every 12 Hours !',
    error: '🚫 Error feature (hknw) !',
}

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak
global.limitawal = {
    premium: "Infinity",
    free: 999,
}

//—————「 Set Image 」—————//
//global.thumb = 'https://telegra.ph/file/1537b118bad59ab8fa15e.png'
global.thumb = fs.readFileSync('./media/image/adrian.jpg')
global.kurome = { url: 'https://a.uguu.se/faLPPBPP.mp4' }
global.botname = 'Vimukthi Oshada'
global.akulaku = 'Bot By Oshada'
global.ttname = 'ubetta'

//—————「 Set Random Image Menu 」—————//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
