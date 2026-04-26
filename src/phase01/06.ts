// ---- 06: クラス ----

// (1) Animal クラスを作成せよ
//     - コンストラクタで name（文字列）と sound（文字列）を受け取りフィールドに保存すること
//     - speak() メソッドを持ち、"{name} says {sound}!" を出力すること

// (2) Animal を継承した Dog クラスを作成せよ
//     - コンストラクタで name のみを受け取り、sound は "Woof" 固定とすること
//     - fetch() メソッドを追加し、"{name} fetches the ball!" を出力すること

// (3) 以下のコードが正しく動作するよう上のクラスを実装せよ
const cat = new Animal("Cat", "Meow");
cat.speak();

const dog = new Dog("Rex");
dog.speak();
dog.fetch();
