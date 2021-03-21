import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const defaultImage = "/images/laptopv2.jpg";
const myProjects = require('../../assets/data/projects.json')
export function Projects() {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        setProjects(getProjects());
    },[]);

    const getProjects =()=>{
        return myProjects;
    }

    return (
        <div className="content">
            <div className="content-header" style={{paddingBottom:'0rem'}}>
                <div className="card" style={{marginBottom: '0rem'}}>
                    <h4>PROJECTS</h4>
                </div>
            </div>
            <div className="content-item" style={{marginTop: '0rem'}}>
                <Carousel 
                    autoPlay="true"
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop={true}
                >
                {projects.map((value,index)=>{
                    return (
                            <div className="card project" key={index}>
                                <h2 style={{marginBottom:'0.6rem',textAlign:'center'}}>{value.title}</h2>
                                <div className="project-content">
                                    <img className="image-project" src={process.env.PUBLIC_URL+value.image_url??defaultImage} alt="project"/>
                                </div>
                                
                                
                                {/* <p >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p> */}
                            </div>
                        
                    )
                })}
                </Carousel>
            </div>
        </div>
    )
}