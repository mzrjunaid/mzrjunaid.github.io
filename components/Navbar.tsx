import Link from 'next/link'
import { SocialLinks } from '.'

const Navbar = () => {
    return (
        <header className='absolute w-full border-b px-3 '>
            <nav className='container mx-auto flex justify-between sm:justify-around items-center py-3'>
                <div>
                    <Link href={'/'} className='font-anton text-2xl font-extralight uppercase menu__link tracking-wider'>J{"</>"}Code</Link>
                </div>

                {/* NavBar */}
                <SocialLinks size={28} socialLinkStyle='gap-4' />
                {/* <div className='flex flex-row gap-7 font-roboto'>
                    <Link href={'#aboutMe'} className='menu__link'>About Me</Link>
                    <Link href={'#portfolio'} className='menu__link'>Portfolio</Link>
                    <Link href={'#contactMe'} className='menu__link'>Contact Me</Link>
                </div> */}
            </nav>
        </header>
    )
}

export default Navbar