function Movie(props) {
  const { Title: title, Year: year, imdID: id, Type: type, Poster: poster } = props;
  return (
    <>
      <div key={id} className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          {poster === 'N/A' ? (
            <img
              className='activator'
              src={`https://via.placeholder.com/486x700?text=${title}`}
              alt='poster'
            />
          ) : (
            <img className='activator' src={poster} alt='poster' />
          )}
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>{title}</span>
        </div>
        <p>
          {year} <span className='right'>{type}</span>
        </p>
      </div>
    </>
  );
}

export { Movie };
