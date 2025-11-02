import { Suspense, useState } from "react";
import AvailablePlayers from "./Components/AvailablePlayers"
import Navbar from "./Components/Navbar"
import SelectedPlayers from "./Components/SelectedPlayers"
import Loading from "./Components/Loading";

const fetchPlayers = async() => {
    const res = await fetch('/playersData.json');
    return res.json();
  }
const playersPromise = fetchPlayers();

function App() {

  const [toggle,setToggle]= useState(true);
  const [availableBalance, setAvailableBalance] = useState(100000);

  return (
    <>
      <Navbar availableBalance={availableBalance}/>
      <div  className="max-w-[1200px] mx-auto my-10 flex justify-between items-center">
        {
          toggle===true?'Available Players':`Selected Players(${0})`
        }
        <div className="flex items-center">
          <button onClick={()=>{setToggle(true)}} className={`px-3 py-2 rounded-l-xl ${toggle===true?'bg-amber-300':''}`}>
            Available
          </button>
          <button onClick={()=>{setToggle(false)}} className={`px-3 py-2 rounded-r-xl ${toggle===true?"":'bg-amber-300'}`}>
            Selected (<span>0</span>)
          </button>
        </div>
      </div>

      {/* ------------------------------ */}
      {
        toggle===true?<Suspense fallback={<Loading/>}>
        <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise = {playersPromise} />
      </Suspense>:<SelectedPlayers/>
      }
      
      
    </>
  )
}

export default App
