import React, { use } from "react";

import PlayerCrad from "./PlayerCrad";

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
}) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="max-w-[1200px] mx-auto my-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playersData.map((player) => (
        <PlayerCrad
          player={player}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
