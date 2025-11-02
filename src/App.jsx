import { Suspense, use, useState } from "react";
import AvailablePlayers from "./Components/AvailablePlayers";
import Navbar from "./Components/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers";
import Loading from "./Components/Loading";

const fetchPlayers = async () => {
  const res = await fetch("/playersData.json");
  return res.json();
};
const playersPromise = fetchPlayers();



function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  
  const removePlayer = (p) => {
    console.log(purchasedPlayers);
    const remainedPlayer = purchasedPlayers.filter(player => player.playerID!==p.playerID);
    setPurchasedPlayers(remainedPlayer);
    setAvailableBalance(availableBalance + p.price);
  }
  const playersData = use(playersPromise);


  return (
    <>
      <Navbar availableBalance={availableBalance} />
      <div className="max-w-[1200px] mx-auto my-10 flex justify-between items-center">
        {toggle === true ? "Available Players" : `Selected Players(${purchasedPlayers.length}/${playersData.length})`}
        <div className="flex items-center">
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={`px-3 py-2 rounded-l-xl ${
              toggle === true ? "bg-amber-300" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className={`px-3 py-2 rounded-r-xl ${
              toggle === true ? "" : "bg-amber-300"
            }`}
          >
            Selected (<span>{purchasedPlayers.length}</span>)
          </button>
        </div>
      </div>

      {/* ------------------------------ */}
      {toggle === true ? (
        <Suspense fallback={<Loading />}>
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          />
        </Suspense>
      ) : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers} removePlayer={removePlayer} />
      )}
    </>
  );
}

export default App;
