import Image from "next/image"
import InfoBox from "@/components/Info-box"

export default function HomePage() {

    return (
        <main>
            <article className="mt-28 grid grid-cols-2">
                <section className="text-gray-200">
                    <h1 className="mb-1">Olá, eu me chamo <strong>Wemerson</strong> e sou:</h1>
                    <h1 className="text-blue-500 font-semibold text-2xl mb-1">Desenvolvedor FullStack React | Node.js</h1>
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
                        Sou programador focado em JavaScript com conhecimentos em React e Tailwindcss no Frontend, Node.js e Express no Backend. Na área de DataBase tenho apredndio sobre de MySQL e MongoDB.
                    </p>

                    <p>
                        Estou cursando ADS (Análise e Desenvolvimento de Sistemas) com previsão de conclusão para 2027.
                    </p>

                    <p>
                        Além de aspirante a programador também sou um grande fã de RPG de mesa - sim, eu gosto de mestrar - e sou apaixonado na minha esposa!
                    </p>

                    <p>
                        Confira meus projetos abaixo.
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

                <section className="flex flex-col justify-center items-left">
                    <h1 className="text-blue-500 font-semibold text-4xl mb-2">Sobre mim</h1>
                    <p>
                        Sou um Desenvolvedor Full Stack apaixonado por tecnologia, resolução de problemas e experiências digitais bem construídas. Ao longo da minha jornada, explorei tanto o front quanto o back-end, sempre buscando unir eficiência técnica e boa usabilidade.
                    </p>
                </section>
            </article>

            <article className="mt-16 grid grid-cols-2 gap-4">
                <InfoBox 
                    tag='ADS'
                    bio='Rio das Ostras, RJ'
                    description='Análise e Desenvolvimento de Sistemas - Anhanguera - 01/2027'
                    msg='Mestre de RPG de mesa, amante de cinema, autodidata e perdidamente apaixonado pela minha esposa!'
                    redes='linkedin'
                />

                {/* <ul className="flex flex-col justify-center items-center">
                    <li className="text-xl font-semibold">Wemerson Nunes</li>
                    <li className="font-light">25 anos</li>
                    <li className="font-light">Rio das Ostras, RJ</li>
                    <li className="text-xl font-semibold mt-2">Faculdade</li>
                    <li className="font-light">Anhangura - 01/2027</li>
                    <li className="text-xl font-semibold mt-2">Redes Sociais</li>
                    <li className="font-light">Linkdin</li>
                    <li className="font-light">EMAIL</li>
                    <li className="font-light">GIT</li>
                </ul> */}

                <Image
                    className="rounded-2xl"
                    src={'/img/wemerson.jpg'}
                    alt="Foto do desenvolvedor deste site."
                    width={614}
                    height={500}
                />
            </article>

            <article>
                <h1 className="text-blue-500 text-3xl font-semibold mt-32">Conhecimento</h1>

                <div className="grid grid-cols-3 mt-8">
                    <ul className="flex flex-col gap-2">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Tailwindcss</li>
                        <li>React</li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li>Node.js</li>
                        <li>Expres</li>
                        <li>Restfull API</li>
                        <li>Postgresql</li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li>Figma</li>
                        <li>Git</li>
                    </ul>
                </div>
            </article>
        </main>
    )
}