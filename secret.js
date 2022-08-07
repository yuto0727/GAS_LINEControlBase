// DB Sheet ID
var sheet_id = ""

// Admin ID
var userID_admin = ""

// LINE Access Token
var channel_access_token_main = '';
var channel_access_token_admin = '';

// Other data
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
var youbi = ["月", "火", "水", "木", "金"];

function 機能テスト(){
  // テストしたい関数を記述

}

function this_year(){
  var today_data = new Date();
  var this_month = Number(today_data.getMonth()) + 1;
  var this_year = Number(today_data.getFullYear());

  if (this_month <= 3){
    return this_year - 1;
  }else{
    return this_year;
  }
}