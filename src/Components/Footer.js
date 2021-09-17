import React from 'react'
import styles from "./Footer.module.css"


export default function Footer() {
    return (
        <div className={`${styles.footerdesign} p-5`}>
    <div className="row">
        <div className="col-md-4">
            <h4>Mahender Singh Dhoni.Club</h4>
            <p className={styles.captain}>Former Indian captain</p>
<div className="mt-5">
<i style={{fontSize:"3vw"}} className={`${ styles.footermobiletext} fab fa-facebook-square me-3`}></i>
            <i style={{fontSize:"3vw"}} className={`${ styles.footermobiletext} fab fa-instagram-square  me-3`} ></i>
            
            <i style={{fontSize:"3vw"}} className={`${ styles.footermobiletext} fab fa-linkedin me-3`} ></i>
            <i style={{fontSize:"3vw"}} className={`${ styles.footermobiletext} fab fa-twitter-square me-3`} ></i>
            </div>
        </div>
        <div className={`${ styles.mobilework} col-md-4 text-left `}>
            <h6 className="mt-3">About : Inspirational journey</h6>
            <h6 className="mt-3">M.S Dhoni : The untold Story</h6>
            <h6 className="mt-3">Captain</h6>
            <h6 className="mt-3">LeaderShip</h6>
            <h6 className="mt-3">Terms and conditions</h6>
            
        </div>

        {/* <div className="col-md-1"></div> */}
        <div className={`${ styles.mobilework} col-md-4  `}>
            <form>
  <div class="mb-3">
  <h5>  <label for="exampleInputEmail1" class="form-label">Get Latest News</label></h5>
    <input type="email" placeholder="Your Email Address" className={`${ styles.inputDesigning} form-control`} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
</form>
           
        </div>
    </div>

    <hr className={styles.shrStyling}></hr>
    <div className={styles.marginend} style={{lineHeight:"0.8"}}>
        <p className={`${styles.captain} ${styles.mobileworkcentering}`} >@copyright:2021.All right reseve <span style={{fontSize:"1.2vw"}} className={`${styles.footername } float-end`}> Mahender Singh Dhoni</span></p>
        <p className={`${styles.captain} ${styles.mobileworkcentering}`} >Never Give Up</p>  
        </div>
        <div className="me-end">
            <p></p>
           
        </div>
        </div>
    )
}
