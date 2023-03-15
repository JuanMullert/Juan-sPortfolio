import React from "react";

export default function Contact() {
    return (
        <section class="mb-4">

    
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
   
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me.</p>

    <div class="row">

        
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"></input>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"></input>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    

                </div>
                

                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"></input>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                

                
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                

            </form>

            <div class="text-center text-md-left">
                <a href="facebook.com">Send</a>
            </div>
            <div class="status"></div>
        </div>
        

        
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
        

    </div>

    <footer className="bg-dark text-center text-white footer3">
   
   <div className="container p-4 pb-0">
     
     <section className="mb-4">
       
       <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/juanmullert" role="button"
         ><i className="fab fa-facebook-f"></i>LinkedIn</a>
 
       
       <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
         ><i className="fab fa-twitter"></i>Github</a>
 
       
       <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
         ><i className="fab fa-google"></i>Gitlab</a>
 
       
       <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
         ><i className="fab fa-instagram"></i>Youtube</a>

     </section>
     
   </div>
   
 
   
   <div className="text-center p-3" >
     © 2023 Copyright: 
     <a className="text-white" href="https://mdbootstrap.com/"> Juan's Portfolio</a>
   </div>
   
 </footer>

</section>

  )
}
