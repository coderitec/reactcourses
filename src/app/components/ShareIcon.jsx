import {BsShare} from 'react-icons/bs'
import {AiFillLike, AiOutlineComment} from 'react-icons/ai'

export default function ShareIcon() {
  return (
    <p className='flex justify-evenly space-x-4'>
    <BsShare />
    <AiFillLike />
    <AiOutlineComment/>
    </p>
  )
}
