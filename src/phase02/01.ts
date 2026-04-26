// ---- 01: 非同期処理 ----

// (1) 1 秒後に "done" という文字列で resolve する Promise を返す関数 wait を作成せよ
//     wait() の結果をコンソールに出力せよ


// (2) fetch を使い https://jsonplaceholder.typicode.com/todos/1 から JSON を取得し
//     title プロパティの値をコンソールに出力せよ


// (3) 存在しない URL https://jsonplaceholder.typicode.com/todos/99999 に fetch し
//     レスポンスの ok が false であれば "Not Found" をコンソールに出力せよ
//     ネットワークエラーは catch で "Network Error" を出力して処理せよ
