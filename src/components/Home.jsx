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
                <img width="50px"src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"alt="insta" />    
            </div>

            <div className={styles.logo}>
          
                <img width="50px"src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1642161886~hmac=460359cbef4dca255cd815dc990f0a87"alt="facebook" />
                
            </div>

            <div className={styles.logo}>
               
                <img width="50px"src="https://cdn-icons.flaticon.com/png/512/3938/premium/3938026.png?token=exp=1642161729~hmac=d5e4a2155c8c8eea2204c174fea1e3b6"alt="youtube" />
                
            </div>

            <div className={styles.logo}>
                
                <img width="50px"src="https://cdn-icons-png.flaticon.com/512/174/174857.png"alt="linkedin" />
                
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