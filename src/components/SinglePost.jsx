import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router'
import { getPost } from '../assets/API'

const SinglePost = () => {


    const { id } = useParams()
    console.log(id);


    const user = async () => {

        await getPost(id)
    }

    useCallback(() => {

    }, [])
    const memoizedCallback = useCallback(
        () => {
            // Your function logic here
        },
        [dependencies] // This function will be re-created only when dependencies change
    );


    return (
        <div>SinglePost</div>
    )
}

export default SinglePost