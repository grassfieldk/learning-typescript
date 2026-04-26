// ---- 01: 型ガードと narrowing ----

// (1) 引数に string または number を受け取り
//     string なら文字数を、number なら 2 倍の値を返す関数 process を作成せよ
//     typeof を使って型を判別すること
function process(value: string | number): number {
  // ここに追記
}

console.log(process("hello"));
console.log(process(21));

// (2) 型述語（value is string 形式の戻り値型）を使って、型ガード関数 isString を作成せよ
//     isString は引数が string かどうかを判定する
function isString(value: unknown): { // この行を編集
  // ここに追記
}

const inputs: unknown[] = ["TypeScript", 42, true, "hello"];
for (const input of inputs) {
  if (isString(input)) {
    console.log(input.toUpperCase());
  }
}

// (3) 以下の型 Cat と Dog に対して、in を使って型を判別し鳴き声を出力する関数 speak を作成せよ
type Cat = { meow: string };
type Dog = { bark: string };

function speak(animal: Cat | Dog): void {
  // ここに追記
}

speak({ meow: "Nyaa" });
speak({ bark: "Woof" });
