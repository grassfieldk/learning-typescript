// ---- 01: 型アノテーション基礎 ----

// (1) 以下の変数に適切な型アノテーションを付けよ
let username: = "Alice";
let score: = 100;
let active: = true;

console.log(username, score, active);

// (2) 2 つの数値を受け取り合計を返す関数 add に型アノテーションを付けよ
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

// (3) 戻り値がない関数 printMessage に型アノテーションを付けよ
function printMessage(message) {
  console.log(message);
}
printMessage("Hello, TypeScript!");

// (4) 変数 value に unknown 型のアノテーションを付け、42 を代入せよ
//     typeof を使って数値であることを確認してから 2 倍した結果をコンソールに出力せよ
let value = 42;
