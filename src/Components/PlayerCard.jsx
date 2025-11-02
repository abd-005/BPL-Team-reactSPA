import React, { useState } from "react";
import userImg from "../assets/user.png";
import flagImg from "../assets/flag.png";

const PlayerCard = ({ player, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (player) => {
    if (availableBalance < player.price) {
      alert("Insufficient Bal!");
      return;
    }
    setIsSelected(!isSelected);
    setAvailableBalance(availableBalance - player.price);
    setPurchasedPlayers([...purchasedPlayers,player])
  };

  return (
    <div className="card bg-base-100 shadow-lg p-4">
      <figure className="rounded-xl w-full h-70">
        <img
          className="w-full h-70 object-cover "
          src={player.playerImg}
          alt={player.playerName}
        />
      </figure>
      <div className="mt-5">
        <div className="flex gap-2 items-center">
          <img className="w-5 h-5" src={userImg} alt="player" />
          <h2 className="text-xl font-bold">{player.playerName}</h2>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-2 items-center">
            <img className="w-5 h-5" src={flagImg} alt="country" />
            <h2 className="text-sm text-slate-400">{player.playerCountry}</h2>
          </div>
          <div className="card-actions justify-end">
            <button className="btn">{player.playerRole}</button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-2 items-center">
            <p className="font-semibold">Rating:</p>
          </div>
          <div className="card-actions justify-end">
            <p>{player.rating}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2 items-center">
            <p className="font-semibold">{player.batingStyle}</p>
          </div>
          <div className="font-semibold justify-end">
            <p>{player.bowlingStyle}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-2 items-center">
            <p className="font-semibold">Price: ${player.price}</p>
          </div>
          <div className="card-actions justify-end">
            <button
              disabled={isSelected}
              onClick={() => {
                handleSelected(player);
              }}
              className="btn"
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
