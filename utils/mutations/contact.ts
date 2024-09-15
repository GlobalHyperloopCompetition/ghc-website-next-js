export default async function POST(req:Request) {
    try {
      const { name, email, message } = await req.json();
  
      console.log("Received message:", { name, email, message });
  
      return new Response(JSON.stringify({ message: "Message sent!" }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error: unknown) {
        if (error instanceof Error) {
          return new Response(
            JSON.stringify({ message: "An error occurred", error: error.message }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
        }
      
        return new Response(
          JSON.stringify({ message: "An unexpected error occurred" }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
      }
      
  }
  