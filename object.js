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

  //オブジェクトを操作する
  const otherProps = {
    r: 4,
    color: 'red',
  };

  const point = {
    x: 100,
    y: 180,
    //スプレッド構文で新しいオブジェクトを追加する
    ...otherProps,
  };
  //console.log(point);
  //結果  {x: 100, y: 180, r: 4, color: "red"}

  //xとyを定数として扱う
  const {
    x,
    r,
    ...others
  } = point;
  console.log(x);
  console.log(r);
  console.log(others);
  //結果
  // {y: 180, color: "red"}
  // color: "red"
  // y: 180
  // __proto__: Object


}