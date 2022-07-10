import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

function Footer() {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };




  return (
    <div className="footer">

<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
        options={
          {
            "fullScreen": {
                "enable": false,
                "zIndex": 0
            },
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area": 2000
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 18,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 500,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "top-right",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 4,
                        "duration": 0.3,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "background": {
                "color": "#181818",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            }
        }
        }
    />

    <div className="huzxn56">
    {/* <i class="fas fa-code" id="light"></i> */}
    {/* <i class="fa-brands fa-github" id="light"></i>
    <FontAwesomeIcon icon="fa-brands fa-github" /> */}
       
        <p>Built with 
        <a href="https://github.com/debanilvb">
       <svg height="32" aria-hidden="true" id="light" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
       <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
       </svg>
       </a>  
       India 
       </p>
        



        

      </div>      



    </div>
  );
}

export default Footer;
