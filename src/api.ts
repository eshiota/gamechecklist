const apiKey = "47c1cb2f54db836153c5958bbe5b9678181f1949";

export async function getGames<GetGamesResponse>({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) {
  const res = await fetch(
    `https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&sort=name:asc&limit=${limit}&offset=${
      page * limit
    }`
  );
  return await res.json();
}
