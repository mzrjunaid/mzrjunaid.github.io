const Footer = () => {
    return (
        <footer className='py-2 px-3 fixed bottom-0 w-full border-t text-lg'>
            <div className='container flex justify-around items-center mx-auto'>
                <div className='hidden sm:flex flex-row gap-3 items-center '>
                    <span className='font-montserrat font-extrabold'>Junaid Mazhar</span>
                    <span className='hidden md:block'>- Copyright © 2023</span>
                </div>
                <div>
                    <span>Get in Touch -</span> <a href='mailto:mzrjunaid@gmail.com'>mzrjunaid@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer