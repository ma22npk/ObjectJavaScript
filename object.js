// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'


{
//オブジェクトを作ってみる
//今までの配列は複数の値に順番をつけてまとめたもの。
//値に名前をつけて管理することができるオブジェクトについて学ぶ
//const point = [100, 180];


//結果 = {x: 100, y: 180}
//y:180,
//全体をプロパティ（メンバー）,
//x: 部分を名前（キー）
//180の部分を値と呼ぶ
const point = {
x:100, 
y:180, 
};

//値の変更のしかた
point.x = 120;

//オブジェクトの操作をする
//アクセスしたい場合
// console.log(point.x);//結果120
// console.log(point['y']);//結果180

//プロパティを追加する
point.z = 90;
//プロパティを削除する
delete point.y;
console.log(point);

}