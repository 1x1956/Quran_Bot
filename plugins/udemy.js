exports.run = {
     usage: ['udemy' , 'udemy2'],
     use: 'translate',
     category: 'utilities',
     async: async (m, {
          client,
          text,
          isPrefix,
          command
     }) => {
        try {
          if(command === 'udemy') {
               let json = await myscraper.udemy(text)
                client.reply(m.chat,'wait ') 
               for (var i = 0 ; i < json.data.course_link.length ; i++) {

                    const course_desciption = ` \n
                    Course Title : \n *${json.data.course_title[i]}* \n 
                    Course link : \n ${json.data.course_link[i]} \n`

                   await client.sendFile(m.chat, json.data.course_image[i] , json.data.course_image[i] , course_desciption, m)
               }
          }


          if(command === 'udemy2') {
               let json = await myscraper.udemy2(text)
               let links = json.data.download_links
                    //client.reply(m.chat,json.data.download_links, m)
                    let msg = '';

               for (let i = 0; i < links.length; i++) {
                    msg += `\n\n Part : ${i + 1}\n ${links[i]} ==========`;
                  }

          
             await  client.reply(m.chat,msg) 
             await  client.sendFile(m.chat, json.data.course_image[1] ,'', '', m)  

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

