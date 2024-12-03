import CardList from '@/Components/Homepages/CardList'
import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'

const Homepage = (props) => {

    return (
        <div className='min-h-screen'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-8'>
                {props.data.map((item, index) => {
                    return (
                        <CardList key={index} data={item} />
                    )
                })}

            </div>
        </div>
    )
}

export default Homepage