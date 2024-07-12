export default async function signup(values: any) {
  console.log(JSON.stringify(values));

  const res = await fetch(`/api/register`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(values),
  });

  return res.json();
}
