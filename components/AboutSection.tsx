import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Node.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Next.js" },
  { skill: "MongoDB" },
  
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Acerca de mí
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-700 dark:bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            </h1>
            <p>
              Hola, mi nombre es Leidy y soy una persona {" "}
              <span className="font-bold">{"motivada"}</span>, y, 
              <span className="font-bold">{"curiosa"}</span> por lo que hago
            </p>
            <br />
            <p>
              Desde que descubrí mi interes por la tecnología, me he convertido
              en una entusiasta en el desarrollo y diseño de paginas web.
              Actualmente sigo en constante formación y actualización 
              y comprometida con el aprendizaje continuo 
              y en la mejora constante de mis habilidades
            </p>
            <br />
            <p>
              Considero que el desarrollo no solo se trata de habilidades tecnicas,
              sino también las habilidades de comunicación y el trabajo en equipo 
              y la colaboración con otros profesionales para lograr los resultados esperados.
              Y tambien de entender las necesidades del usuario.
            </p>
            <br />
            <p>
              Empezando y conociendo un nuevo mundo y abierta a nuevas oportunidades
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/image-pic.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
