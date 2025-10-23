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
                Hi, I'm <span className={"font-semibold text-white"}>Jordan Duncan</span> Me likey computie
              </p>
              <p>
                I enjoy mice and key
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
      <Section id={"experience"} title={"Work Experience"} subtitle={"My Work Experience"}>
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
