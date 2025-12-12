export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div>
        <img className="img-travel" src={props.imageUrl} alt={props.title} />
      </div>

      <div>
        <img className="marker-img" src={props.marker} alt="Marker-Icon" />
        <span>{props.location}</span>
        <a href={props.googleMapsUrl} target="_blank">
          View on Google Maps
        </a>

        <h2>{props.title}</h2>
        <p className="date-parag">
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </article>
  );
}
