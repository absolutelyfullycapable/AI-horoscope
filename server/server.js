import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const app = express();
app.use(express.json());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://askstars.vercel.app"
        : "http://localhost:5173",
  }),
);

app.post("/api/zodiac", async (req, res) => {
  const { name, zodiac } = req.body;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `이름: ${name}
별자리: ${zodiac}

위 정보를 바탕으로 이 사람의 오늘 별자리 운세를 알려 줘.
아래 형식에 맞춰 정확히 작성해 주되 다른 말은 덧붙이지 말고 온점 기준으로 줄바꿈 해 줘.
말투는 친근하고 따뜻하게 부탁해.

오늘의 별자리 운세는 이름을 자연스럽게 포함해서 제목 형식이나 강조 표시 없이 간결하게 운세 내용만 최대 세 문장 이내로 적어 줘.
인식할 수 없는 말은 하지 말고 반말로 부탁해.

(오늘의 별자리 운세)
🍀 (구체적인 물건으로 한 가지만 적고 그 뒤에 조사 '을'이나 '를' 둘 중 하나를 알맞게 넣어 줘) 챙겨 봐!`,
          },
        ],
      }),
    });

    const data = await response.json();
    res.json({ result: data.content[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "운세를 불러오지 못했어 T.T" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`서버 실행 중 : ${PORT}`));
