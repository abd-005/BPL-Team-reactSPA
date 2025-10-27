import { Suspense } from "react";
import AvailablePlayers from "./Components/AvailablePlayers"
import Navbar from "./Components/Navbar"
import SelectedPlayers from "./Components/SelectedPlayers"
import Loading from "./Components/Loading";

const fetchPlayers = async() => {
    const res = await fetch('/playersData.json');
    return res.json();
  }

function App() {

  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar/>
      <Suspense fallback={<Loading/>}>
        <AvailablePlayers playersPromise = {playersPromise} />
      </Suspense>
      {/* <SelectedPlayers/> */}
    </>
  )
}

export default App
