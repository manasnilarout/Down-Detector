import * as dotenv from 'dotenv';
dotenv.config();

import { askAi } from './aiDeligate/geminiPro.js';

const doIt = async () => {
  const prompt = "Summerize the content in this webpage: https://news.ycombinator.com/item?id=39263664";
  await askAi(prompt);
}

doIt();