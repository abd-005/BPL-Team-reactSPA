import React, { use } from "react";
import userImg from "../assets/user.png";
import flagImg from "../assets/flag.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="max-w-[1200px] mx-auto my-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playersData.map((player) => (
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
                <h2 className="text-sm text-slate-400">
                  {player.playerCountry}
                </h2>
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
                <p className="font-semibold">
                  Price: ${player.price}
                </p>
               
              </div>
              <div className="card-actions justify-end">
                <button className="btn">Choose Player</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
