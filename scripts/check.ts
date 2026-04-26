import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const target = process.argv[2];
if (!target) {
  console.error("Usage: npm run check <phase01/01>");
  process.exit(1);
}

const tsFile = resolve(root, "src", `${target}.ts`);
const txtFile = resolve(root, "src", `${target}.txt`);

if (!existsSync(tsFile)) {
  console.error(`Not found: src/${target}.ts`);
  process.exit(1);
}

if (!existsSync(txtFile)) {
  console.error(`Not found: src/${target}.txt`);
  process.exit(1);
}

let actual: string;
try {
  actual = execSync(`node ${tsFile}`, { encoding: "utf-8" });
} catch (e: any) {
  console.error("実行エラー:");
  console.error(e.stderr ?? e.message);
  process.exit(1);
}

const expected = readFileSync(txtFile, "utf-8");

const normalizeLines = (s: string) =>
  s.split("\n").map((l) => l.trimEnd()).join("\n").replace(/\n+$/, "");

const a = normalizeLines(actual);
const e = normalizeLines(expected);

if (a === e) {
  console.log("OK");
} else {
  const aLines = a.split("\n");
  const eLines = e.split("\n");
  const maxLen = Math.max(aLines.length, eLines.length);
  let hasDiff = false;
  for (let i = 0; i < maxLen; i++) {
    const al = aLines[i] ?? "(なし)";
    const el = eLines[i] ?? "(なし)";
    if (al !== el) {
      if (!hasDiff) {
        console.error("NG — 出力が一致しません:");
        hasDiff = true;
      }
      console.error(`  行 ${i + 1}:`);
      console.error(`    期待: ${el}`);
      console.error(`    実際: ${al}`);
    }
  }
  process.exit(1);
}
