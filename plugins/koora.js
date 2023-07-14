exports.run = {
     usage: ['koora'],
     use: 'translate',
     category: 'utilities',
     async: async (m, {
          client,
          text,
          isPrefix,
          command
     }) => {
        try {
          if(command === 'koora') {
               let json = await myscraper.koora()
               console.log(json.data.right_team.lenght)
               client.reply(m.chat, ` ${json.data.right_team[1]}`)
               // await  client.reply(m.chat, `📅 ${json.data.date}`)
               // for (var i = 1 ; i < json.data.team_home.length ; i++) {
               //      await  client.reply(m.chat, `*${json.data.team_home[i]}*  _${json.data.vs_score[i]}_  *${json.data.team_away[i]}* `)
               // }
          }

          // if(command === 'soura') {
          //      let json = await myscraper.quran(text)
          //      await client.reply(m.chat, 'WAIT ... AND FOLOW MOHAMED BELLA ON INSATAGRAM @mo7amedbella' , m)
          //      await client.reply(m.chat,json.data.title[0], m)
      
      
          //      client.sendFile(m.chat, json.data.link[0] , json.data.title[0] + '.mp3', '', m)  
          //      //client.sendFile(m.chat, json.data.link , 'INSTAGRAM : @wox_bella ', '', m)  
          // }

           
        } catch {
           return client.reply(m.chat, global.status.error, m)
        }
     },
     error: false,
     cache: true,
     location: __filename
  }