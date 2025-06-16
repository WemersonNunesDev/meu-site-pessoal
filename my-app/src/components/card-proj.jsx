export default function CardProj({ title, description, className, classBtn, txtBtn }) {
    const condicao = txtBtn || 'Visualizar'
    
    return (
        <div className={`${className} flex flex-col`}>
            <strong className="text-[20px] font-semibold">{title}</strong>
            <p className="text-gray-300 my-2">{description}</p>
            <a href="http://" target="_blank" className={`${classBtn} mt-auto px-4 py-2`}>{condicao}</a>
        </div>
    )
}