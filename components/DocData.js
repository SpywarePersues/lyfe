import data from "../src/data"
import Link from "next/link"

export default function DocData(){

    console.log(data)
    return(
        <div className="lg:grid grid-cols-3 gap-10 mx-auto w-9/12">
            {data.map((doc) => {
                    return (
                        <div key={doc.key} className="shadow-xl shadow-gray-300 rounded-lg py-5 px-7 font-Finlandica my-3 lg:my-0 cursor-pointer">
                            <Link key={doc.key} href={doc.slug}>
                                <div className="">
                                    <p className="text-xl font-semibold">{doc.name}</p>
                                    <p className="text-l font-bold">{doc.specialization}</p>
                                    <p className="pt-7">{doc.description}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}