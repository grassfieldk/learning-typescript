// ---- 02: ジェネリクス ----

// (1) 型パラメータ <T> を使って、任意の型の配列を受け取り最初の要素を返すジェネリクス関数 first を作成せよ
//     配列が空の場合は undefined を返す
function first() { // この行を編集
  // ここに追記
}

console.log(first([10, 20, 30]));
console.log(first(["a", "b", "c"]));
console.log(first([]));

// (2) キーと値の型を型パラメータで受け取るジェネリクス型 Pair を定義せよ
//     プロパティは key と value を持つ
type Pair = ; // この行を編集

const p1: Pair<string, number> = { key: "age", value: 30 };
const p2: Pair<number, boolean> = { key: 1, value: true };
console.log(p1.key, p1.value);
console.log(p2.key, p2.value);

// (3) extends { length: number } を使って、length プロパティを持つ型のみを受け付けるジェネリクス関数 getLength を作成せよ
function getLength() { // この行を編集
  // ここに追記
}

console.log(getLength("hello"));
console.log(getLength([1, 2, 3]));
