import {BsArrowUpRight} from "react-icons/bs"
const AboutComponent =() =>{
    return(
        <section className="about-container ">
            <div className="w-full flex relative page-width h-1/2">
                <div className="absolute w-1/2 about-banner">
                    <p className="about-banner-text">
                        I REALLY <span className="love">LOVE</span> TO WORK WITH CODE
                    </p>
                    <p className='cursive-name'>
                        Josiah Idowu
                    </p>
                </div>
                <div className="w-2/3 absolute about-image">
                    <img className="w-full" src="rich-tervet-q2GNdFmhxx4-unsplash.jpg"/>
                </div>
            </div>
            <div className=" h-1/2 about-footer">
                <div className="about-footer-container h-full page-width">
                    <div className=" social">
                        <h2>
                            Follow Me
                        </h2>
                        <div className="social-links">
                            <a href="https://twitter.com/Jazz_nimzy "><p>Twitter</p><p><BsArrowUpRight/></p></a>
                        </div>
                        <div className="social-links">
                            <a href="google.com"><p>Instagram</p><p><BsArrowUpRight/></p></a>
                        </div>
                    </div>
                    <div className=" text-sm footer-text fto ">
                        <p>
                            I took up web development in the year 2020, during the pandemic.
                            Web development is something I have been always wanted to venture into,
                            the whole pandemic just gave me the time to pursue it
                        </p>
                        <p>
                            Started off with the basics <span>HTML</span> and <span>CSS</span> and worked
                            my way up with JS by building various projects. Took up a couple of frameworks
                            and started building web apps,
                        </p>
                    </div>
                    <div className=" text-sm footer-text ftt">
                            <p>
                               "I have good communication skills which enables me to work well in teams
                                and groups, my grit and innovative thinking would make me a great asset to work anywhere"
                            </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default AboutComponent