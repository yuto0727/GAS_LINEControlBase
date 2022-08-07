function doPost(e) {
  var webhookData = JSON.parse(e.postData.contents).events[0];
  var type = webhookData.type;
  var replyToken = webhookData.replyToken;
  var userID = webhookData.source.userId;

  // --------------------------------------------------------------------------------------------
  // メンテナンス時切り離し
  // var Maintenance ＝true;に変更
  var Maintenance = false;
  // --------------------------------------------------------------------------------------------
  
  // 友達追加時
  if (type == "follow"){
    // ここに処理を記述

  }

  // ブロック時
  if (type == "unfollow"){
    // ここに処理を記述

  }

  // メッセージ受信時
  if (type == "message"){
    var message = webhookData.message.text;

    if (Maintenance && userID !== userID_admin){
      sendMessage([_text("現在メンテナンス中です。")], replyToken, method="reply");
      return;
    }else{
      // ここに処理を記述

    };
  };
};