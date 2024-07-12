import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import me from "./queries/me";
import { useSession } from "next-auth/react";

const useGetTeam = () => {
  const [email, setEmail] = useState<string>("");
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setEmail(session.user?.email!);
    }
  }, [session]);

  const { data, isLoading, isError } = useQuery(
    ["me", email],
    async () => {
      const data = await me(email!);
      return data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const team: any = data?.team;

  const resArray: any = [team, isLoading, isError];

  return useMemo<any>(() => resArray, [resArray, email, isLoading, isError, team]);
};

export default useGetTeam;
