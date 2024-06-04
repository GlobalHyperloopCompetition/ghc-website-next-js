export default async function signup(values: any) {
    const API_URL = process.env.REACT_APP_API_URL;
    console.log(JSON.stringify(values))

    const res = await fetch(`${API_URL}/register`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
    });

    return res.json();
}