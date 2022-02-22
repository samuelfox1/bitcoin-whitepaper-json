import fs from "fs";
import path from "path";

export const availableAssets: string[] = fs
  .readdirSync("./images")
  .filter((file) => path.extname(file) === ".png")
  .map(
    (file) =>
      `https://github.com/samuelfox1/bitcoin-whitepaper-json/blob/main/images/${file
        .split(" ")
        .join("%20")}`
  );

// [
//   'https://github.com/samuelfox1/bitcoin-whitepaper-json/blob/main/images/10.Privacy.png',
//   'https://github.com/samuelfox1/bitcoin-whitepaper-json/blob/main/images/2.Transactions.png',
//   'https://github.com/samuelfox1/bitcoin-whitepaper-json/blob/main/images/3.Timestamp%20Server.png',
//   'https://github.com/samuelfox1/bitcoin-whitepaper-json/blob/main/images/4.Proof-of-Work.png',
//   'https://github.com/samuelfox1/bitcoin-whitepaper-json/blob/main/images/7.Reclaiming%20Disk%20Space.png',
//   'https://github.com/samuelfox1/bitcoin-whitepaper-json/blob/main/images/8.Simplified%20Payment%20Verification.png',
//   'https://github.com/samuelfox1/bitcoin-whitepaper-json/blob/main/images/9.Combining%20and%20Splitting%20Value.png'
// ]
