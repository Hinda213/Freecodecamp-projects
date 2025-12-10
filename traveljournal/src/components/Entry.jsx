export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.src} alt={props.alt} className="main-img" />
      </div>

      <div>
        <img
          src="src/assets/pexel-marker.jpg"
          alt="marker-icon"
          className="marker-icon"
        />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h2>Mount Fuji</h2>
        <p className="date-parag">{props.date} </p>
        <p className="info">{props.info}</p>
      </div>
    </article>
  );
}
