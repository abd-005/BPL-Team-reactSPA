import React, { use } from "react";

import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="max-w-[1200px] mx-auto my-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playersData.map((player) => (
        <PlayerCard
          player={player}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
