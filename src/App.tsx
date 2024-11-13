import img from './assets/illustration-article.svg'
import avatar from './assets/image-avatar.webp'

export default function App() {
  return (
      <div className="bg-white p-5 m-5 rounded-2xl max-w-80 mx-auto">
        <img className="mx-auto rounded-md mb-5" src={img} alt="Ilustration Article" />
        <span className='bg-yellow-500 rounded-lg p-2 font-bold text-sm mt-5'>Learning</span>
        <span className='text-sm block mt-5'>Published 21 Dec 2023</span>
        <h1 className='text-xl font-extrabold mt-5 mb-5 text-nowrap'>HTML & CSS foundations</h1>
        <p className='text-sm text-gray-500'>These Language are the backbone of every website, defing structure, content, and presentation</p>
        <div className='flex justify-start items-center gap-3 mt-5'>
          <img src={avatar} className='w-9'/>
          <span className='font-extrabold'>Greg Hooper</span>
        </div>
      </div>
  )
}