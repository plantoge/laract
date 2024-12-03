import { Link } from '@inertiajs/react'
import React from 'react'

const Table = (props) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.news.map((news, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{news.title}</td>
                                <td>{news.description}</td>
                                <td>{news.category}</td>
                                <td>{news.author}</td>
                                <td>
                                    <Link href={route('news.edit', news.id)} className="btn btn-warning btn-sm w-full">Edit</Link>
                                    <Link href={route('news.delete', news.id)} method='delete' className="btn btn-accent btn-sm w-full">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default Table