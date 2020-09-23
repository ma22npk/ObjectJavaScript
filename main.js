// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{
// 配列の基本生成 ===========================
// const score1 = 80;
// const score2 = 90;
// const score3 = 40;

// const scores = [80, 90, 40, 70];
// spliceで配列を変更 ===========================
// a.splice()
// splice(変化が開始する位置, 削除数, 追加する要素, 追加する要素,・・・・ )
// scores.splice(1, 2, 40, 50);
// 結果 = 配列の中の90,40が削除され、40と50が追加される。

// 配列の要素にアクセス ===========================
// []のなかに何番目の要素か入力
//console.log(scores[1]);

// 要素の配列を書き換える
//結果 = 44
// scores[2] = 44;
// console.log(scores);

//配列の中の要素数を取得
//結果3
// console.log(scores.length);

// 配列とループ処理の組み合わせ ===========================
// //結果 = Score: 80
// console.log(`Score: ${scores[0]}`);
// //結果 = Score: 90
// console.log(`Score: ${scores[1]}`);
// //結果 = Score: 40
// console.log(`Score: ${scores[2]}`);

//ループ処理でiが0から3未満(scoresの数だけ)の間1ずつ増やしながら次の処理をする.
//結果 = 上と同じ
// for (let i = 0; i < scores.length; i++) {
//   console.log(`Score: ${scores[i]}`);
// }

// 配列の要素を変更 ===========================
//unshift() 配列の先頭を追加
//shift() 配列の先頭を削除
//push() 配列の末尾を追加 (*一番使うのはpush)
//pop() 配列の末尾を削除

//スプレッド構文を学ぶ
const otherScores = [10, 20];
//... と記述することで配列の中に別の配列を展開する
const scores = [80, 90, 40, 70, ...otherScores];

function sum(a, b) {
console.log(a + b);
}

//結果 = 30
sum(...otherScores)

// 結果 = 末尾に 60, 50が追加される
// scores.push(60, 50);
// for (let i = 0; i < scores.length; i++) {
//   console.log(`Score: ${scores[i]}`);
// }

}
