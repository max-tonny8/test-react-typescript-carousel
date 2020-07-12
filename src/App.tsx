import React, { useEffect, useState } from 'react';
import './App.css';

import PeopleAroundYou from './containers/people-around-you';
import Featured from './containers/featured';

// Service imported
import { loadDataService } from './services/loadDataService';
import { Places } from './interfaces/places.interface';

function App() {
  const [peoplesAroundYou, setPeopleAroundYou] = useState([]);
  const [searchedPlaces, setSearchPlaces] = useState([]);
  const [featuredPlaces, setFeaturedPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function fetchDetails() {
      await loadDataService
        .loadPeopleAroundYou()
        .then((d) => {
          setPeopleAroundYou(d.data);
          setSearchPlaces(d.data);
        })
        .catch((e) => {
          setPeopleAroundYou([]);
        });
      await loadDataService
        .loadFeatured()
        .then((d) => {
          setFeaturedPlaces(d.data);
        })
        .catch((e) => {
          setFeaturedPlaces([]);
        });
      setLoading(false);
    }

    // Execute the created function directly
    fetchDetails();
  }, []);

  const searchHandler = (e: any) => {
    const val = e.target.value;
    if (val.length > 0) {
      const filteredPlaces = peoplesAroundYou.filter((place: Places) =>
        place?.title?.toLowerCase().includes(val)
      );
      setSearchPlaces(filteredPlaces);
    } else {
      setSearchPlaces(peoplesAroundYou);
    }
  };

  return (
    <div className="popular">
      <div className="popular__container">
        <div className="popular__search">
          <input
            type="text"
            placeholder="Search for..."
            onChange={(e) => searchHandler(e)}
          />
        </div>

        <div className="popular__content">
          {searchedPlaces.length > 0 && !loading ? (
            <PeopleAroundYou {...{ peopleAround: searchedPlaces }} />
          ) : searchedPlaces.length === 0 && !loading ? (
            <p> No Data found</p>
          ) : (
            <p>Loading ....</p>
          )}

          {featuredPlaces.length > 0 && !loading ? (
            <Featured {...{ featured: featuredPlaces }} />
          ) : featuredPlaces.length === 0 && !loading ? (
            <p> No Data found</p>
          ) : (
            <p>Loading ....</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
