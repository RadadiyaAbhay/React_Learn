import React from 'react'
import { useSelector } from 'react-redux'

function Albums() {
    const {albums} = useSelector(state => state.albumReducer)
  return (
    <ul style={{listStyle : "none"}}>
        {
            albums.map((album)=>{
                return (
                    <li key={album.id} style={{color:"black" , fontWeight:"600"}}>
                        {
                           `${album.id}.   ${album.title}`
                        }
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Albums