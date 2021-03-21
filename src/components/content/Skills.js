import { useEffect, useState } from 'react';
import {icons} from '../../assets/iconSkills/icons';
const mySkills = require('../../assets/data/skills.json');
export function Skills() {
    const [skills, setSkill] =useState([]);
    useEffect(()=>{
        if(Array.isArray(mySkills)){
            let newArrSkill = mySkills.map((value,index)=>{
                const foundIcon = icons.find(icon=>icon.name === value.key);
                if (foundIcon) {
                    return {...foundIcon,...value}
                }
                return value;
            });
            // console.log(newArrSkill);
            setSkill(newArrSkill);
        }
    },[])
    return (
        <div className="content">
            <div className="content-header" style={{paddingBottom:'0rem'}}>
                <div className="card" style={{marginBottom: '0rem'}}>
                    <h4>SKILLS</h4>
                </div>
            </div>
            <div className="content-item" style={{marginTop: '0rem'}}>
                <div className="grid-container">
                    {skills.map((item,index)=>{
                        return(
                            <div className="grid-item" key={index}> 
                                <img src={item.icon} alt="icon-skill" height="50" width="50"></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}