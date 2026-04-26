// ---- 01: 型アノテーション基礎 ----

// (1) 以下の変数に適切な型アノテーションを付けよ
let username: = "Alice"; // この行を編集
let score: = 100; // この行を編集
let active: = true; // この行を編集

console.log(username, score, active);

// (2) 2 つの数値を受け取り合計を返す関数 add に型アノテーションを付けよ
function add(a, b) { // この行を編集
  return a + b;
}
console.log(add(3, 4));

// (3) 戻り値がない関数 printMessage に型アノテーションを付けよ
function printMessage(message) { // この行を編集
  console.log(message);
}
printMessage("Hello, TypeScript!");

// (4) 変数 value に unknown 型のアノテーションを付け、42 を代入せよ // この行を編集
//     typeof を使って数値であることを確認してから 2 倍した結果を出力せよ
let value = 42;
// ここに追記
