import express from "express";
import fetch from "node-fetch"; // import 문 사용
import cors from "cors";

const app = express();
const PORT = 3000;
configuration.addAllowedOrigin("http://localhost:3000");
app.use(cors());
app.use(express.json());
app.options("*", cors());
app.post("/generate-text", async (req, res) => {
  const { prompt, max_tokens } = req.body;

  try {
    const response = await fetch(
      "https://api.kakaobrain.com/v1/inference/kogpt/generation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "KakaoAK e166580e904e11b923b48c2162d23ff5",
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: max_tokens,
        }),
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 챗지피티 도움. 추가공부 필요.
