import Link from "next/link"

export default function NavBar() {

    const style = {
        link: 'w-[112px] text-center rounded outline-2 outline-blue-500',
        linkHover: 'hover:text-green-400 hover:outline-green-400 transition durantion-300 ease-in-out'
    }

    return (
        <header className="mt-7 max-w-[1024px] m-auto">
            <nav className="w-full flex gap-8 py-0.5 text-blue-500">
                <Link className={`${style.link} ${style.linkHover}`} href={'/'}>Home</Link>
                <Link className={`${style.link} ${style.linkHover}`} href={'/projetos'}>Profile</Link>
            </nav>
        </header>
    )
}