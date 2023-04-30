/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect,useState } from 'react';
import axios from '../../axios';
import { imageUrl,API_KEY } from '../../Constants/Constant';
import Youtube from 'react-youtube';
import './Rowpost.css'

function Rowpost(props) {
  const [poster, setPoster] = useState([]);
  const [id,setId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setPoster(response.data.results)
      // console.log(poster,'poster');
    }).catch((err)=>{
      alert(err)
    })
  },[])
  const opts ={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1
    }
  }
  const handleMovie =(id)=>{
    //  console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data);
      if(response.data.results.length!==0){
        setId(response.data.results[0])
      }else{
        console.log('Empty Array');
      }
    })
  }
  return (
    <div className='row'>
      <p className='title'>{props.name}</p>
          <div className="posters">
      {
        poster.map((data,index)=>{
          return (
        <img onClick={()=>handleMovie(data.id)} key={index} className={props.isSmall ? 'poster':'small-poster'} src={ imageUrl+data.backdrop_path} alt="poster" />

          )
        })
      }
      </div>
    { id &&  <Youtube opts={opts} videoId={id.key} />  }
     
    </div>
  )
}

export default Rowpost;
