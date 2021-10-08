import React, { useContext } from 'react'
import { Context } from '../Context'

function Favorites() {
  const { favPhotos, removeFav, toggleFavorite } = useContext(Context)
  return (
    <div className="favorites">
      {favPhotos.length > 0 ? (
        <div className="fav-container">
          {favPhotos.map((item) => (
            <div
              className="fav-image"
              onClick={() => {
                removeFav(item.id)
                toggleFavorite(item.id)
              }}
              key={item.id}
            >
              <img src={item.url} />
              <div className="remove-fav">
                <p>remove</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="fav-title">
          Sorry, you don't have any favourite pictures yet.
        </h1>
      )}
    </div>
  )
}

export default Favorites
