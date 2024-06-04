export default async function login(values: any) {
    const API_URL = process.env.REACT_APP_API_URL;

    const res = await fetch(`${API_URL}/login`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
    });

    return res.json();
}