# Learning TypeScript

JavaScript / TypeScript の基本構文を穴埋め形式で学ぶ


## 必要環境

- Node.js v22 以上


## 構成

```
src/
  phase01/   JavaScript 基礎（変数・制御フロー・関数・配列・オブジェクト・クラス）
  phase02/   非同期処理・モジュール
  phase03/   TypeScript 型システム入門
  phase04/   TypeScript 応用
```

各フェーズに以下のファイルがあります。

| ファイル | 内容                           |
| -------- | ------------------------------ |
| `NN.ts`  | 穴埋め問題（編集するファイル） |
| `NN.txt` | 期待する出力                   |
| `NN.md`  | 構文のヒント集                 |


## 進め方

1. `src/phase01/01.ts` を開く
2. コメントの指示に従ってコードを埋める
3. 正誤を確認する（下記参照）
4. OK になったら次のファイルへ


## 正誤確認

```bash
# 特定のファイルを指定して確認
npm run check phase01/01

# 変更したファイルをまとめて確認（git diff ベース）
npm run check
```

出力が期待値と一致すれば `OK`、異なる場合は不一致の行番号と内容が表示されます
