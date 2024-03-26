import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutus = () => {
    const navigate = useNavigate();
  return (
    <>
          <section id="About Us">
        <div class="container mt-4 pt-4"/>
            <h1 class="text-center">About Us</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.VcBhkVF91iUeZJSx8wfUxwHaEP&pid=Api&P=0&h=180" class= "imageAboutPage" alt=""/>
                </div>
      
                <div class="col-lg-8">
                    <p>By the 1980s and 1990s, the U.S. was covered by pan-regional and national chains of big box retailers, such as the defunct
                       Circuit City and The Good Guys and the extant Best Buy, where audio and video was a major line of merchandise, 
                      next to home appliances, cellphones and computers, putting pressure on independent dealers.
                        
                    </p>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <ul>
                                <li>Name: ABCD pvt ltd</li>
                                
                             
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>Name: ABCD pvt ltd</li>
                                
      
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <p> The origins of the consumer electronics store can be traced back to phonograph dealers in 1893,[1] including specialized phonograph stores, as well as music stores which carried a wider array of music-related merchandise.
                          With the advent of radio, with radio receiving equipment being sold by specialist electric hardware shops,
                           there was controversy as to whether radio equipment manufactures should sell wholesale to phonograph and music stores, and to department stores, but in 1923 Federal Telephone & Telegraph Co. started doing so and other manufacturers started suit.[2] Wireless Age estimated that there were 15,000 phonograph dealers in the U.S.
                           in that year.[3]
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={()=>{
                navigate("/");
            }}>GO BACK</button>
      </section>
    </>
  )
}

export default Aboutus