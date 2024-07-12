export default async function me(email: string) {
  if (!email) {
    return null;
  }

  const response = await fetch(`/api/user/${email}`, {
    method: "GET",
  }).then((res) => res.json());

  console.log(response);
  return response;
}
