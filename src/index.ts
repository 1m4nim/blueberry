const message:string="Hello World";


console.log(message)

//2.3プリミティブ型
// const width1 = 5;
// const width2 = 8;
// const height: number = 3;
// const area = ((width1 + width2) * height) / 2;
// console.log(area);

// import { createInterface } from "readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("文字列を入力してください：", (line: string) => {
//   console.log(`${line}が入力されました`);
//   rl.close();
// });

// import { createInterface } from "node:readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("数値を入力してください：", (line) => {
//   const num = Number(line);
//   console.log(num + 1000);
//   rl.close();
// });

// import { createInterface } from "node:readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("名前を入力してください：", (name: string) => {
//   const displayName = name || "名無し";
//   console.log(`こんにちは。${displayName}さん！`);
//   rl.close();
// });

const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);
// SECRET=Hello node dist/index.jsで変わる

