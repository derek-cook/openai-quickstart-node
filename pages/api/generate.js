import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.create({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.animal),
    temperature: 1,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt() {
  return `Generate two words, an adjective followed by a noun.
  
  Result: nimble brick
  Result: accused yeti
  Result: fickle hero
  Result: blue rancher
  Result: `;
}
