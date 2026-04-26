// ---- 03: 型エイリアスと Union 型 ----

// (1) type を使って Direction 型を定義せよ
//     値は "north" | "south" | "east" | "west" のいずれか
// ここに追記

const dir: Direction = "north";
console.log(dir);

// (2) type を使って StringOrNumber 型を定義せよ（string または number）
//     変数 val1 に 42、val2 に "hello" を代入して出力せよ
// ここに追記
let val1: StringOrNumber = ; // この行を編集
let val2: StringOrNumber = ; // この行を編集
console.log(val1, val2);

// (3) 以下の Shape 型（判別可能 Union）を完成させよ
//     Circle: kind "circle"、radius: number
//     Rectangle: kind "rectangle"、width: number、height: number
type Shape = ; // この行を編集

function getArea(shape: Shape): number {
  // ここに追記
}

console.log(getArea({ kind: "circle", radius: 5 }));
console.log(getArea({ kind: "rectangle", width: 4, height: 6 }));
