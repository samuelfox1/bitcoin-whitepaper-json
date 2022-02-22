import fs from "fs";
import pdfParse from "pdf-parse";

const sectionTitles: string[] = [
  "Title",
  "Abstract.",
  "1.Introduction",
  "2.Transactions",
  "3.Timestamp Server",
  "4.Proof-of-Work",
  "5.Network",
  "6.Incentive",
  "7.Reclaiming Disk Space",
  "8.Simplified Payment Verification",
  "9.Combining and Splitting Value",
  "10.Privacy",
  "11.Calculations",
  "12.Conclusion",
  "References",
];

const pdfToJson = async (uri: string) => {
  const buffer = fs.readFileSync(uri);
  try {
    const data = await pdfParse(buffer);

    let progress = data.text;
    const sections = [];

    for (let i = 0; i < sectionTitles.length; i++) {
      let current = progress.split(sectionTitles[i + 1]);
      let currContentLength = current[0].length + sectionTitles[i + 1]?.length;
      progress = progress.substring(currContentLength);

      sections.push({
        title: sectionTitles[i],
        content: current[0].trim(),
      });
    }
    data.text = sections;

    fs.writeFileSync("./bitcoin.json", JSON.stringify(data, null, 2));
  } catch (err) {
    throw new Error(err);
  }
};

pdfToJson("./bitcoin.pdf");
