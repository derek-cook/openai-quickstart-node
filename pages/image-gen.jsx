import Head from "next/head";
import { useState } from "react";

export default function ImageGen() {
  const [images, setImages] = useState([]);

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/imgGen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setImages(data.result);
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main>
        <img src="/derek.png" />
        <form onSubmit={onSubmit}>
          {/* <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          /> */}
          <input type="submit" value="Generate image" />
        </form>
        {images.map((image) => (
          <img key={image.url} src={image.url} alt="derek variation" />
        ))}
      </main>
    </div>
  );
}
