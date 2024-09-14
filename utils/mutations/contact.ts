export default async function contact(values: any) {
  const res = await fetch(`/api/contact`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(values),
  });

  return res.json();
}
