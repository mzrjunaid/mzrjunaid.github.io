export default function Home() {
  return (
    <section className="mx-auto container px-2 py-14 flex flex-col md:flex-row gap-2">
      <div className='w-full md:w-3/4 md:flex-1 flex items-center justify-center'>
      </div>
      <div className='w-full flex-1 flex justify-center items-center font-mono'>
        <div className='bg-slate-400 bg-opacity-30 p-10 rounded-3xl flex flex-col gap-3'>
          <h1 className='text-2xl md:text-4xl'>Hi, I am <span className='font-montserrat font-semibold'>Junaid Mazhar</span></h1>
          <div className='text-lg md:text-3xl flex flex-row gap-2'><span>I develop</span> Front-End Websites</div>
        </div>
      </div>
    </section>
  )
}