exports.run = {
     usage: ['quran', 'soura'],
     use: 'translate',
     category: 'utilities',
     async: async (m, {
          client,
          text,
          isPrefix,
          command
     }) => {
        try {
          if(command === 'quran') {
               const sourat = '1. الفاتحة\n2. البقرة\n3. آل عمران\n4. النساء\n5. المائدة\n6. الأنعام\n7. الأعراف\n8. الأنفال\n9. التوبة\n10. يونس\n11. هود\n12. يوسف\n13. الرعد\n14. إبراهيم\n15. الحجر\n16. النحل\n17. الإسراء\n18. الكهف\n19. مريم\n20. طه\n21. الأنبياء\n22. الحج\n23. المؤمنون\n24. النور\n25. الفرقان\n26. الشعراء\n27. النمل\n28. القصص\n29. العنكبوت\n30. الروم\n31. لقمان\n32. السجدة\n33. الأحزاب\n34. سبأ\n35. فاطر\n36. يس\n37. الصافات\n38. ص\n39. الزمر\n40. غافر\n41. فصلت\n42. الشورى\n43. الزخرف\n44. الدخان\n45. الجاثية\n46. الأحقاف\n47. محمد\n48. الفتح\n49. الحجرات\n50. ق\n51. الذاريات\n52. الطور\n53. النجم\n54. القمر\n55. الرحمن\n56. الواقعة\n57. الحديد\n58. المجادلة\n59. الحشر\n60. الممتحنة\n61. الصف\n62. الجمعة\n63. المنافقون\n64. التغابن\n65. الطلاق\n66. التحريم\n67. الملك\n68. القلم\n69. الحاقة\n70. المعارج\n71. نوح\n72. الجن\n73. المزمل\n74. المدثر\n75. القيامة\n76. الإنسان\n77. المرسلات\n78. النبأ\n79. النازعات\n80. عبس\n81. التكوير\n82. الإنفطار\n83. المطففين\n84. الإنشقاق\n85. البروج\n86. الطارق\n87. الأعلى\n88. الغاشية\n89. الفجر\n90. البلد\n91. الشمس\n92. الليل\n93. الضحى\n94. الشرح\n95. التين\n96. العلق\n97. القدر\n98. البينة\n99. الزلزلة\n100. العاديات\n101. القارعة\n102. التكاثر\n103. العصر\n104. الهمزة\n105. الفيل\n106. قريش\n107. الماعون\n108. الكوثر\n109. الكافرون\n110. النصر\n111. المسد\n112. الإخلاص\n113. الفلق\n114. الناس'  
               await client.reply(m.chat, sourat, m)
               await client.reply(m.chat, 'ارسل \n  /soura 1 \n (الفاتحة)' , m)
               await client.reply(m.chat, ' FOLOW DEVELOPER  ON INSATAGRAM @mo7amedbella' , m)
          }

          if(command === 'soura') {
               let json = await myscraper.quran(text)
               await client.reply(m.chat, 'WAIT ... AND FOLOW MOHAMED BELLA ON INSATAGRAM @mo7amedbella' , m)
               await client.reply(m.chat,json.data.title[0], m)
      
      
               client.sendFile(m.chat, json.data.link[0] , json.data.title[0] + '.mp3', '', m)  
               //client.sendFile(m.chat, json.data.link , 'INSTAGRAM : @wox_bella ', '', m)  
          }

           
        } catch {
           return client.reply(m.chat, global.status.error, m)
        }
     },
     error: false,
     cache: true,
     location: __filename
  }