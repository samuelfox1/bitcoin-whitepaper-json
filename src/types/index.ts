export interface PDFParsInfo {
  PDFFormatVersion: string;
  IsAcroFormPresent: boolean;
  IsXFAPresent: boolean;
  Creator: string;
  Producer: string;
  CreationDate: string;
}

export interface Section {
  title: string;
  content: string;
}

export interface PDFParse {
  numpages: number;
  numrender: number;
  info: PDFParsInfo;
  metadata: null;
  text?: string;
  version: string;
  document?: Section[];
}
