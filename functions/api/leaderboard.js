// functions/api/leaderboard.js

export async function onRequestGet(context) {
  const resp = await fetch(
    'https://dips-plus-plus.xk.io/map/DeepSlip_1fwwLrYCb7Ku7Tqcl0/leaderboard'
  );
  const data = await resp.json();

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      // now we allow ANY origin to fetch this
      'Access-Control-Allow-Origin': '*'
    }
  });
}
