import "../Styles/App.css"
import {Link} from "react-router-dom";
import {motion} from "framer-motion"
const HomeComponent =()=> {

    const greetings = [
            {
                text: "HELLO,",
                color: "#bcbcbc",
            },
            {
                text: "CIAO",
                color: "#d7d7d7"
            },
            {
                text: "BONJOUR",
                color: "#e0e0e0"
            },
            {
                text: "OLA",
                color: "#efefef"
            },
            {
                text: "HELLO",
                color: "#efefef"
            },
            {
                text: "こんにちは",
                color: "#efefef"

            },
        ]

    return(
        <section className="w-full home-comp page-width">
            <div className="w-3/4 relative h-full justify-center flex banner" >
                <div className="absolute profile-image">
                    <img className="w-full h-full " src="mark-farias-dt60oksDTx8-unsplash.jpg"/>
                </div>
                <div className="banner-text ">
                    {greetings.map ((item, index)=>{
                        return(
                            <ul>
                                <li style={{color:item.color}}>
                                    {item.text}
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="absolute w-80 h-72 p-6 banner-box">
                    <div className="p-5 flex flex-col justify-center items-center">
                        <p className="font-semibold pb-2 text-xl">
                            Josiah Idowu
                        </p>
                        <p className="font-light tracking-widest text-sm">
                            Frontend Developer
                        </p>
                    </div>
                    <div className=" text flex items-center">
                            Josiah is an innovative and skilled developer, Hes grit and love for new
                        designs to be built has made his growth in web development rapid and amazing.
                        He is always looking out on how to sharpen his skills by taking up new and
                        creative task,and with his problem solving skills hes agreat asset anywhere
                    </div>
                    <motion.div
                        className="flex justify-center items-center p-4 see-more">


                        <Link to="/about" ><motion.button
                                            whileHover={{
                                                scale:1.1
                                            }} >See more
                                        </motion.button>

                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default HomeComponent