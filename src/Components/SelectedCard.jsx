import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    // console.log(player.playerName)
    // "playerID": 111,
    // "playerImg": "https://i.ibb.co/Jjpt58tT/Litton-Das.jpg",
    // "playerName": "Nurul Hasan",
    // "playerCountry": "Bangladesh",
    // "playerRole": "Wicketkeeper Batsman",
    // "rating": 7.7,
    // "batingStyle": "Right-Hand Bat",
    // "bowlingStyle": "None",
    // "price": 35000

    const handleRemove = ()=>{
        removePlayer(player);
    }
    return (
        <div className='border-2 mt-5 border-gray-300 p-3 flex justify-between items-center rounded-xl'>
            <div className='flex items-center'>
               
                    <img src={player.playerImg} alt="playerName" className='h-[50px] w-[50px] rounded-xl'/>
                    <div className='ml-2'>
                        <h2>{player.playerName}</h2>
                        <p className='text-xs text-slate-500'>{player.playerRole}</p>
                    </div>
            </div>
            <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
                </div>
        </div>
    );
};

export default SelectedCard;