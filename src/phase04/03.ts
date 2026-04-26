// ---- 03: ユーティリティ型 ----

// 以下の interface を使って各問いに答えよ
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// (1) User のすべてのプロパティを省略可能にした型 PartialUser を Partial を使って定義せよ
//     PartialUser 型の変数 u1 に { name: "Taro" } を代入して出力せよ
type PartialUser = ; // この行を編集
const u1: PartialUser = { name: "Taro" };
console.log(u1);

// (2) User から id と name だけを持つ型 UserSummary を Pick を使って定義せよ
//     UserSummary 型の変数 u2 に値を代入して出力せよ
type UserSummary = ; // この行を編集
const u2: UserSummary = ; // この行を編集
console.log(u2);

// (3) User から email と age を除いた型 UserWithoutContact を Omit を使って定義せよ
//     UserWithoutContact 型の変数 u3 に値を代入して出力せよ
type UserWithoutContact = ; // この行を編集
const u3: UserWithoutContact = ; // この行を編集
console.log(u3);

// (4) 以下の関数の戻り値の型を ReturnType を使って取得し、変数の型として使え
function getUser() {
  return { id: 1, name: "Alice" };
}
type GetUserReturn = ; // この行を編集
const u4: GetUserReturn = getUser();
console.log(u4);
