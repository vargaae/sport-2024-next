"use client";

import { matchesType } from "@/app/types";
import React, { useState } from "react";

const Status = ({
  matchesList,
  matchesListFinished,
}: {
  matchesList: matchesType[];
  matchesListFinished: matchesType[];
}) => {
  const [statusMatch, setStatusMatch] = useState<string>("TODAY");

  return (
    <div>
      {matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "FINISHED" && (
                  <>
                    <div>
                      <h2 className="font-bold">
                        {matches?.homeTeam?.name}- {matches?.awayTeam?.name}{" "}
                      </h2>
                      <h5>
                        ( {matches?.status} - {matches?.utcDate} )
                      </h5>
                    </div>
                  </>
                )}
              </div>
            ))
        }
    </div>
  );
};

export default Status;
