function _text(text){
  var data = {
    'type': 'text',
    'text': text
  };
  return data;
}

function _confirm(title, textA, labelA, textB, labelB) {
  var contents = {
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "size": "lg",
        "text": title,
        "wrap": true
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "horizontal",
    "spacing": "sm",
    "contents": [
      {
        "type": "button",
        "action": {
          "type": "message",
          "label": labelA,
          "text": textA
        },
        "style": "secondary"
      },
      {
        "type": "button",
        "action": {
          "type": "message",
          "label": labelB,
          "text": textB
        },
        "style": "secondary"
      }
    ],
    "flex": 0
  }
}


  var data = {
      "type": "flex",
      "altText": title,
      "contents": contents,
        "styles": {
          "footer": {
            "separator": true
          }
        }
      }
  
  return data;
}

function _otherMenu(altText, a, b, c){
  var contents = {
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": a,
              "text": a
            },
            "margin": "none"
          }
        ],
        "borderWidth": "medium",
        "borderColor": "#1e90ff",
        "cornerRadius": "md",
        "margin": "none"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": b,
              "text": b
            },
            "margin": "none"
          }
        ],
        "backgroundColor": "#ffffff",
        "borderWidth": "medium",
        "borderColor": "#1e90ff",
        "cornerRadius": "md",
        "margin": "md"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": c,
              "text": c
            },
            "margin": "none"
          }
        ],
        "backgroundColor": "#ffffff",
        "borderWidth": "medium",
        "borderColor": "#1e90ff",
        "cornerRadius": "md",
        "margin": "md"
      }
    ]
  }
}
  var data = {
      "type": "flex",
      "altText": altText,
      "contents": contents,
        "styles": {
          "footer": {
            "separator": true
          }
        }
      }
  
  return data;
}

function _flex(flex_data, altText) {
  
  var data = {
      "type": "flex",
      "altText": altText,
      "contents": flex_data,
        "styles": {
          "footer": {
            "separator": true
          }
        }
      }

  return data;
}

function makeBox(layout, margin, contents){
  var content = {
                  "type": "box",
                  "layout": layout,
                  "margin": margin,
                  "contents": contents
                };
  return content;
}

function makeBox_DoAction(layout, margin, contents, actionText){
  var content = {
                  "type": "box",
                  "layout": layout,
                  "margin": margin,
                  "contents": contents,
                  "action": {
                            "type": "message",
                            "label": "action",
                            "text": actionText
                            }
                };
  return content;
}

function makeText(text, size, weight, color, flex, margin){
  var content = {
                  "type": "text",
                  "text": text,
                  "weight": weight,
                  "size": size,
                  "color": color,
                  "flex": flex,
                  "gravity": "center",
                  "margin": margin
                };
  return content;
}

function makeSeparetor(margin){
  var content = {
                  "type": "separator",
                  "margin": margin
                };
  return content;
}

function sendMessage(databody, tokenId, method="multicast", account="main") {
  var url_multicast = "https://api.line.me/v2/bot/message/multicast";
  var url_reply = "https://api.line.me/v2/bot/message/reply";

  if (method == "multicast"){
    var url = url_multicast
    if (account == "main"){
      var headers = {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + channel_access_token_main
      };
    }else if(account == "admin"){
      var headers = {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + channel_access_token_admin
      };
    };
    var postData = {
      "to": tokenId,
      "messages": databody
    };
  }else if(method == "reply"){
    var url = url_reply
    if (account == "main"){
      var headers = {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + channel_access_token_main
      };
    }else if(account == "admin"){
      var headers = {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + channel_access_token_admin
      };
    };
    var postData = {
      "replyToken": tokenId,
      "messages": databody
    };
  };

  var options = {
    "method": "POST",
    "headers": headers,
    "muteHttpExceptions" : false,
    "payload": JSON.stringify(postData)
  };
  return UrlFetchApp.fetch(url, options);
}