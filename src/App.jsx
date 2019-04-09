import React, { useContext, useEffect } from 'react';
import Store from './Store';

const EpisodeList = React.lazy(() => import('./EpisodeList'));

const App = () => {
  const { state, dispatch } = useContext(Store);

  const fetchEpisodes = async () => {
    if (state.episodes.length > 0) return false;
    const url =
      'https://api.tvmaze.com/singlesearch/shows?q=futurama&embed=episodes';
    const data = await fetch(url);
    const json = await data.json();
    const action = {
      type: 'FETCH_DATA',
      payload: json._embedded.episodes
    };
    return dispatch(action);
  };

  // useEffect React Hook
  // fetch episodes when page loads (similar to componentDidMount class lifecycle method)
  useEffect(() => {
    fetchEpisodes();
  });

  return (
    <>
      {console.log(state)}
      <header className="header">
        <div>
          <h1>Futurama</h1>
          <p>Pick your favorite episodes</p>
        </div>
        <div>{state.favorites.length} Favorite(s)</div>
      </header>

      <section className="episode-layout">
        <React.Suspense fallback={<div>Loading...</div>}>
          <EpisodeList episodes={state.episodes} favorites={state.favorites} />
        </React.Suspense>
      </section>
    </>
  );
};

export default App;
