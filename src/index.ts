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

<<<<<<< HEAD
const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);
// SECRET=Hello node dist/index.jsで変わる

=======
// const secret = process.env.SECRET ?? "default";
// console.log(`secretは${secret}です`);
// // SECRET=Hello node dist/index.jsで変わる

// import { createInterface } from "node:readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("コマンドを入力してください：", (name) => {
//   switch (name) {
//     case "greet":
//       console.log("こんにちは");
//       break;
//     case "cat":
//       console.log("あなたは猫派？");
//       break;
//     default:
//       console.log(`コマンド${name}を認識できませんでした`);
//   }
//   rl.close();
// });

// let sum = 0;
// let i = 1;
// while (i <= 100) {
//   sum += i;
//   i++;
// }
// console.log(sum); //5050

// let sum = 0;
// let i = 1;
// while (true) {
//   if (i > 100) {
//     break;
//   }
//   sum += i;
//   i++;
// }//無限ループを止める

<<<<<<< HEAD
let i = 1;
while (i <= 100) {
  i++;
  if (i % 2 === 1) {
    //偶数のときだけ
    continue; //whileに戻る
  }
<<<<<<< HEAD
  rl.close();
});
>>>>>>> 31267d5 (2026/01/04 switch文)
=======
  console.log(i);
}
>>>>>>> 52bfa30 (while文のループ)
=======
// let i = 1;
// while (i <= 100) {
//   i++;
//   if (i % 2 === 1) {
//     //偶数のときだけ
//     continue; //whileに戻る
//   }
//   console.log(i);
// }

let sum = 0;
for (let i: number = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); //5050
>>>>>>> 24a37e9 (2026/01/04 for文)
