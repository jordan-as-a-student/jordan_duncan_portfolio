import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Section from './components/Section.jsx'
import Carousel from './components/Carousel.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import projects from './data/projects.js'
import experience from './data/experience.js'
import ExperienceItem from './components/ExperienceItem.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className ={"min-h-screen bg-neutral-950 text-neutral-100"}>
      <NavBar />

      {/*About*/}
      <Section id={"about"} title={"About Me"}>
        <div className={"flex flex-col items-center gap-6"}>
          <img
            src={"/personal_pic.JPG"}
            alt={"profile"}
            className={"size-40 rounded-2xl object-cover ring-2 ring-neutral-800"}
            />
            <div className={"space-y-4 leading-relaxed text-neutral-300"}> 
              <p>
                Hi, I'm <span className={"font-semibold text-white"}>Jordan Duncan</span> a passionate undergraduate student at the University of Central Missouri studying Computer Science and Cybersecurity. 
              </p>
              <p>
                I love learning, creating, and communicating about: software development, web development, cybersecurity, AI, and technology in general.
              </p>
              <p>
                Outside of computies💻, I enjoy working out, reading about exsistential philosophy, watching Elvis the movie, spending my money unwisely at concerts, and <strike>spending time with all of my friends</strike> making friends!
              </p>
              <div className={"flex gap-3 pt-2 justify-center"}>
                <a 
                  href={"#projects"}
                  className={"rounded-xl bg-while/10 px-4 py-2 hover:bg-white/15"}
                >
                  View Projects
                </a>
                <a
                  href={"#experience"}
                  className={"rounded-xl bg-while/10 px-4 py-2 hover:bg-white/15"}
                >
                  Work Experience
                </a>
              </div>
            </div>
        </div>
      </Section>
          {/*projects displayed with carousel*/}
          <Section id={"projects"} title={"Projects"} subtitle={"Some of my recent work"}>
            <Carousel>
              {projects.map((p)=>(
                <ProjectCard key={p.id} project={p}/>
              ))}
            </Carousel>
          </Section>

      {/*Experience*/}
      <Section id={"experience"} title={"Work Experience"} subtitle={"I am just beginning to acquire career field experience, but the listed jobs below have built my soft skills"}>
              <div className={"space-y-4 text-left"}>
                {experience.map((job)=>(
                    <ExperienceItem key={job.id} item={job}/>
                  ))}
              </div>
      </Section>
      <Footer/>
    </div>
  )
}

export default App
