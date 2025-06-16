import Image from "next/image"
import CardProj from "@/components/card-proj"
import Footer from "@/components/footer"

export default function Projetos() {
    return (
        <main className="max-w-[1024px] m-auto mt-32">
            <article className="grid grid-cols-2">
                <section className="flex flex-col justify-center items-left">
                    <h1 className="text-blue-500 text-3xl font-semibold mb-2">Projetos</h1>
                    <p>Confira meus projetos logo abaixo.</p>
                </section>

                <section>
                    <Image 
                        src={'/img/server-status.png'}
                        alt="Imagem de um servidor"
                        width={500}
                        height={500}
                    />
                </section>
            </article>

            <section className="mt-32 grid grid-cols-3 grid-rows-[170px_170px_170px] gap-3">
                <CardProj 
                    title='Sistema Gerenciador de Tarefas'
                    description='Feito com React, Tailwindcss, Node.js + PostgreeSQL'
                    className='rounded outline-2 outline-green-400 px-3 py-2'
                    classBtn='w-[112px] text-gray-900 bg-green-400 px-2 py-1 rounded font-semibold'
                />
                <CardProj 
                    title='Aplicativo de Clima'
                    description='Feito com React + consumo de API.'
                    className='rounded outline-2 outline-blue-500 px-3 py-2'
                    classBtn='w-[112px] text-gray-900 bg-blue-500 px-2 py-1 rounded font-semibold'
                />
                <CardProj 
                    title='E-commerce'
                    description='Feito com React, Tailwindcss, Node.js + MongoDB'
                    className='rounded outline-2 outline-yellow-300 px-3 py-2'
                    classBtn='w-[112px] text-gray-900 bg-yellow-300 px-2 py-1 rounded font-semibold'
                />
            </section>

            <aside>

            </aside>
            <Footer />
        </main>
    )
}