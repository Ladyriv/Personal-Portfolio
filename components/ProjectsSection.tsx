import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"


const projects = [
  {
    name: "Programate School",
    description:
      "Plataforma para la escuela Prográmate School de la fundación Educamas, donde se integra FrontEnd y Backend.",
    image: "/programate-school.png",
    github: "https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT",
    link: "https://programate-school-front.vercel.app/",
  },
  {
    name: "Tetris",
    description: "Desarrollo del juego tetris con Javascript",
    image: "/BigTetrisJS.png",
    github: "https://github.com/MariaHerrera03/Tetris",
    link: "https://tetrisgames.netlify.app/",
  },
  {
    name: "Ahogados en código",
    description:
      "Aplicación interactiva donde se agrega un listado de nombres y se eligen al azar.",
    image: "/WheelOfDoom.png",
    github: "https://github.com/manuel101284/WheelOfDoom",
    link: "https://ahogadosencodigo.netlify.app/",
  },
  {
    name: "Calculadora con React",
    description:
      "Creación de una calculadora basica utilizando React JS",
    image: "/calculator.png",
    github: "https://github.com/Ladyriv/calculator-react",
    link: "https://calculator-react-ladyriv.vercel.app/",
  },
  {
    name: "Z-Shop",
    description:
      "Reto de diseño de una pagina Front-End, utilizando solo HTML y CSS",
    image: "/zshop.png",
    github: "https://github.com/Ladyriv/zShop-css",
    link: "https://zshop-css-by-lady.vercel.app/index.html",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-purple-700 dark:bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-200">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
