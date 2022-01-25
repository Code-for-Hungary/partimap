import Head from 'next/head'
import MapBase from '../components/MapBase'
import partyPolygons from '../data/partyPolygons.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Partymap</title>
        <meta name="description" content="Partymap alkalmazás" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MapBase
          center={{
            lat: 47.50277,
            lng: 19.07303
          }}
          zoom={15}
          // mapId="85b71dbefa7b82fa"
        >
          {partyPolygons.features.map(({ geometry }) => (
            <MapBase.Polygon
              geometry={geometry}
              options={{
                fillOpacity: .08,
                strokeColor: '#22119955'
              }}
            />
          ))}
        </MapBase>
      </main>
    </div>
  )
}
