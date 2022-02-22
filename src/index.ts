import fs from "fs";
import pdfParse from "pdf-parse";
import { PDFParse, Section } from "./types";
import { sectionTitles } from "./utils/sectionTitles";
import { availableAssets } from "./utils/availableAssets";

console.log(availableAssets);

const pdfToJson = async (uri: string) => {
  try {
    const buffer = fs.readFileSync(uri);
    const data: PDFParse = await pdfParse(buffer);

    let progress: string = data.text;
    const sections: Section[] = [];

    for (let i = 0; i < sectionTitles.length; i++) {
      let current: String[] = progress.split(sectionTitles[i + 1]);
      let currContentLength: number =
        current[0].length + sectionTitles[i + 1]?.length;
      progress = progress.substring(currContentLength);

      sections.push(<Section>{
        title: sectionTitles[i],
        content: current[0].trim(),
      });
    }
    delete data.text;
    data.document = sections;
    fs.writeFileSync("./bitcoin.json", JSON.stringify(data, null, 2));
  } catch (err) {
    throw new Error(err);
  }
};

pdfToJson("./bitcoin.pdf");
