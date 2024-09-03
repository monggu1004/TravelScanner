fetch("http://localhost:3000/generate-text", {
  // 로컬 서버의 엔드포인트로 변경
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: "입력한 문장을 긍정 또는 부정으로 분류합니다.",
    max_tokens: 100,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

//챗지피티 복습.
