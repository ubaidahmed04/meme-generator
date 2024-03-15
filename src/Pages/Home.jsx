import React, { useEffect } from 'react'

function Home() {
    const fetchData = ()=>{
        
        useEffect(()=>{
            try{
               const fetching = fetch("https://api.imgflip.com/get_memes")    
                const res = res.json()
                const data = console.log(data)
                    
            }
            catch(error){
                console.log(error)
            }

        },[])
    }
  return (

    <div>
        <button onClick={fetchData}>get data</button>
    </div>
  )
}

export default Home