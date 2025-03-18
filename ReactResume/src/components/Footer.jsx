import React from 'react';

function Footer() {
  return ( 
    //footer has bootstrap styling and uses bootstrap icons; 
    // icons are linked to pretend accounts for github, linkedin, and bluesky; 
    // footer is centered 
    //div class container adapts to screen size 
    <footer className="bg-light py-4 mt-5"> 
      <div className="container">
        <div className="d-flex justify-content-center gap-3">
          <a 
            href="https://github.com/Liz-Melcher" 
            className="text-dark text-decoration-none" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bi bi-github" role="img" aria-label="GitHub"></i>
          </a>

          <a 
            href="https://www.linkedin.com/in/pretendprofile" 
            className="text-dark text-decoration-none" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin" role="img" aria-label="LinkedIn"></i>
          </a>

          <a 
            href="https://www.youtube.com/@pretendhandle" 
            className="text-dark text-decoration-none" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube text-danger" role="img" aria-label="YouTube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
