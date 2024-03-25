import React from 'react'
import useMovieTrailer from '../Hooks/useMovieTrailer'
import {useSelector} from 'react-redux'
const VedioBackground = ({movieId}) => {

  const trailerVedio = useSelector((store) => store.movies?.trailerVedio)

  useMovieTrailer(movieId)
  
  return (
    <div className='w-screen'>
      <iframe 
        className='w-screen h-screen aspect-vedio'
        src={"https://www.youtube.com/embed/" + trailerVedio?.key + "?&autoplay=1&mute=1" }
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        
        >
          
        </iframe>
    </div>
  )
}

export default VedioBackground





// {
//   "id": 634492,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Behind-the-Scenes Gag Reel",
//       "key": "ZTycQKub30c",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Bloopers",
//       "official": true,
//       "published_at": "2024-03-16T16:00:55.000Z",
//       "id": "65ff9c7962f335017d520d39"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Extended Preview",
//       "key": "C0_VQWz3b6U",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2024-03-15T19:00:43.000Z",
//       "id": "65fa539d54508d017cf80ac1"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Let Me Drive 32\"",
//       "key": "XBAVUzVmp0Y",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2024-02-15T12:16:05.000Z",
//       "id": "65ce4b3d6c0b36017b8ee518"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In The River 39\"",
//       "key": "xpkF2dPNPro",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2024-02-15T12:16:00.000Z",
//       "id": "65ce4b376c0b36017b8ee50d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Get Off The Train 53\"",
//       "key": "iF-XZi1zHgI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2024-02-15T12:15:56.000Z",
//       "id": "65ce4b266c0b36017b8ee4ef"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Taking it Back to 2003",
//       "key": "yCH902RYjDM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-02-15T01:00:33.000Z",
//       "id": "65ce4b16d7dcd2017c1f3097"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Now In Cinemas",
//       "key": "TpWrL94rgzg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-02-13T23:30:08.000Z",
//       "id": "65ce4b06efcea9017cab0240"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Now In Cinemas",
//       "key": "v-0TsJzgVBs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-02-13T23:00:34.000Z",
//       "id": "65ce4b006c0b36017b8ee4b1"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Now In Cinemas",
//       "key": "IFHR_D-N1kY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-02-13T22:30:04.000Z",
//       "id": "65ce4af8d7dcd201631e5dd1"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Now In Cinemas",
//       "key": "Js77U95TRRs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-02-13T22:00:12.000Z",
//       "id": "65ce4af03123450162ba882b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Vanderpump Rules Do-Over",
//       "key": "Aq_0-qzERr4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-02-12T16:13:01.000Z",
//       "id": "65cbd33b11386c0130510c63"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Powers",
//       "key": "pGfWAJJ7fq8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-02-06T16:00:29.000Z",
//       "id": "65c29f0295acf001831b78ec"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Who is Ezekiel Sims?",
//       "key": "5AOUsJ2J49k",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-01-31T16:32:44.000Z",
//       "id": "65bb7202cffeed0259ac9a71"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas Feb 14",
//       "key": "mvuUlNiwTEE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-01-28T03:30:18.000Z",
//       "id": "65b729b51089ba0164f82038"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas Feb 14",
//       "key": "WvRillnLYg4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-01-28T01:00:13.000Z",
//       "id": "65b729baa0b69000b4cdacde"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas Feb 14",
//       "key": "yNgQcnTydz4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-01-26T10:45:05.000Z",
//       "id": "65b729c90fb17f014733211d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas Feb 14",
//       "key": "VE_OLuCw-Q0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-01-26T09:30:16.000Z",
//       "id": "65b729d08cfcc7017ce5cb14"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas Feb 14",
//       "key": "oCcCKdCey8o",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-01-25T09:00:36.000Z",
//       "id": "65b729dca0b690017bceca9c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas Feb 14",
//       "key": "zHttpkQ5hcE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-01-25T03:30:31.000Z",
//       "id": "65b4fc7558efd30163ca3d37"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas Feb 14",
//       "key": "O7pt8DlPcfM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-01-24T08:00:10.000Z",
//       "id": "65b0c8b08c3159015231f9d2"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Grounded In Reality",
//       "key": "JcNDKy147pA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-01-23T17:00:03.000Z",
//       "id": "65b03cedf8aee800aead0e7e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas Feb 14",
//       "key": "wLqEqFPP940",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-01-23T12:31:02.000Z",
//       "id": "65b0ad92b76cbb01732b5e7b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Who Is Madame Web",
//       "key": "FEzCGJmQ2zg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-01-18T22:00:10.000Z",
//       "id": "65a9a0d7d9542000c6210067"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Vignette – See The Future",
//       "key": "14fHTSf9RK8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-11-15T14:13:05.000Z",
//       "id": "6554dd26ea84c710930068a7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "s_76M4c4LTo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-11-15T14:13:00.000Z",
//       "id": "65550825b5400200ac985d19"
//     }
//   ]
// }