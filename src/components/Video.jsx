import React from "react";
import styles from "./styles.module.css";
import ReactPlayer from 'react-player';
import Draggable from "react-draggable";

function Video(props){    
    return(
        <>
          <h1>Yoga-Videos</h1>
          {props.name && props.name.map((video)=>{
              return(
                  <Draggable>
              <div className={styles.videobox} key={video.id} >
                  <ReactPlayer url={video.url} width='100%'
    height='90%'/>
            <p>{video.Title}</p>
              </div>
              </Draggable>
              )
          })}
        </>
    )
}
export default Video;