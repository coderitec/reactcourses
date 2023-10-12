import { courses } from "../page"
import Image from "next/image"
import {SiReactquery} from 'react-icons/si'

export default function page({params}) {

    const courseInfo = courses.find(course => course.title.split(' ').join('-') === params.slug)

    
  return (
    <section className="w-3/5 m-auto">
        <h1 className="text-center uppercase border-b-8 border-dashed py-4 text-3xl">{courseInfo.title}</h1>
        <p className="text-center uppercase py-4 text-2xl">{courseInfo.category}</p>
        <p className="text-center capitalize py-4 text-2xl">{courseInfo.level}</p>

        <Image src={`https://robohash.org/${courseInfo.title}`} alt={courseInfo.title} width={400} height={400} className="rounded-full border-8 border-amber-400 border-solid m-auto"/>

        <ol>
            {courseInfo.description.map(list => (
                <li key={Math.random()} className="flex items-center space-x-2 py-2">
                    <SiReactquery />
                    <span>{list}</span>
                </li>
            ))}
        </ol>

    </section>
  )
}
