import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Menu, Search } from 'lucide-react'
import Image from 'next/image'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'



const Mobilenav = () => {
    return (
        <nav className='md:hidden '>
            <Sheet >
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent className='flex flex-col justify-between items-end w-fit pt-10'>

                    <div className='flex justify-center items-center flex-col gap-4 w-fit'>
                        <span className='flex p-4 justify-end'>
                            <Bell />
                        </span>

                        <Link href='/' className='block dark:hidden'>
                            <Image
                                src='/icons/grid.svg'
                                width={40}
                                height={40}
                                alt='logo'
                            />
                        </Link>
                        <Link href='/' className='hidden dark:block p-1'>
                            <Image
                                src='/icons/grid-dark.svg'
                                width={26}
                                height={26}
                                alt='logo'
                            />
                        </Link>
                        <Link href='/'>
                            <Image
                                src='/icons/trend-up.svg'
                                width={24}
                                height={24}
                                alt='logo'
                            />
                        </Link>
                        <Link href='/'>
                            <Image
                                src='/icons/Icon.svg'
                                width={40}
                                height={40}
                                alt='logo'
                            />
                        </Link>
                        <Link href='/'>
                            <Image
                                src='/icons/box.svg'
                                width={24}
                                height={24}
                                alt='logo'
                            />
                        </Link>
                        <Link href='/'>
                            <Image
                                src='/icons/discount.svg'
                                width={24}
                                height={24}
                                alt='logo'
                            />
                        </Link>
                        <Link href='/'>
                            <Image
                                src='/icons/info.svg'
                                width={24}
                                height={24}
                                alt='logo'
                            />
                        </Link>
                        <ModeToggle />
                    </div>
                    <div className='flex mt-8 flex-col justify-center  gap-4 items-center w-fit px-4'>
                        <Link href='/'>
                            <Image
                                src='/icons/arrow-right.svg'
                                width={24}
                                height={24}
                                alt='logo'
                            />
                        </Link>
                        <Link href='/'>
                            <Image
                                src='/icons/setting.svg'
                                width={24}
                                height={24}
                                alt='logo'
                            />
                        </Link>
                        <Link href='/'>
                            <Image
                                src='/icons/logout.svg'
                                width={24}
                                height={24}
                                alt='logo'
                            />
                        </Link>
                    </div>

                </SheetContent>
            </Sheet>
        </nav>

    )
}

export default Mobilenav