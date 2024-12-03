import React, { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

const NewsCreate = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [upload, setUpload] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, description, category, upload };
        router.post(route('news.store'), data);

        setTitle('');
        setDescription('');
        setCategory('');
        setUpload('');
    }

    return (
        (
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        News
                    </h2>
                }
            >
                <Head title="News" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <Link href={route('news.index')} className="btn btn-neutral lg:btn-xs md:btn-sm sm:btn-sm float-end">kembali</Link>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Title</span>
                                        <span className="label-text-alt hidden"></span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full lg:input-sm md:input-sm" onChange={(e) => setTitle(e.target.value)} />
                                    <div className="label">
                                        <span className="label-text-alt hidden"></span>
                                        <span className="label-text-alt hidden"></span>
                                    </div>
                                </label>
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Description</span>
                                        <span className="label-text-alt hidden"></span>
                                    </div>
                                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio" onChange={(e) => setDescription(e.target.value)}></textarea>
                                    <div className="label">
                                        <span className="label-text-alt hidden"></span>
                                        <span className="label-text-alt hidden"></span>
                                    </div>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Upload gambar</span>
                                        <span className="label-text-alt hidden"></span>
                                    </div>
                                    <input type="file" className="file-input file-input-bordered lg:file-input-sm w-full" onChange={(e) => setUpload(e.target.files[0])} />
                                    <div className="label">
                                        <span className="label-text-alt hidden"></span>
                                        <span className="label-text-alt hidden"></span>
                                    </div>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Category</span>
                                        <span className="label-text-alt hidden"></span>
                                    </div>
                                    <select className="select select-bordered lg:select-md" onChange={(e) => setCategory(e.target.value)}>
                                        <option disabled selected>Pick one</option>
                                        <option defaultValue={'Star Wars'}>Star Wars</option>
                                        <option defaultValue={'Harry Potter'}>Harry Potter</option>
                                        <option defaultValue={'Lord of the Rings'}>Lord of the Rings</option>
                                        <option defaultValue={'Planet of the Apes'}>Planet of the Apes</option>
                                        <option defaultValue={'Star Trek'}>Star Trek</option>
                                    </select>
                                    <div className="label">
                                        <span className="label-text-alt hidden"></span>
                                        <span className="label-text-alt hidden"></span>
                                    </div>
                                </label>
                                <button className='btn btn-neutral btn-sm' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        )
    )
}

export default NewsCreate