import { FlexBox } from '../../../components/reusables/AllContainers'
import { Button } from '../../../components/reusables/AllButtons'

const NavBar = () => {

    const navMenuItems = [
        // {
        //     title: 'Services',
        //     url: ''
        // },
        // {
        //     title: 'About Us',
        //     url: ''
        // },
        // {
        //     title: 'Contact Us',
        //     url: ''
        // },
    ]


    return (
        <FlexBox className={'items-center justify-between px-20 sm:px-10 xs:px-8 bg-tw min-h-20'}>
            <img src='/logo/Logo_Light_Mode.svg' width={100} alt='logo' />

            <FlexBox className={'w-max xl:flex lg:flex md:flex sm:hidden xs:hidden'}>
                {navMenuItems.map((item, idx) => (
                    <a href={item.url} className='text-t2' key = {idx}>
                        {item.title}

                    </a>
                ))}

            </FlexBox>

            <FlexBox className={'w-max items-center'}>
                <Button className={'hover:bg-primary hover:text-tw text-t3 px-4 py-1 h-min rounded-full'}>Login</Button>
                <Button className={'bg-main-lightest hover:bg-secondary hover:text-tw text-t1 px-4 py-1 h-min rounded-full'}>Signup</Button>
            </FlexBox>


        </FlexBox>
    )
}

export default NavBar