import Image from 'next/image'

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <main className="bg-white h-screen w-screen flex justify-center items-center">
            <Image className="grayscale" src="https://raw.githubusercontent.com/claudioavgo/claudioavgo-nextjs/master/public/hearts_loading.gif" alt="me" width="128" height="128" />
        </main>
    )
  }