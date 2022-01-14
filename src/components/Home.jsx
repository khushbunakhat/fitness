import React from "react";
import profile from "./../images/profile-pic.jpeg";
import styles from "./styles.module.css";
import Video from "./Video";


function Home(){
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
        <Video/>
            </div>
        </div>
    
        </>
    )
}
export default Home;