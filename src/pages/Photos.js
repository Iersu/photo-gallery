import React,{useContext} from 'react'
import { Context } from '../Context'
import Image from '../components/Image'
import {getClass} from '../utils/Logic'
function Photos() {
    const {allPhotos} = useContext(Context)
    const photos = allPhotos.map((item,i)=>{
        return <Image key={item.id} img={item} className={getClass(i)}/>
    })
    
    return (
        <main className="photos"> 
            
             
             {photos}

        
        </main>
        
       
    )
}

export default Photos
