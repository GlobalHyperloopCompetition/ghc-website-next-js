export default async function contact(values: any) {
    const API_URL = process.env.REACT_APP_API_URL;

    const res = await fetch(`${API_URL}/contact`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
    });

    return res.json();
}