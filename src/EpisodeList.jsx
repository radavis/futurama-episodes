import React from 'react';

const EpisodeList = ({ episodes, toggleFavorite, favorites }) => {
  const zeroPad = (number, size = 2) => {
    let result = number.toString();
    while (result.length < size) {
      result = `0${result}`;
    }
    return result;
  };

  const isFavorite = episode => {
    return favorites.find(e => e.id === episode.id);
  };

  const classes = episode => {
    let result = ['episode-box'];
    if (isFavorite(episode)) {
      result.push('episode-favorite');
    }
    return result.join(' ');
  };

  return episodes.map(episode => (
    <section className={classes(episode)} key={episode.id}>
      <img
        src={episode.image.medium}
        alt={`Futurama episode: ${episode.name}`}
      />
      <div>{episode.name}</div>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          S{zeroPad(episode.season)}E{zeroPad(episode.number)}
        </div>
        <button type="button" onClick={() => toggleFavorite(episode)}>
          {isFavorite(episode) ? 'UnFavorite' : 'Add Favorite'}
        </button>
      </section>
    </section>
  ));
};

export default EpisodeList;
