import React, { createContext, useState } from "react";


export const Kino = createContext();


const KinoContext=({children})=>{
  const [data, setData]=useState([
    {
      id: 1,
      name: 'Qora Beva',
      url: 'https://uzstudio.tv/uploads/posts/2021-06/medium/1624991320_qora-beva-1.jpg',
      type: "comedy",
    },
    {
      id: 2,
      name: 'Shang-chi Legend of the ten rings',
      url: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2021/04/Shang-Chi-Poster-Marvel.jpg',
      type: "comedy",
    },
    {
      id: 3,
      name: 'Mortal Combat',
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/f56710bd-85c3-49b8-9260-2fa8a3d07c01/600x900',
      type: "jangari"
    },
    {
      id: 4,
      name: 'Spiderman, No Way Home',
      url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
      type: "jangari",
    },
    {
      id: 5,
      name: 'Tor Marvel Kino',
      url: 'https://marveldom.ru/wp-content/uploads/2019/09/Chris-Hemsworth-Thor-Art-by-PC-Designs.jpg',
      type: "comedy",
    },
    {
      id: 6,
      name: 'Siderman , Home Coming',
      url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
      type: "jangari"
    },
    {
      id: 7,
      name: 'Avengers',
      url: 'https://www.film.ru/sites/default/files/filefield_paths/https_blogs-images.forbes.com_scottmendelson_files_2019_03_payoff_1-sht_online_v6_domestic_lg-1200x675.jpg',
      type: "uzbek"
    },
    {
      id: 8,
      name: 'Doimiy',
      url: 'https://marvel.com.ru/uploads/images/b494bda820ae8cfa6843e8a6.jpg',
      type: "uzbek"
    },
    {
      id: 9,
      name: 'Home Alone 1',
      url: 'https://www.tvguide.com/a/img/catalog/provider/1/2/1-9441893422.jpg',
      type: "uzbek"
    },
    {
      id: 10,
      name: 'Home Alone 2 , New York Lost in',
      url: 'https://m.media-amazon.com/images/I/91tXzecvy-L._SL1500_.jpg',
      type: "uzbek"
    }
  ])
  return(
    <Kino.Provider value={[data, setData]}>
      {children}
    </Kino.Provider>
  )
}
export default KinoContext