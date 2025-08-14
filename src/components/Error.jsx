import React from 'react'
import { Button, Typography } from '@material-tailwind/react'

const Error = () => {
    return (
        <div className='place-self-center mt-[15%]'>
            <Typography className='font-serif' variant='h1'>404</Typography>
            <Typography className='font-extralight' variant='paragraph'>Whoops... Page not found!!!</Typography> <br />
            <Button>Go Home</Button>
        </div>
    )
}

export default Error