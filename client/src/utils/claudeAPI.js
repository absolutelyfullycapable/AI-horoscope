export async function askClaude(name, zodiac) {
  const baseUrl = import.meta.env.VITE_API_URL || "";
  const response = await fetch(`${baseUrl}/api/zodiac`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, zodiac }),
  });

  if (!response.ok) throw new Error("서버 오류");

  const data = await response.json();

  return data.result;
}
