import './cards.css'
import RenderApi from '../components/api.jsx'

function RenderCard({ characters }) {
    console.log(characters);
    const locationUrl = RenderApi("https://rickandmortyapi.com/api/location/3");
    console.log(locationUrl);
  return (
    <>
      <div className="main-container">
        {characters &&
          characters.results?.map((data) => (
            <div key={data.id} className="container">
              <div className="container1">
                <img src={data.image} alt="imagen" />
              </div>
              <div className="container2">
                <p>{data.name}</p>
                <span className='main-span'><span className={`circle-status ${data.status == "Alive" ? 'green' : data.status == "unknown" ? 'yellow' : 'red'}`}></span>{data.status} - {data.species}</span>
                <span className='main-span'>Last known location</span>
                <a className="known-location" href={data.location.url}>{data.location.name}</a>             
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default RenderCard;
