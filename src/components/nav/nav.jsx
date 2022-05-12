import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { TiGroupOutline } from 'react-icons/ti'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsArrowDownCircle } from 'react-icons/bs'

function NavBar() {
    return (
        <div className='navigation'>
            <a href="#home">
                <AiOutlineHome className='icon active-nav' />
            </a>
            <a href="#about">
                <AiOutlineUser className='icon' />
            </a>
            <a href="#projects">
                <TiGroupOutline className='icon' />
            </a>
            <a href="#contact">
                <BiMessageRoundedDots className='icon' />
            </a>
            <a href="#footer">
                <BsArrowDownCircle className='icon' />
            </a>
        </div>
    )
}

let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        changeActive();
        icon.classList.add('active-nav');
    });
});

function changeActive() {
    Icons.forEach((icon)=>{
        icon.classList.remove('active-nav');
    });
}

export default NavBar;