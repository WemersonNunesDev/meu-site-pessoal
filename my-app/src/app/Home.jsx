import Image from "next/image"
import InfoBox from "@/components/Info-box"

export default function HomePage() {
    const imagem = '/img/wemerson.jpg'

    return (
        <main>
            <article className="mt-28 grid grid-cols-2">
                <section className="text-gray-200">
                    <h1 className="mb-1 text-2xl font-bold"><span>&#x1F44B;</span> Olá, eu sou o Wemerson</h1>
                    <h1 className="text-blue-500 font-semibold text-xl mb-1">Desenvolvedor Full-Stack React | Node.js</h1>
                    <p className="mb-4">Crio interfaces responsivas e modernas focado em alta performacer.</p>
                    
                    <button
                        className="bg-blue-500 py-1 w-28 rounded hover:cursor-pointer"
                    >
                        Conferir
                    </button>
                </section>

                <section className="flex gap-4 items-center justify-center">
                    <Image 
                        src='/img/react.svg'
                        alt="Logo do Framework React"
                        width={96}
                        height={96}
                    />
                    <Image 
                        src='/img/node.svg'
                        alt="Logo do Node.js"
                        width={96}
                        height={96}
                    />
                </section>
            </article>

            <section className="grid grid-cols-[614px_410px] mt-32">
                <article className="flex flex-col justify-center gap-2 text-gray-300 text-lg">
                    <p>
                        Sou um programador apaixonado por JavaScript, com experiência em React e TailwindCSS no front-end, além de Node.js e Express no back-end. Também estou me aprofundando em bancos de dados como MySQL e MongoDB.
                    </p>

                    <p>
                        <span>&#x1F4DA;</span> Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS) pela Anhanguera, com previsão de conclusão em 2027.
                    </p>
                </article>

                <aside className="flex flex-col justify-center items-center">
                    <Image 
                        src='/img/Programming-rafiki.png'
                        alt='Imagem de um homem sentado a mesa trabalhando em seu computador.'
                        width={400}
                        height={400}
                    />
                    <legend className="text-sm text-slate-300">
                        Confira <a href="https://storyset.com">storyset.com</a>
                    </legend>
                </aside>
            </section>

            <article className="mt-32 grid grid-cols-[512px_512px] justify-center items-center">
                <section className="flex justify-center items-center">
                    <Image 
                        src='/img/Lost-rafiki.png'
                        alt="Imagem de um homem indeciso em frente a placa."
                        width={500}
                        height={500}
                    />
                </section>

                <section className="flex flex-col justify-center items-left gap-2">
                    <h1 className="text-blue-500 font-semibold text-4xl mb-2">Sobre mim</h1>
                    <p>
                        Sou um Desenvolvedor Full Stack movido por desafios, pela tecnologia e pela vontade de criar experiências digitais que realmente funcionam — tanto no código quanto para quem usa.
                    </p>
                    <p>
                        Gosto de trabalhar com soluções que combinem eficiência técnica, boa usabilidade e código limpo. Do front ao back, minha missão é entregar sistemas ágeis, bonitos e funcionais.
                    </p>
                    <p>
                        Fora do teclado, sou mestre de RPG de mesa, cinéfilo, autodidata incansável — e perdidamente apaixonado pela minha esposa <span>&#x1F499;</span>
                    </p>
                </section>
            </article>

            <article className="mt-16">
                <aside className="h-[400px] bg-[url('/img/wemerson.jpg')] bg-cover bg-right-top bg-no-repeat rounded-2xl">
                    <div className="h-full flex flex-col justify-end items-end gap-2 px-4 py-3 bg-linear-to-l from-gray-900 from-10% to-transparent to-90%">
                        <h2 className="text-xl font-bold"><span>&#x1F30E;</span> Localização</h2>
                        <p>Rio das Ostras, RJ</p>
                        <h2 className="text-xl font-bold"><span>&#x1F393;</span> Formação</h2>
                        <p>Análise e Desenvolvimento de Sistemas - Anhanguera</p>
                        <p>Conclusão prevista: Janeiro de 2027</p>
                    </div>
                </aside>
            </article>

            <article>
                <h1 className="text-blue-500 text-3xl font-semibold mt-32 mb-3">Conhecimento</h1>

                <ul className="flex flex-col gap-2">
                    <li><strong>Frontend:</strong>  HTML, CSS, JavaScript, React, TailwindCSS</li>
                    <li><strong>Backend:</strong> Node.js, Express, APIs RESTful</li>
                    <li><strong>Database:</strong> PostgreSQL, MySQL, MongoDB</li>
                    <li><strong>Outros:</strong> Figma, Git</li>
                </ul>
            </article>
        </main>
    )
}