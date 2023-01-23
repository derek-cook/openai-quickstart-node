import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import path from "path";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function handler(req, res) {
  const dir = path.join(process.cwd(), "public");
  console.log("DIR", dir);

  const imgFile = Buffer(dir);

  const response = await openai.createImageVariation(
    fs.createReadStream(dir + "/derek.png"),
    4,
    "512x512"
  );
  console.log("URL: ", response.data.data);
  const images = response.data.data;
  res.status(200).json({ result: images });
}

export default handler;
