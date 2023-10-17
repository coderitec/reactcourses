import Link from "next/link"
import { moviedata } from "../page"
import Image from "next/image"

export default function page({params}) {
    const moviedatas = moviedata.find(movie => movie.show.name.split(' ').join('-') === params.slug)
  return (
    <article>
        <h1>{moviedatas.show.name}</h1>
        <section className="flex items-start">
        <Image src={moviedatas.show.image == null ? '/john.avif' : moviedatas.show.image.original} alt={moviedatas.show.name} width={200} height={300}/>

        <p>
            {`${moviedatas.show.summary}`}
        </p>
        <aside>
            <h2>Show Info</h2>
            <h3><span>Network</span>
            <span><Link href={moviedatas.show.officialSite} target="_blank">{moviedatas.show.network.name}</Link></span>
            </h3>
        </aside>
        </section>
    </article>
  )
}
