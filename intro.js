var welcome1 = {
  type: 'html-keyboard-response',
  stimulus:'<p class="top0"><br>研究にご参加いただきありがとうございます。'+
  '<br>実験に要する時間は40分程度です。'+
  '<br>このサイトではキー操作と時間を計測しています。'+
  '<br>Wifi接続や電源が途中で切れないようご準備ください。'+
  '<br>実験ではキーボードを使用します。</p>'+
  '<p>よろしければキーボードの[↓]を押してください</p>',
  choices:['ArrowDown'],
  data: {test_part: 'welcome1'}
};
var welcome2 = {
  type: 'html-keyboard-response',
  stimulus:
  '<p class="top0">実験は1人で静かな環境で行ってください。'+
  '<br>この実験では音声やマイクを使用しませんが、音楽を聞きながら参加しないでください。'+
  '<br>実験中にメモを取ってはいけません。'+
  '<br>実験中は外部と連絡を取ったり検索したりしないでください。'+
  '<br>気が散らないようにPC等の通知などは切っておいてください。</p>'+
  '<p>よろしければキーボードの[↓]を押してください</p>',
  choices:['ArrowDown'],
  data: {test_part: 'welcome2'}
};
var fullscreen = {
  type: 'fullscreen',
  message: '<p class="top0">下のボタンをクリックすると，全画面表示に切り替わります。'+
  '<br>このサイトでは、邪魔にならない様に一定時間経過するとカーソルを隠す設定にしています。カーソルは動かすと再度表示されます。'+
  '<br>実験終了まで全画面モードを解除しないでください。'+
  '<br>実験を途中で辞退したい場合は[Esc]を押してウィンドウを閉じてください。</p>',
  button_label: "全画面表示に切り替え",
  fullscreen_mode: true,
  data: {test_part: 'fullscreen'}
};
var intro_operation0 = {
  type: 'html-keyboard-response',
  stimulus: '<p class="top0">画面反射による映り込みをできるだけ少なくなるよう調整してください。</p>'+
  '<p>部屋はできるだけ明るくしてください。'+
  '<br>画面と目の距離は40cm以上離して一定にして姿勢を正してください。</p>'+
  '<p>よろしければ[↓]を押してください。</p>',
  choices:['ArrowDown'],
  data: {test_part: 'intro_operation0'}
};
var intro_operation1 = {
  type: 'html-keyboard-response',
  stimulus: '<p class="top0">これからシナリオを読んで質問に答える課題を行って頂きます。'+
  '<br>キーボードの矢印キー[←][↓][→]を使用します。'+
  '<br>[↓]を押すと次の文が表示されます。'+
  '<br>それぞれの文章は一度しか表示されません。'+
  '<br>シナリオが表示される前に、注視点として「＋」が短い間だけ表示されます。'+
  '<br>シナリオの最後の文章は質問です。</p>'+
  '<p>内容を理解したら[↓]を押してください。</p>',
  choices:['ArrowDown'],
  data: {test_part: 'intro_operation1'}
};
var intro_operation2 = {
  type: 'html-keyboard-response',
  stimulus: '<p class="top0">質問には'+
  '<br>「はい」の場合は[←]、'+
  '<br>「いいえ」の場合は[→]'+
  '<br>を押して答えてください。'+
  '<br>必ずどちらか選択して答えてください。'+
  '<br>時間制限はありませんが、できるだけすばやく正確に答えてください。</p>'+
  '<p>内容を理解したら[↓]を押してください。</p>',
  choices:['ArrowDown'],
  data: {test_part: 'intro_operation2'}
};
var intro_operation3 = {
  type: 'html-keyboard-response',
  stimulus: '<p class="top0">姿勢を正してください。'+
  '<br>キーボードの[←]と[→]に両手の人差し指をそれぞれ軽く置いて構えてください。'+
  '<br>キーは長押しせず、軽く押したらすぐ離すようにしてください。'+
  '<br>シナリオは自分のペースで読み進めてください。</p>'+
  '<p>練習パートを始めます。'+
  '<br>よろしければ[↓]を押してください。</p>',
  choices:['ArrowDown'],
  data: {test_part: 'intro_operation3'}
};
var instruction_main0 = {
  type: 'html-keyboard-response',
  stimulus: '<p class="top0">練習パートは終了です。</p>'+
  '<p>***操作確認***'+
  '<br>次へ：[↓]　　はい：[←]　　いいえ：[→]'+
  '<br>質問には必ずどちらか選択して答えてください。'+
  '<br>本番パートでは矢印キーの案内は表示されません。</p>'+
  '<p>よろしければ[↓]を押してください。</p>',
  choices:['ArrowDown'],
  data: {test_part: 'instruction_main0'}
}
var instruction_main1 = {
  type: 'html-keyboard-response',
  stimulus: '<p class="top0">それでは本番パートです。</p>'+
  '<p>時間制限はありませんが、できるだけすばやく正確に答えてください。'+
  '<br>キーは長押しせず、軽く押したらすぐ離すようにしてください。'+
  '<br>姿勢を正し、キーボードの[←]と[→]に両手の人差し指をそれぞれ軽く置いて構えてください。'+
  '<p>[↓]を押すと開始します。</p>',
  choices:['ArrowDown'],
  data: {test_part: 'instruction_main1'}
}
var end_message = {
  type: 'html-keyboard-response',
  stimulus: '<p class = "top0">これで実験を終了します。</p>'+
  '<p>研究にご協力頂きありがとうございました。'+
  '<br>実験データが確認でき次第、メールにて謝金支払いをご案内します。</p>'+
  '<p>[スペース]を押して実験サイトを閉じます。'+
  '<br>[スペース]を押した後、画面が暗転しますので[Ecs]を押して全画面モードを解除した後、ウィンドウを閉じてください。</p>',
  choices:[' '],
  data: {test_part: 'end_message'}
 }
