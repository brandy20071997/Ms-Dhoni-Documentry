import React from 'react'
import styles from "./Header.module.css"

export default function Navbar() {
    return (
        <div>
            <nav class={`${styles.NavbarStyling} navbar navbar-expand-lg navbar-light `}>
  <div className={`${styles.headingmob} container`}>
    <a className={`${styles.navtext} navbar-brand `} href="#">Mahender Singh Dhoni</a>
    <button style={{backgroundColor:"white"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item">
          <a className={`${styles.navmenu} nav-link active`} aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a className={`${styles.navmenu} nav-link active`} aria-current="page" href="#">Movie</a>
        </li>
        <li class="nav-item">
          <a className={`${styles.navmenu} nav-link active`} aria-current="page" href="#">Career</a>
        </li>
        <li class="nav-item">
          <a className={`${styles.navmenu} nav-link active`} aria-current="page" href="#">Captain</a>
        </li>
        <li class="nav-item">
          <a className={`${styles.navmenu} nav-link active`} aria-current="page" href="#">Training</a>
        </li>
       
       
       
       
      </ul>
      <form class="d-flex">
    <button   class="btn btn-outline-secondary" type="submit"> <a href="#formSection">Join Us </a></button>
      </form>
   
    </div>
  </div>
</nav>
        </div>
    )
}
