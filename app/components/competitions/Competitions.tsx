import { getMatchesFootball, getMatchesFootballFinished } from "@/app/api";

import { matchesType } from "@/app/types";

// import { footballApi, useGetCompetitionsQuery, useGetMatchesAllQuery } from "../../api/football/route";
// import { useDispatch } from "react-redux";

// import React, { useState } from "react";
// import "./competitions.styles.scss";
// import { Link } from "react-router-dom";
// import LinearProgress from "@mui/material/LinearProgress";
import Link from "next/link";
import Status from "../status/Status";
// import { useState } from "react";

export default async function Competitions() {
  // const dispatch = useDispatch();
  // const {
  //   data: matchesList,
  //   isFetching,
  //   error,
  //   refetch,
  // } = useGetMatchesAllQuery();

  const getDatas = await getMatchesFootball();
  const getDatasFinished = await getMatchesFootballFinished();

  const matchesDatas = getDatas?.matches;
  const matchesDatasFinished = getDatasFinished?.matches;
  //   // Avaible Competitions' data -> FREE TIER: fetch football-data.org API
  //   // -> features/Api/competitions.json -> filter data-> "plan": "TIER_ONE"

  // const [count, setCount] = useState(0);
  // console.log(matchesList)

  // if (error) {
  //   const timer = setTimeout(() => {
  //     setCount("Timeout called!");
  //     console.log("fetch API Error, Refetch in 15s");
  //     refetch();
  //   }, 15000);
  //   return () => clearTimeout(timer);
  // }

  //   if (error)
  //     return (
  //       <div>
  //         <button onClick={handleRefetchOne}>Force re-fetch 1</button>
  //         <button onClick={handleRefetchTwo}>Force re-fetch 2</button>
  //       </div>
  //     );

  //   function handleRefetchOne() {
  //     // force re-fetches the data
  //     refetch();
  //   }

  //   function handleRefetchTwo() {
  //     // has the same effect as `refetch` for the associated query
  //     dispatch(
  //       footballApi.endpoints.getCompetitions.initiate(
  //         { count: 5 },
  //         { subscribe: false, forceRefetch: true }
  //       )
  //     );
  //   }

  //   if (isFetching) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className="root">
      <div className="container">
        <h2>Available Competitions</h2>
        <Status
          matchesList={matchesDatas}
          matchesListFinished={matchesDatasFinished}
        />

        {/* {competitions?.competitions.map(
          (league) => {
            return (
              <div key={league.id}>
                <div className="competitionlist">
                  <span>{league?.name}</span>
                </div>
              </div>
            );
          }
        )} */}
      </div>
      <div className="codelist">
        <h2>Available Competitions Code List</h2>
        <img height="15px" width="20px" src="" /> | WC | FIFA World Cup
        <br />
        <img height="15px" width="20px" src="" /> | CL | UEFA Champions League
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
        />{" "}
        | BL1 | Bundesliga
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
        />{" "}
        | DED | Eredivisie
        <br />
        <img height="15px" width="20px" src="" /> | BSA | Campeonato Brasileiro
        Série A
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
        />{" "}
        | PD | Primera Division
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
        />{" "}
        | FL1 | Ligue 1
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
        />{" "}
        | ELC | Championship
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
        />{" "}
        | PPL | Primeira Liga
        <br />
        <img height="15px" width="20px" src="" /> | EC | European Championship
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
        />{" "}
        | SA | Serie A
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
        />{" "}
        | PL | Premier League
        <br />
        <img height="15px" width="20px" src="" /> | CLI | Copa Libertadores
      </div>
    </div>
  );
}
