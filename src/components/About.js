import about_img from '../images/about_img.jpg'



function About() {
    return (
        <>

            <section className="s1 ">

                <div>
                    <img src={about_img} alt="img_2" className="about_img "></img>
                </div>

                <div className="about_content ">
                    <h4>About Catering</h4>
                    <h3>Tradition since 1889</h3>
                    <p className="para1">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p><br></br><br></br>
                    <p className="para2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </section>
        </>
    )
}
export default About