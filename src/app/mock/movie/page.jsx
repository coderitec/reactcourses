import Image from 'next/image'
import Link from 'next/link'
import { AiTwotoneStar } from 'react-icons/ai'

export let moviedata = []

async function movieApi(){
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all', {cache : 'no-cache'})

    const data = response.json() 

    return data
}

export default async function page() {
    const data = await movieApi()
    moviedata = data

    const movies = data.map(movie => (
        <section key={movie.show.id}>
            <Link href={`/mock/movie/${movie.show.name.split(' ').join('-')}`}>
            <Image src={movie.show.image == null ? '/john.avif' : movie.show.image.original} alt={movie.show.name} width={200} height={300}/>
            </Link>

            <h2>{movie.show.name}</h2>
            <span className='flex items-center gap-x-2'>
            <AiTwotoneStar />
            <p>{movie.show.rating.average > 0 ? movie.show.rating.average: 'No rating'}</p>
            </span>
        </section>
    ))
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {movies}
    </div>
  )
}
