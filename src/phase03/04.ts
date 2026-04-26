// ---- 04: クラス（TypeScript） ----

// (1) 以下の仕様で BankAccount クラスを作成せよ
//     - owner: string（public）
//     - balance: number（private）、初期値 0
//     - コンストラクタで owner を受け取る
//     - deposit(amount: number): void — balance に amount を加算する
//     - withdraw(amount: number): void — balance が足りない場合は "Insufficient funds" を出力、足りる場合は減算する
//     - getBalance(): number — balance を返す

// (2) 以下のコードが正しく動作するようクラスを実装せよ
const account = new BankAccount("Taro");
account.deposit(1000);
console.log(account.getBalance());
account.withdraw(400);
console.log(account.getBalance());
account.withdraw(700);
console.log(account.getBalance());

// (3) Printable インターフェースを定義せよ（print(): void を持つ）
//     BankAccount が Printable を implements するよう変更し
//     print() は "Account[{owner}]: {balance}" を出力するよう実装せよ
account.print();
