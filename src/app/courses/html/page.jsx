import Image from 'next/image'
import ShareIcon from '@/app/components/ShareIcon'
import Link from 'next/link'
import { courses } from '../page'

const courseHTML = courses.filter(course => course.category === 'html')

const courseData = courseHTML.map(course => (
    <article key={course.id} className='flex flex-col justify-center items-center p-2 border-4 border-yellow-300 rounded-xl'>
      <h2>{course.title}</h2>
      <Link href={`/courses/${course.title.split(' ').join('-')}`}>
      <Image src={`https://robohash.org/${course.title}`} alt={course.title} width={400} height={400}/>
      </Link>
      <p>Level: {course.level}</p>
        <ShareIcon />
    </article>
  ))

export default function HTML() {
  return (
    <section className='grid md:grid-cols-3 gap-3 grid-cols-1'>
      {courseData}
    </section>
  )
}