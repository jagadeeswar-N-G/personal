import Discover from '@/components/Discover'
import Motion from '@/components/Motion'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-20">
      {/* <Discover/> */}
      <Motion/>
    </main>
  )
}