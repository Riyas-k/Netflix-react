import './Banner.css';
import axios  from '../../axios';
import {API_KEY,imageUrl} from '../../Constants/Constant'
import { useEffect, useState } from 'react';

function Banner() {
  const [movie, setMovie] = useState('')
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const data = response.data.results;
      console.log(response.data.results);
      const randomIndex = Math.floor(Math.random()*data.length)
      setMovie(data[randomIndex])
    })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}>
    <div className="content">
        <h1 className="title">{movie.title}</h1>
        <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
        <div className="fade"></div>
    </div>
    </div>
  )
}

export default Banner;
