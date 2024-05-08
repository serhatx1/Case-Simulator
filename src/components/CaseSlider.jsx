import React, { useEffect, useState } from 'react'
import data from "../json/.js"
import up from "../assets/up.png"
export const CaseSlider = () => {
  const [object, setObject] = useState(data);
  const [skinsArr, setskinsArr] = useState();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [shows, setShows] = useState(1);

  const slideInterval = (val) => {
    if (val >= 90 && val < 100) {
      setTimeout(() => {
          setShows(val+1)
          slideInterval(val + 1);
      }, 60);
  }
    else if (val >= 80 && val < 90) {
        setTimeout(() => {
          setShows(val+1)
            setCurrentIndex(val + 1);
            slideInterval(val + 1);
        }, 100);
    }
     else if (val >= 50 && val < 80) {
        setTimeout(() => {
            setCurrentIndex(val + 1);
            setShows(val+1)
            slideInterval(val + 1);
        }, 25);
    }
    else if (val < 50) {
        setTimeout(() => {
            setCurrentIndex(val + 1);
            setShows(val+1)

            slideInterval(val + 1);
        }, 10); 
    }
};

useEffect(()=>{slideInterval(0)},[])














  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  const shuffle = ()=>{
    const arr=[]
    for(let i =0;i<object.length;i++){
      arr.push(Array(data[i].percent*1).fill(data[i]).flat())
      
    }
    
    setskinsArr(shuffleArray(arr.flat()))
  }
  useEffect(()=>{
shuffle()
  },[])
  const changeColor = (color) => {
        switch (color) {
            case 'purple':
                return 'bg-purple-600';
            case 'gray':
                return 'bg-gray-600';
            case 'red':
                return 'bg-red-600';
            case 'yellow':
                return 'bg-yellow-600';
            default:
                return '';
        }
  }
  return (
    <div className='relative border-2 border-black flex justify-center items-center p-1'>
    <div className='flex w-[1000px]   items-center  overflow-hidden h-full relative '>

    
    <div  style={{ transform: `translateX(-${currentIndex *200}px)` }} className='flex transition-transform duration-300 ease justify-center items-center h-48 '>
      
      {skinsArr&&(
        
        skinsArr.map((thread,i)=>(
          <div key={i}  className=''>
            <div className='container flex'>
            <div className='bg-transparent relative w-[200px] h-48 '>
            <img src={thread.img} alt="" className=''/>
            <div className={`flex ${changeColor(thread.bg)} w-full h-12 absolute text-white font-bold top-100 left-0`}>
              {thread.name}
            </div>
            </div>
            </div>
            
          </div>
        )))
      }
      
    </div>
    <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0'><img src={up} className='w-8' alt="" /></div>

    
    </div>
      <div className='flex items-center justify-center  mt-20'>
        {shows==100?(
        
        <div className='w-1/2 absolute left-1/2 transform -translate-x-1/2  bg-slate-200 contain p-4  border-2 border-black'>
          <div className='flex justify-center text-center text-xl font-bold'>{skinsArr[currentIndex+2].name}</div>

          <img className='w-full' src={skinsArr[currentIndex+2].img} alt="" />
          <div className='flex items-center justify-between mt-2'>
            <button class="bg-red-500 hover:bg-red-700 w-1/2 h-12 text-white font-bold py-2 px-4 border border-red-700 rounded">Sell for {skinsArr[currentIndex+2].cost}</button>

            <button class="bg-blue-500 ml-2 hover:bg-blue-700 w-1/2 h-12 text-white font-bold text-center py-2 px-4 border border-blue-700 rounded">Send to invontery</button>

            
            </div>


          
        </div>
        
        
        
        
        
    ):""}
        
        
        
        </div>

    </div>
  )
}
