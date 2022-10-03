import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <section id='skills'>
        <div className='container'>
            <h2 className='h2skills'>Skills</h2>
            <article className='skillList'>
                <div className='listGroup'>
                    <div>
                        <h4>HTML</h4>
                        <h4>Javascript</h4>
                        <h4>SQL</h4>
                        <h4>React</h4>
                        <h4>Redux</h4>
                        <h4>Bcrypt</h4>
                        <h4>AWS</h4>
                        <h4>Bootstrap</h4>
                        <h4>Heroku</h4>

                    </div>
                    <div>
                        <h4>CSS</h4>
                        <h4>Axios</h4>
                        <h4>Express</h4>
                        <h4>NodeJS</h4>
                        <h4>PostgreSQL</h4>
                        <h4>Git</h4>
                        <h4>Github</h4>
                        <h4>Postman</h4>
                        <h4>HTML5</h4>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Skills