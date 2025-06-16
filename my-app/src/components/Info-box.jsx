export default function InfoBox({ tag, bio, description, msg, redes  }) {
    return (
        <div className="outline-2 outline-blue-500 py-4 px-4 flex flex-col rounded-2xl bg-gray-900">
            <span className="bg-slate-100 max-w-24 text-center text-gray-900 font-semibold px-4 py-2 rounded-2xl">{tag}</span>
            <p className=" my-2">{bio}</p>
            <p>{description}</p>
            <p className="my-2">{msg}</p>
            <section>
                <span>{redes}</span>
            </section>
        </div>
    )
}