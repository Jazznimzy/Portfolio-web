import React from "react";
import {useState, useEffect} from "react";
import {AiFillHtml5,AiFillGithub} from "react-icons/ai"
import {SiCss3, SiTypescript, SiSass} from "react-icons/si"
import {FaJsSquare, FaReact, FaNode} from "react-icons/fa"
import {BiLogoVuejs} from "react-icons/bi"
import {TbBrandNextjs} from "react-icons/tb"
const SkillsComponent =()=>{
    const [index, setIndex ] = useState(0)
    const [skills, setSkills] = useState([
        {
            icon:<AiFillHtml5/>,
            title: "HTML5",
            color:"#ff5722",
            visible: false,
        },
        {
            icon:<SiCss3/>,
            title: "CSS",
            color:"#e3bb41",
            visible: false,

        },
        {
            icon:<FaJsSquare/>,
            title: "Js",
            color:"#2449d8",
            visible: false,

        },
        {
            icon:<FaReact/>,
            title: "REACT",
            color:"#2296f3",
            visible: false,

        },
        {
            icon:<BiLogoVuejs/>,
            title: "VUE Js",
            color:"#00b779",
            visible: false,

        },
        {
            icon:<AiFillGithub/>,
            title: "GIT",
            color:"",
            visible: false,

        },
        {
            icon:<FaNode/>,
            title: "NODE js",
            color:"",
            visible: false,

        },
        {
            icon:<SiTypescript/>,
            title: "TYPESCRIPT",
            color:"#2296f3",
            visible: false,

        },
        {
            icon:<TbBrandNextjs/>,
            title: "NEXT Js",
            color:"",
            visible: false,

        },
        {
            icon:<SiCss3/>,
            title: "SASS",
            color:"#cf649b",
            visible: false,
        },
    ])
    useEffect( ()=>{
        if (index >= 0 && index < skills.length) {
            setTimeout( function (){
                let skillsCopy = [...skills];
                skillsCopy[index].visible = true;

                setSkills(skillsCopy);
                setTimeout(function () {
                    setIndex(index+1)
                }, 300)

                //eslint-disable-next-line
            },  300)
        }
        //eslint-disable-next-line
    },[index]);
    return(
        <section
            className="skills-section relative">
            <div className="st">

            </div>
            <div className="sb">

            </div>
            <div className="page-width flex sk-con justify-center items-center h-full">
                <div className=" h-5/6 skill-banner">
                    <div className="skill-header">
                        <h2>
                                What I do
                        </h2>
                        <p>
                                I am skilled in using this languages and frameworks to build
                                and develop innovative and fully responsive websites and web applications

                        </p>
                    </div>
                    <div className="skill-banner-con ">
                        {skills.map((skill, index)=>{
                            console.log(skill.visible)
                            return(
                                <div className={`skill-box ${skill.visible ? 'vis' : '' }`}>
                                    <ul>
                                        <li>
                                            <p style={{color:skill.color, fontSize:55,}}>
                                                {skill.icon}
                                            </p>
                                            <p style={{textAlign:"center", paddingTop:5}}>
                                                {skill.title}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}
export default SkillsComponent