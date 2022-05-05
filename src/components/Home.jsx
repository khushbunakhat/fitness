import React, {useState} from "react";
import profile from "./../images/profile-pic.jpeg";
import styles from "./styles.module.css";
import Video from "./Video";
import Data from "./Data.json"

function Home(){
    const[search,setSearch]=useState("");
    const[video,setVideo]=useState(Data);
    const set=(e)=>{
        let val=e.target.value;
        setSearch(val);
    //console.log(search);  
      const vid=Data.filter((video)=>{
                if(video.Title.includes(search)){
                    return true;
                }
                else{
                    return false;
                }     
                })
            console.log(vid);
               setVideo(vid)
    }
    return(
        <>
        <div>
            <div className={styles.leftBox}>
            <div className={styles.photoBox}>
                <img className={styles.photo}src={profile}alt="profilePic"/>
            </div>
            <div>
                <h1>Khushbu Nakhat</h1>
                <p>I am fitness trainer.My mission is to cut through the noise in the health and fitness industry .</p>
            </div>
            <div className={styles.logo}>
                
                <img width="50px"src="https://cdn-icons-png.flaticon.com/512/174/174857.png"alt="linkedin" />   
            </div>
            <div className={styles.logo}>
                <img width="50px"src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"alt="insta" />    
            </div>

            <div className={styles.logo}>
                <img width="50px"src="https://cdn-icons-png.flaticon.com/512/733/733547.png"alt="facebook" />                
            </div>
            <div className={styles.logo}>
                <img width="50px"height="60px"src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"alt="youtube" />   
            </div>
            </div>
            <div className={styles.rightbox}>
            <label>Search</label>
             <input type="search"value={search}onChange={set}/>
             <Video name={video}/>
               </div>
            </div>
        </>
    )
}
export default Home;