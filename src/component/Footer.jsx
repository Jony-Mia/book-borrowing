import { poppins } from '@/app/layout';
import { BookOpen, LogoFacebook as Facebook, Envelope as Mail, MapPin } from '@gravity-ui/icons';
import Link from 'next/link';

const Footer = () => {
    return (
        // <div className='relative'>
            <footer className={`bg-black p-8 m-auto text-white mt-15 ${poppins.className}`}>
                <div className=" py-16 grid grid-cols-1 mx-auto md:grid-cols-4 gap-10">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 font-serif text-xl font-bold mb-4">
                            <BookOpen className="h-6 w-6 text-[#fe9a00]" />
                            <span>Lumen Library</span>
                        </div>
                        <p className="text-sm text-parchment/70 leading-relaxed">
                            A modern digital reading room — curated stories, science, and tech, ready to borrow anytime.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-base font-semibold mb-4 text-accent">Explore</h4>
                        <ul className="space-y-2 text-sm text-parchment/80">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/books" className="hover:text-accent transition-colors">All Books</Link></li>
                            <li><Link href="/profile" className="hover:text-accent transition-colors">My Profile</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-base font-semibold mb-4 text-accent">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-parchment/80">
                            <li className="flex items-start gap-2">
                                <Mail className="h-4 w-4 mt-0.5 text-[#fe9a00]" />
                                <span>hello@lumenlibrary.app</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 text-[#fe9a00]" />
                                <span>14 Inkwell Lane, Reading Room District</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-base font-semibold mb-4 text-accent">Follow</h4>
                        <div className="flex gap-3">
                            <Link href="/" aria-label="Facebook" className="w-10 h-10 rounded-full border border-parchment/20 flex items-center justify-center hover:bg-accent hover:text-ink hover:border-accent transition-colors">
                                <Facebook className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-parchment/10">
                    <div className="container py-5 text-center text-xs text-parchment/60">
                        {/* © {new Date().getFullYear()} Lumen Library — Built with care for readers everywhere. */}
                        All right reserved by Jony Mia
                    </div>
                </div>
            </footer>
        // </div>
    );
};

export default Footer