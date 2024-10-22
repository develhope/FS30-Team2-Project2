import {
  MapContainer,
  TileLayer,
  useMap,
} from 'react-leaflet'


const MapandCalendar = () => {

  return (
    <>
      <div className='app'>
        <h2>Mappa Interattiva</h2>

        <div className='map'>
          <MapContainer center={[0.0, 0.0]} zoom={10}>

            <TileLayer

              url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </MapContainer>

        </div>
      </div >
    </>
  )
}
export default MapandCalendar
