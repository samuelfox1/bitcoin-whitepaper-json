import fs from "fs";
import path from "path";

export const getAvailableAssets = () => {
  const assets = {};
  fs.readdirSync("./images")
    .filter((file) => path.extname(file) === ".png")
    .forEach((file) => {
      const key = file.split(".")[0];
      const value = `https://raw.githubusercontent.com/samuelfox1/bitcoin-whitepaper-json/main/images/${file
        .split(" ")
        .join("%20")}`;
      assets[key] = value;
    });
  return assets;
};
