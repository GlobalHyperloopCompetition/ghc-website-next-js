
import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import me from "./queries/me";

const useGetTeam = () => {
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        setToken(localStorage.getItem("qid") || "");
    }, [token]);

    const { data, isLoading, isError } = useQuery(
        ["me", token],
        async () => {
            const data = await me(token!);
            return data;
        },
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        }
    );

    const team: any = data?.team;

    const resArray: any = [team, isLoading, isError];

    return useMemo<any>(() => resArray, [resArray, token]);
};

export default useGetTeam;