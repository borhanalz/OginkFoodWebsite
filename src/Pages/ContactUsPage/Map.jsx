import React from 'react'
import { MapContainer, TileLayer,Marker,Popup,useMap} from 'react-leaflet'
export default function Map() {
  return (
    <>
           <MapContainer center={[35.64627826309763, 51.44466453641881]} zoom={16} scrollWheelZoom={true}>
                       <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                       />
                       <Marker
                        position={[35.64627826309763, 51.44466453641881]}
                        >
                           <Popup minWidth={90}>
                                    Hello
                          </Popup>
                       </Marker>
              </MapContainer>
     </>
  )
}
