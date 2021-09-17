import React,{useState} from 'react'


import Header from "./Header"
import one from "../assets/1.jpg"
import two from "../assets/2.jpg"
import three from "../assets/3.jpg"
import Footer from './Footer'
import Card from './UI/Card'
import styles from "./Home.module.css"
import t20 from "../assets/t20.jpg"
import odi2 from "../assets/odi2.jpg"
import test from "../assets/test.jpg"
import Youtubevideo from './Youtubevideo'







export default function Home() {

 const [apply, setApplied] =useState("send message");
 const [email,setEmail]=useState("");
 const [textarea,setTextarea] = useState("");
 const [choose, setChoose]=useState("");

 const emailHander=(e)=>{
   setEmail(e.target.value)
 }
 const ChooseHander=(e)=>{
  setChoose(e.target.value)
}
const TextHander=(e)=>{
  setTextarea(e.target.value)
}
  const submithander=(e)=>{
    e.preventDefault();
    console.log(textarea);
    console.log(choose);
console.log(email);
setApplied("Done");

  }
 
    return (
        <div className={styles.home}>
            <Header></Header>

            <section>
            <div id="carouselExampleIndicators" className={`${styles.carouselmobile} carousel slide  carousel-fade`} data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="false" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={one} class="d-block w-100" alt="..."/>
      <div className={styles.heroTExt}>
          <p>The Inspiration</p>
          <h4 className={styles.mainTExtstyle}>Mahender Singh <br></br><span style={{fontWeight:"600"}}>Dhoni</span></h4>
          <p>Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={two} class="d-block w-100" alt="..."/>
      <div className={styles.heroTExt2}>
          
          <h4 className={styles.mainTExtstyle}>Leadership || Discipline || Success || Result</h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img src={three} class="d-block w-100" alt="..."/>
    <div className={styles.heroTExt3}>
          
          <h4 className={styles.mainTExtstyle}><span style={{fontWeight:"600"}}>Dhoni</span>-The Untold <br></br> Story</h4>
          <p>Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


{/* mobile div */}
<div className={styles.bgImg}>
<div className={styles.heroTExtmobile}>
          
          <h4 className={`${styles.mainTExtstyle} ${styles.mainTExtstylemobile}`}>Mahender Singh <br></br><span style={{fontWeight:"600"}}>Dhoni</span></h4>
          <p className={styles.mainTExtstylemobile}>Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse</p>
      </div>
</div>
</section>

<section  className={styles.spacing}>
    <div >
    <h3 style={{fontWeight:"600"}}  className="text-center mb-3 mt-4">Leading as a Captain</h3>
    <Card>
    <div class="row row-cols-1 row-cols-md-3 mt-3 g-4">
  <div class="col">
    <div class={`${styles.cardStyling} card h-100 `}>
      <img src={t20} class={`${styles.cardbordering} card-img-top `} alt="..."/>
      <div class="card-body p-3">
        <h5 class={`${styles.cardStylingTExt} card-title text-center`}>T20 Captain</h5>
        <hr/>
       
        <p class="card-text text-center"> Duis aute irure dolor in reprehenderit in voluptate velit esse  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       {/* <a href="https://en.wikipedia.org/wiki/MS_Dhoni" target="_blank" ><p className={`${styles.seemore} text-center`}>See more..</p></a> */}

       <a href="https://en.wikipedia.org/wiki/MS_Dhoni" target="_blank"><button className={`${styles.btnstylinhcard} btn  col-12`}> See More.. </button></a>
     
      </div>
      <div class="card-footer text-end">
        <small class="text-muted text-end pe-4">26-october-1998</small>
      </div>
    </div>
  </div>
  <div class="col">
  <div class={`${styles.cardStyling} card h-100 `}>
      <img src={odi2} class={`${styles.cardbordering} card-img-top `}  alt="..."/>
      <div class="card-body p-3">
        <h5 class={`${styles.cardStylingTExt} card-title text-center`}>ODI Captain</h5>
        <hr/>
      
        <p class="card-text text-center"> Duis aute irure dolor in reprehenderit in voluptate velit esse  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="https://en.wikipedia.org/wiki/MS_Dhoni" target="_blank"><button className={`${styles.btnstylinhcard} btn  col-12`}> See More.. </button></a>
      
      </div>

      <div class="card-footer text-end">
        <small class="text-muted text-end pe-4">08-April-2011</small>
      </div>
    </div>
  </div>
  <div class="col">
  <div class={`${styles.cardStyling} card h-100 `}>
      <img src={test} class={`${styles.cardbordering} card-img-top `}  alt="..."/>
      <div class="card-body p-3">
        <h5 class={`${styles.cardStylingTExt} card-title text-center`}>Test Captain</h5>
        <hr/>
        <p class="card-text text-center"> Duis aute irure dolor in reprehenderit in voluptate velit esse  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="https://en.wikipedia.org/wiki/MS_Dhoni" target="_blank"><button className={`${styles.btnstylinhcard} btn  col-12`}> See More.. </button></a>
        
     
      </div>


      <div class="card-footer text-end">
        <small class="text-muted text-end pe-4">26-october-1998</small>
      </div>
    </div>
  </div>
</div>
    </Card>
    </div>
</section>

{/* youtube Section */}

<section className="" style={{background:"#1C1919"}}>
<h3 style={{fontWeight:"600",color:'white'}}  className="text-center pb-5 mt-5 pt-5">Winning stroke</h3>
<div style={{margin:"0vw 9vw"}} className=" pb-5">
    <Youtubevideo embedId="mEOBGY4-7JA" />
    <div className={styles.youtbeDesign}>
        <h5 className={`${styles.textMobile} text-end mb-3`}> Finishes off in Style</h5>
        <p className={`${styles.textDesktop} text-center`}>Lorem ipsum dolor sit amet. Id minima deleniti cum ipsum asperiores At optio voluptatem. Est aliquid ipsum ut internos blanditiis qui magni iure vel sequi molestias. Et atque galisum et corporis dolorem sit perspiciatis praesentium et
        </p>
        
         <h5 className={`${styles.textSeeMore} text-end`}><a href=" https://www.youtube.com/results?search_query=cricket+videos" target="_blank" >See More...</a></h5>
    </div>
    </div>
</section>


{/* form section */}

<section id="formSection" className={styles.bgImage2}>
<h3 style={{fontWeight:"600"}}  className="text-center mb-3 pt-5">Be In Touch</h3>
  <div className="row">
    <div className="col-md-6">

      <div className={styles.textdecoratingform}>
        <h1>Indian Cricket team,<br></br>
        & <b>MS Dhoni</b> </h1>
        <br/><br/>
      

        <p>Lorem ipsum dolor sit amet. Id minima deleniti cum ipsum asperiores At optio voluptatem. Est aliquid ipsum ut internos blanditiis qui magni iure vel sequi molestias</p>
      </div>

    </div>
    <div className={`${styles.mobiledecor} col-md-6 p-5 `}>
      <div style={{padding:"0vw 4vw"}}>
      <Card>
        <form onSubmit={submithander} className={styles.borderstyling}>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Where Should we contact you ?</label>
  <input type="email" onChange={emailHander} class={`${styles.forminputdesign} form-control `} id="exampleFormControlInput1" placeholder="Your Email address" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Choose the teams</label>
  <input onChange={ChooseHander} type="text" class={`${styles.forminputdesign} form-control `} id="exampleFormControlInput1"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea onChange={TextHander} class={`${styles.forminputdesign} form-control `} placeholder="Tell something about yourself..." id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button type="submit" className={`${styles.buttondesign} btn-block btn col-12` }>{apply}<i class="fas fa-arrow-right float-end mt-1 me-2"></i></button>

<div>

</div>

</form>
      </Card>
      </div>
      
      </div>


  </div>
</section>




  <Footer/>          
        </div>
    )
}
