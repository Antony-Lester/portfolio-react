import { useEffect } from "react";


export default function Linkin() { 
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return (
          <div className="main">
              <div className="center">
              <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="antony-lester" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://uk.linkedin.com/in/antony-lester?trk=profile-badge"></a></div>
              
              </div>
        </div>
      );
} 