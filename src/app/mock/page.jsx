import Image from 'next/image'
import {BsPersonUp } from 'react-icons/bs'
const names = [
    { name: 'samuel', surname: 'Doe', age: 30 },
    { name: 'victor', surname: 'Smith', age: 25 },
    { name: 'ife', surname: 'Johnson', age: 35 },
    { name: 'iniubong', surname: 'Wilson', age: 28 },
    { name: 'badmos', surname: 'Brown', age: 40 },
    { name: 'paul', surname: 'Miller', age: 22 },
    { name: 'peter', surname: 'Davis', age: 32 },
    { name: 'john', surname: 'Anderson', age: 29 },
    { name: 'michael', surname: 'Harris', age: 38 },
    { name: 'miracle', surname: 'Moore', age: 27 }
]
const students = names.map((student,index) => (
    <li key={index} className='flex flex-col items-center gap-x-3 pb-4'>
        {/* <BsPersonUp /> */}
        <Image src={`/${student.name}.avif`} alt={`${student.name} ${student.surname}`} width={400} height={400} className='h-[250px]' title={`I am ${student.surname.toLowerCase()}, ${student.name} and I am ${student.age} yrs old`}/>
        <h2>
        {student.name.replace(student.name[0], student.name[0].toUpperCase())}
        </h2>
        <p>{student.age}</p>
    </li>
))

export default function page() {
  return (
    <ol className='pl-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {students}
    </ol>
  )
}

