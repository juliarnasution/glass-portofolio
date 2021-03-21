import { useEffect, useState } from "react"
const aboutJson = require('../../assets/data/about.json');
export function About() {
    const [about,setAbout] = useState({});
    useEffect(()=>{
        setAbout(aboutJson)
    },[])
    return (
        <div className="content">
            <div className="content-header">
                <div className="card" style={{marginBottom: '0rem',}}>
                    <h4>ABOUT</h4>
                </div>
            </div>
            <div className="content-item">
                <div className="card" style={{fontSize:'0.8rem'}}>
                    {about.body??'Masih kosong'}
                    <p style={{marginTop:'1rem'}} className="author">{about.author??'Penulis'}</p>
                </div>
            </div>
        </div>
    )
}