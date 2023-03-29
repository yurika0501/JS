// let hello = "Hello World";
// alert(hello);

// let int1 = 1;

// let int2 = -10;

// let float1 = 3.14;

// let str1 = 'JavaScriptを覚えよう';

// alert(int1);
// alert(int2);
// alert(float1);
// alert(str1);

// alert(4 + 3);
// alert(8 - 5);
// alert(2*6);
// alert(10/2);

// alert('Hellow' + 'World');

// if分岐
// let orange = 100;
// let apple = 100;

// if(orange < apple){
//     alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//     alert('みかんとりんごが同じ値段');
// } else {
//     alert('みかんの値段がりんごより高い');
// }

// 繰り返し処理
// let max = 1000;
// let num = 12;
// let count = 0;

// while(num < max){
//     num = num * 10;
//     count = count + 2;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// let i;
// let num = 0;

// for(i = 1;i<11;i++){
//     num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');


// // メイン部分
// let alertString;

// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp");

// //変数の中身をアラートで表示する
// alert(alertString);

// // 作成した関数
// function addString(strA){
//     let addStr = "Hello" + strA;
//     return addStr;
// }

// let promptStr = prompt('何か好きな文字を入力してください。')
// alert(promptStr);

// alert('あなたの選んだ手は' + user_hand + 'です。');



// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// グー、チョキ、パー以外の文字を入れた場合、アラートになる
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
// アラートが表示された際に再入力
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);
if (user_hand != null){
    alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// キャンセルを押した際の挙動
} else {
  alert("またチャレンジしてね")
}
// 結果を表示する

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name  = "グー";
  } else if(js_hand_num == 1){
    hand_name  = "チョキ";
  } else if(js_hand_num == 2){
    hand_name  = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user,js){
    let winLoseStr;
    
    if(user == "グー"){
        if(js == "グー"){
          winLoseStr = "あいこ";
        } else if(js == "チョキ"){
          winLoseStr = "勝ち";
        } else if(js == "パー"){
          winLoseStr = "負け";
        }
    } else if(user == "チョキ"){
        if(js == "グー"){
          winLoseStr = "負け";
        } else if(js == "チョキ"){
          winLoseStr = "あいこ";
        } else if(js == "パー"){
          winLoseStr = "勝ち";
        }
    } else if(user == "パー"){
        if(js == "グー"){
          winLoseStr = "勝ち";
        } else if(js == "チョキ"){
          winLoseStr = "負け";
        } else if(js == "パー"){
          winLoseStr = "あいこ";
        }
    }
    
    return winLoseStr;
}