import Link from 'next/link'
import { FaLinkedin, FaSquareFacebook, FaSquareGithub, FaSquareInstagram } from 'react-icons/fa6'

interface SocialProps {
    socialLinkStyle?: string;
    size: number;
}

const SocialLinks = ({ size, socialLinkStyle }: SocialProps) => {
    return (
        <div className={`flex flex-row gap-2 parent ${socialLinkStyle}`}>
            <Link href={'https://www.linkedin.com/in/junaidmazhar/'} target='__blank'><FaLinkedin size={size} /></Link>
            <Link href={'https://github.com/mzrjunaid'} target='__blank'><FaSquareGithub size={size} /></Link>
            <Link href={'https://www.facebook.com/m.junaidmazhar'} target='__blank'><FaSquareFacebook size={size} /></Link>
            <Link href={'https://www.instagram.com/junaid.muhamd/'} target='__blank'><FaSquareInstagram size={size} /></Link>
        </div>
    )
}

export default SocialLinks