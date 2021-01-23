const KEY = config.DISCORD
console.log(KEY);

function sendMessage() {
  var request = new XMLHttpRequest()
  request.open('POST', `https://discordapp.com/api/webhooks/${KEY}`)

  request.setRequestHeader('Content-type', 'application/json')

  var params = {
    username: 'Captain Hook',
    avatar_url: '',
    content: 'Hi from JS app',
  }
  request.send(JSON.stringify(params))
}

console.log(sendMessage);
