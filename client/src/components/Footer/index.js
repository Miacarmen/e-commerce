import React from "react";

const Foot = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <p className="link link-hover">Vintage</p> 
    <p className="link link-hover">Y2K</p> 
    <p className="link link-hover">Preloved</p> 
    <p className="link link-hover">Revived</p>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <p className="link link-hover">About us</p> 
    <p className="link link-hover">Contact</p> 
    <p className="link link-hover">Jobs</p> 
    <p className="link link-hover">Press kit</p>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <p className="link link-hover">Terms of use</p> 
    <p className="link link-hover">Privacy policy</p> 
    <p className="link link-hover">Cookie policy</p>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address to Stay in the Know About Upcoming Drops</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="youremail@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
  )
};

export default Foot;
