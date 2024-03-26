import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
    const navigate = useNavigate();
  return (
   <>
       <section id="Contacts">
        <div class="container mt-3 contactContent">
            <h1 class="text-center">Contact Me</h1>
      
            <div class="row mt-4">
               
            {/* <link href="https://maps.app.goo.gl/Tjtg8upjMhDUxPrr7" rel="stylesheet"/> */}
                <div class="col-lg-6">
                
                    <form>
                        <input type="text" class="form-control form-control-lg" placeholder="Name"/>
                        <input type="email" class="form-control mt-3" placeholder="Email"/>
                        <input type="text" class="form-control mt-3" placeholder="Subject"/>
                        <div class="mb-3 mt-3">
                            <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                        </div>
                    </form>
                    {/* <button type="button" class="btn btn-success mt-3">Contact Me</button> */}
                   
                </div>
      
            </div>
        </div>
        <button
        onClick={() => {
            navigate("/");
        }}
        >GO BACK</button>
      </section>
   </>
  )
}

export default Contacts