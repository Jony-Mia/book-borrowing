"use client"
import { useSession } from '@/lib/auth-client';
import { BookContext } from '@/context/BookProvider';
import { Person } from '@gravity-ui/icons';
import { Avatar, Button, Card, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { nunito } from '../layout';


const ProfilePage = () => {
    const [bookList] = useContext(BookContext);
    const { data } = useSession();
    const user = data?.user;

    const userInitials = user?.name
        ? user.name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()
        : 'GR';

    const borrowedCount = bookList.length;
    const uniqueCategories = [...new Set(bookList.map((book) => book.category))];
    const favouriteCategory = uniqueCategories[0] || 'N/A';

    return (
        <div className="min-h-screen bg-[#f8f2ea] py-10">
            <div className="container mx-auto px-5">
                <div className="grid gap-8">
                    <section className="rounded-[2rem] border border-[#fde2c9] bg-white/95 p-8 shadow-[0_20px_60px_rgba(219,162,87,0.14)]">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-center gap-5">
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#df8620] to-[#fe9a00] text-white shadow-lg">
                                    <span className="text-3xl font-bold">{userInitials}</span>
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-[#df8620]">Member profile</p>
                                    <h1 className={`${nunito.className} text-4xl font-semibold text-slate-900`}>
                                        {user?.name || 'Guest Reader'}
                                    </h1>
                                    <p className="mt-2 text-sm text-slate-600">{user?.email || 'No email available'}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <Link href="/all-book">
                                    <Button className="rounded-3xl bg-gradient-to-r from-[#df8620] to-[#fe9a00] text-white hover:shadow-xl">
                                        Browse Books
                                    </Button>
                                </Link>
                                <Link href="/borrowed">
                                    <Button variant="secondary" className="rounded-3xl border-slate-200 bg-white text-slate-900 hover:border-[#df8620]">
                                        My Borrowed
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <Separator className="my-8" />

                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-3xl bg-[#fff7ed] p-6">
                                <p className="text-sm text-slate-500">Books borrowed</p>
                                <p className="mt-3 text-3xl font-bold text-slate-900">{borrowedCount}</p>
                            </div>
                            <div className="rounded-3xl bg-[#fff7ed] p-6">
                                <p className="text-sm text-slate-500">Favorite category</p>
                                <p className="mt-3 text-2xl font-semibold text-slate-900">{favouriteCategory}</p>
                            </div>
                            <div className="rounded-3xl bg-[#fff7ed] p-6">
                                <p className="text-sm text-slate-500">Member since</p>
                                <p className="mt-3 text-2xl font-semibold text-slate-900">Forever reading</p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-[2rem] border border-[#fde2c9] bg-white/95 p-8 shadow-[0_20px_60px_rgba(219,162,87,0.14)]">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-[#df8620]">Borrowed collection</p>
                                <h2 className={`${nunito.className} text-3xl font-semibold text-slate-900`}>Your latest reads</h2>
                            </div>
                            <p className="text-sm text-slate-500">{borrowedCount} items in your shelf</p>
                        </div>

                        {borrowedCount === 0 ? (
                            <div className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center">
                                <p className="text-xl font-semibold text-slate-900">Nothing borrowed yet</p>
                                <p className="mt-3 text-sm text-slate-600">Start exploring the library and borrow your first book.</p>
                                <div className="mt-6 flex justify-center">
                                    <Link href="/all-book">
                                        <Button className="rounded-full bg-gradient-to-r from-[#df8620] to-[#fe9a00] text-white px-8 py-3 hover:shadow-xl">
                                            Browse the library
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {bookList.slice(0, 10).map((book) => (
                                    <BookCard key={book.id} book={book} />
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

const BookCard = ({ book }) => {
    return (
        <Card className="overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={book.image_url}
                    alt={book.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow">
                    {book.category}
                </span>
            </div>
            <div className="p-5">
                <h3 className={`${nunito.className} text-xl font-semibold text-slate-900 line-clamp-2`}>{book.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                    <Person className="h-4 w-4 text-[#df8620]" />
                    {book.author}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600 line-clamp-3">{book.description}</p>
                <div className="mt-6 flex items-center justify-between gap-3">
                    <Link href={`/bookDetails/${book.id}`}>
                        <Button className="rounded-full bg-[#df8620] px-5 py-2 text-white hover:shadow-xl">
                            View
                        </Button>
                    </Link>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {book.available_quantity} available
                    </span>
                </div>
            </div>
        </Card>
    );
};
export default ProfilePage;