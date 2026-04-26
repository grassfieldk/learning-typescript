import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const normalizeLines = (s: string) =>
  s.split("\n").map((l) => l.trimEnd()).join("\n").replace(/\n+$/, "");

function runCheck(target: string): boolean {
  const tsFile = resolve(root, "src", `${target}.ts`);
  const txtFile = resolve(root, "src", `${target}.txt`);

  if (!existsSync(tsFile)) {
    console.error(`Not found: src/${target}.ts`);
    return false;
  }

  if (!existsSync(txtFile)) {
    console.error(`Not found: src/${target}.txt`);
    return false;
  }

  let actual: string;
  try {
    actual = execSync(`node ${tsFile}`, { encoding: "utf-8" });
  } catch (e: any) {
    console.error(`[${target}] 実行エラー:`);
    console.error(e.stderr ?? e.message);
    return false;
  }

  const expected = readFileSync(txtFile, "utf-8");
  const a = normalizeLines(actual);
  const e = normalizeLines(expected);

  if (a === e) {
    console.log(`[${target}] OK`);
    return true;
  }

  const aLines = a.split("\n");
  const eLines = e.split("\n");
  const maxLen = Math.max(aLines.length, eLines.length);
  console.error(`[${target}] NG — 出力が一致しません:`);
  for (let i = 0; i < maxLen; i++) {
    const al = aLines[i] ?? "(なし)";
    const el = eLines[i] ?? "(なし)";
    if (al !== el) {
      console.error(`  行 ${i + 1}:`);
      console.error(`    期待: ${el}`);
      console.error(`    実際: ${al}`);
    }
  }
  return false;
}

const arg = process.argv[2];

if (arg) {
  if (!runCheck(arg)) process.exit(1);
} else {
  let diffOutput: string;
  try {
    diffOutput = execSync("git diff --name-only HEAD", {
      encoding: "utf-8",
      cwd: root,
    });
  } catch {
    diffOutput = "";
  }

  // ステージング済みの変更も含める
  let diffCached: string;
  try {
    diffCached = execSync("git diff --name-only --cached", {
      encoding: "utf-8",
      cwd: root,
    });
  } catch {
    diffCached = "";
  }

  // 未追跡ファイルも含める
  let untracked: string;
  try {
    untracked = execSync("git ls-files --others --exclude-standard src/", {
      encoding: "utf-8",
      cwd: root,
    });
  } catch {
    untracked = "";
  }

  const changed = [...new Set(
    [...diffOutput.split("\n"), ...diffCached.split("\n"), ...untracked.split("\n")]
      .map((f) => f.trim())
      .filter((f) => f.startsWith("src/") && f.endsWith(".ts"))
      .map((f) => f.replace(/^src\//, "").replace(/\.ts$/, ""))
  )].sort();

  if (changed.length === 0) {
    console.log("変更のある回答ファイルが見つかりませんでした。");
    process.exit(0);
  }

  let allPassed = true;
  for (const target of changed) {
    if (!runCheck(target)) allPassed = false;
  }
  if (!allPassed) process.exit(1);
}
