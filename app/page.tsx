import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=""></div>
        <p className='text-4xl font-regular '>
          temporary website for jrjresq. <br></br> <br></br> follow him on {' '}
          <Link href='https://www.patreon.com/jrjresq' className='font-bold underline decoration-orange-400'>
             patreon
          </Link>
          {', '}
          <Link href='https://www.twitch.tv/jrjresq' className='font-bold underline decoration-purple-400'>
            twitch
          </Link>
          {', and '}
          <Link href='https://www.youtube.com/@jrjresq' className='font-bold underline decoration-red-400'>
            youtube
          </Link>
        </p>
        <div className=""></div>
    </main>
  )
}
