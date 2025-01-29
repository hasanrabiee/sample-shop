'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
const NotFoundPage = () => {
    return ( <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src='/images/logo.svg' width={48} height={48} alt='logo'/>
        <div className='p-6 rounded-large shadow-md text-center w-1/3'>
            <h1 className='text-3xl font-bold mb-4'>
                Not Found
            </h1>

            <p className='text-destructive'>
                The page you are looking for does not exist.
            </p>
            <Button variant={'outline'} className='mt-4' onClick= {() => window.location.href = '/'}>
                Go Homepage
            </Button>
        </div>
    </div>);
}
 
export default NotFoundPage;