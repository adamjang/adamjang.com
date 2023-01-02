
import React from 'react';
import Header from '../../components/Header';

import locations from './locations'

import placeholderImage from './thumbnails/2022-south-korea.jpg'


function Travel() {
  return (
    <div>
      <Header />
      <div className="mx-auto 2xl:max-w-screen-2xl sm:max-w-screen-xl bg-white p-2 md:p-4">
        <h1 className="text-5xl font-bold text-center mb-8 font-serif">
          Travel
        </h1>
        {
          locations.map((group, groupIndex) => (
            <div key={groupIndex.toString()} className="mb-8 md:mb-12">
              <h2 className="text-3xl font-serif font-semibold mb-4">{group.year}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 xl:gap-8">
                {group.places && group.places.map((place, placeIndex) => !place.hidden && (
                  <div key={placeIndex.toString()} className="relative">
                    <div className="aspect-w-3 aspect-h-4 bg-zinc-900 text-white relative">
                      {place.thumbnail && <img className="object-cover" src={place.thumbnail || placeholderImage} />}
                    </div>
                    <div className="absolute bottom-0 p-4 text-white bg-gradient-to-t from-zinc-900 to-transparent w-full">
                      <h3 className="mt-2 text-xl">{place.country}</h3>
                      <h4 className="text-md">{place.month || 'January'}, {place.year || group.year}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Travel
