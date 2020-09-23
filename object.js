// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'


{

//Object.keys()を使う
const point = {
x:100,
y:180,
};

//オブジェクトにはforEachが使えないので,Object.keys(point) と表現する
const keys = Object.keys(point);
keys.forEach(key => {
//キーを取得する。 中の値を取得する場合は[]で取得。
console.log(`Key: ${key} Value: ${point[key]}`);
});

const points = [
{x: 30, y: 20},
{x: 10, y: 50},//ここの値を取得したい
{x: 40, y: 40},
];

//結果 50
console.log(points[1].y);

}