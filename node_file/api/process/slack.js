const Slack = require('slack-node');
const schedule = require('node-schedule');
apiToken = process.env.SLACK_TOKENN||'xoxb-1681676332260-1898489415761-OfwgYkD5gdIL9ubsHzOnB03I';
var slack = new Slack(apiToken);

  module.exports = {
    send : async(message) => {
        slack.api('chat.postMessage', {
            username: 'logger0',  // 슬랙에 표시될 봇이름
            text: message,
            channel: '#log',  // 메시지가 전송될 채널              
          }, function(err, response){
            console.log(response);
          });
      }
  }
