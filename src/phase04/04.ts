// ---- 04: 列挙型 ----

// (1) 数値 enum Direction を定義せよ
//     メンバーは North、South、East、West
//     それぞれの値（0, 1, 2, 3）をコンソールに出力せよ
enum Direction {
}


// (2) 文字列 enum Status を定義せよ
//     メンバーは Active（"active"）、Inactive（"inactive"）、Pending（"pending"）
enum Status {
}

function printStatus(status: Status): void {
  // switch で各 status に応じて "Active user" / "Inactive user" / "Pending user" を出力せよ
}

printStatus(Status.Active);
printStatus(Status.Inactive);
printStatus(Status.Pending);

// (3) const enum Color を定義せよ（Red、Green、Blue）
//     Color.Red の値をコンソールに出力せよ
const enum Color {
}

console.log();
