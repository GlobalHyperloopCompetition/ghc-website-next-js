// import { useState, useEffect, useMemo } from "react";
// import { useQuery } from "react-query";
// import me from "./queries/me";
// import { useSession } from "next-auth/react";

// const useGetTeam = () => {
//   const [email, setEmail] = useState<string>("");
//   const [team, setTeam] = useState<any>(undefined);
//   const { data: session } = useSession();

//   useEffect(() => {
//     if (session && session.user?.email) {
//       setEmail(session.user.email);
//     }
//   }, [session]);

//   const { data, isLoading, isError } = useQuery(
//     ["me", email],
//     async () => {
//       if (email) {
//         const data = await me(email);
//         setTeam(data.team);
//         return data;
//       }
//       return null;
//     },
//     {
//       enabled: !!email, // Only enable the query if email is set
//       refetchOnWindowFocus: false,
//       refetchOnMount: false,
//     }
//   );

//   const resArray: [any, boolean, boolean] = [team, isLoading, isError];

//   return useMemo<[any, boolean, boolean]>(
//     () => resArray,
//     [resArray]
//   );
// };

// export default useGetTeam;

import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import me from "./queries/me";
import { useSession } from "next-auth/react";

const useGetTeam = () => {
  const [email, setEmail] = useState<string>("");
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user?.email) {
      setEmail(session.user.email);
    }
  }, [session]);

  const { data, isLoading, isError } = useQuery(
    ["me", email],
    () => me(email),
    {
      enabled: !!email, // Only enable the query if email is set
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const team = data?.team;

  return useMemo<[any, boolean, boolean]>(
    () => [team, isLoading, isError],
    [team, isLoading, isError]
  );
};

export default useGetTeam;
