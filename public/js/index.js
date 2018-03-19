let botui = new BotUI('chat');
let yourmusic = "";

// playBot()

function playBot(){
  botui.message.add({
    content: 'How are you?'
    
}).then(function () {
    return botui.action.button({
        action: [
            {
                text: 'I am Good!',
                value: 'i_am_good!'
            },
            {
                text: 'I am tired...',
                value: 'I_am_tired...',
            }
        ]
    });
}).then(function(res){
   if(res.value === 'i_am_good!'){
       test();
       botui.message.add({
           delay: 900,
           loading: true,
           content: 'Glad to hear that!'
        });
    }else{
        botui.message.add({
            delay: 900,
            loading: true,
            content: 'Oh...![cat shock image](cat_shock.jpg)'
        });
    }
}).then(function (res) {
  return botui.message.bot({
    delay: 2000,
    content: 'Do you wanna me tell what you did today?'
  }).then(function () {
    return botui.action.button({
        action: [
            {
                text: 'Yes',
                value: 'yes'
            },
            {
                text: 'No',
                value: 'no'
            }
        ]
    }).then(function(res){
        if(res.value == 'yes') {
            return botui.action.text({
                delay: 1000,
                action: {
                  placeholder: 'Enter here!'
                }
            }).then(function (res) {
              return botui.message.add({
                  delay: 500,
                  content: 'Oh You did ' + res.value + '. Well done!![cat wink image](cat_wink.jpg)'
                });
            });
        } else {
            return botui.message.add({
               delay: 800,
               loading: true,
               content: 'Ok. Have a rest![cat relax image](cat_relax.jpg)The following is my recommended music for you.'
            }).then(function(res){
                     return botui.message.add({
                      delay: 1200,
                      type:'embed',
                      content: yourmusic
                     })
            })

        }
    });
  });
});
}


let test = function relaxmusic(){

  let request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: "music+relax",
            maxResults: 20,
            order: "viewCount",
       }); 

       // execute the request
       request.execute(function(response) {
          let rannum = Math.floor(Math.random() * 21)
console.log(response);
console.log("rannum:" + rannum);
          let mymusic = response.items[rannum].id.videoId;
console.log("mymusic:" + mymusic);

          pass(mymusic);
       });
}



function init() {
    gapi.client.setApiKey("AIzaSyB54gHFoCICkOQZ-lcdc1m1jVi-EW3NNOc");
    gapi.client.load("youtube", "v3", function() {
    });
} 


function pass(mymusic) {
    yourmusic = "https://www.youtube.com/embed/" + mymusic;
    console.log("yourmusic: " + yourmusic);
}
