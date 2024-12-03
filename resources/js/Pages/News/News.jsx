import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Table from '@/Components/Table';

const News = (props) => {
    const { flash } = usePage().props

    return (
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
                            <Link href={route('news.create')} className="btn btn-warning lg:btn-sm md:btn-sm sm:btn-sm">Buat</Link>
                            <Table news={props.news} />
                        </div>
                    </div>
                </div>
            </div>

            {flash.message &&
                <>
                    <div className="toast">
                        <div className="alert alert-info">
                            <span>{flash.message}</span>
                        </div>
                    </div>
                </>
            }

        </AuthenticatedLayout>
    )
}

export default News