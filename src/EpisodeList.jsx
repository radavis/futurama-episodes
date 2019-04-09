import React from 'react';
import Episode from './Episode';

const EpisodeList = ({ episodes, favorites }) => {
  const isFavorite = episodeId => {
    return favorites.find(id => id === episodeId);
  };

  return episodes.map(episode => (
    <Episode
      data={episode}
      favorite={isFavorite(episode.id)}
      key={episode.id}
    />
  ));
};

export default EpisodeList;
