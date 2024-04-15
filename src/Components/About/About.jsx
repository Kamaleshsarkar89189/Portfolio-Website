import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/about_profile.svg'
import profile_img from '../../assets/kamalesh.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus numquam temporibus doloribus earum fuga illum nostrum, amet dolore nobis sit! Quia deserunt aperiam, distinctio impedit laboriosam animi dolorum perspiciatis sint pariatur ipsam nam quas quos quam libero ab soluta?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus suscipit mollitia temporibus beatae dolorem natus molestiae eaque provident, cumque sint a quam facere quidem consequuntur? Quia deleniti expedita maxime accusantium ullam saepe molestiae ad.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievemenets">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
              <div className="about-achivement">
                  <h1>90+</h1>
                  <p>PROJECT COMPLETED</p>
              </div>
              <hr />
              <div className="about-achivement">
                  <h1>15+</h1>
                  <p>HAPPY CLINTS</p>
              </div>
        </div>
    </div>
  )
}

export default About