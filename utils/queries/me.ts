export default async function me(token: any) {
    const API_URL = process.env.REACT_APP_API_URL;

    if (!token) {
        return null;
    }

    const response = await fetch(`${API_URL}/me`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ token: token })
    }).then((res) =>
        res.json()
    );

    console.log(response);
    return response;

}