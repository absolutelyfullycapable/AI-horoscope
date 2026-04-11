export async function askClaude(name, zodiac) {
  const response = await fetch("/api/zodiac", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, zodiac }),
  });

  if (!response.ok) throw new Error("서버 오류");

  const data = await response.json();

  return data.result;
}
