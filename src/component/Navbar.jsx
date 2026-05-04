"use client";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import Link from "next/link";
import { Bars, BookOpen, Person, ArrowRightFromSquare } from '@gravity-ui/icons';
import { authClient, useSession } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { nunito } from "@/app/layout";
import BookLogo from "@/assets/book-logo.png"
import Image from "next/image";
const Navbar = () => {
    const { data } = useSession();
    const path = usePathname();
    const router = useRouter();

    const userInitials = data?.user?.name
        ? data.user.name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()
        : 'Name';

    async function logout() {
        await authClient.signOut();
        router.push("/login");
    }

    return (
        <div>
            {/* Desktop Navbar */}
            <nav className="fixed top-0 py-2 z-40 w-full border-b border-slate-200/50 hidden lg:block bg-white/95 backdrop-blur-lg shadow-sm">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className=" p-2 rounded-xl">
                                {/* <BookOpen className="h-6 w-6 text-white" /> */}
                                <Image src={BookLogo} alt={"Book Logo"} height="50" width="50" className="rounded-full" />
                            </div>
                            <span className={`${nunito.className} text-xl font-bold text-slate-900`}>Lumen Library</span>
                        </Link>
                    </div>

                    <ul className="flex items-center gap-8">
                        <li>
                            <Link
                                className={`px-3 py-2 rounded-lg transition-colors ${
                                    path === '/'
                                        ? 'text-[#df8620] bg-[#fff7ed] font-semibold'
                                        : 'text-slate-600 hover:text-[#df8620] hover:bg-slate-50'
                                }`}
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`px-3 py-2 rounded-lg transition-colors ${
                                    path === '/all-book'
                                        ? 'text-[#df8620] bg-[#fff7ed] font-semibold'
                                        : 'text-slate-600 hover:text-[#df8620] hover:bg-slate-50'
                                }`}
                                href="/all-book"
                            >
                                All Books
                            </Link>
                        </li>
                        {data?.user && (
                            <li>
                                <Link
                                    className={`px-3 py-2 rounded-lg transition-colors ${
                                        path === '/profile'
                                            ? 'text-[#df8620] bg-[#fff7ed] font-semibold'
                                            : 'text-slate-600 hover:text-[#df8620] hover:bg-slate-50'
                                    }`}
                                    href="/profile"
                                >
                                    Profile
                                </Link>
                            </li>
                        )}
                    </ul>

                    <div className="flex items-center gap-4">
                        {data?.user ? (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#df8620] to-[#fe9a00] text-white font-semibold shadow-md">
                                        {userInitials}
                                    </div>
                                    <div className="hidden md:block">
                                        <p className={`${nunito.className} text-sm font-semibold text-slate-900`}>
                                            {data.user.name}
                                        </p>
                                        <p className="text-xs text-slate-500">{data.user.email}</p>
                                    </div>
                                </div>

                                <Dropdown>
                                    {/* <Dropdown.Trigger> */}
                                        <Button variant="ghost" className="p-2">
                                            <Bars className="h-5 w-5" />
                                        </Button>
                                    {/* </Dropdown.Trigger> */}
                                    <Dropdown.Popover>
                                    
                                    <Dropdown.Menu aria-label="User menu">
                                        <Dropdown.Item key="profile" as={Link} href="/profile">
                                            <div className="flex items-center gap-2">
                                                <Person className="h-4 w-4" />
                                                My Profile
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item key="borrowed" as={Link} href="/borrowed">
                                            <div className="flex items-center gap-2">
                                                <BookOpen className="h-4 w-4" />
                                                My Borrowed Books
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item key="logout" onClick={logout} className="text-red-600">
                                            <div className="flex items-center gap-2">
                                                <ArrowRightFromSquare className="h-4 w-4" />
                                                Sign Out
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                    
                                    </Dropdown.Popover>
                                    </Dropdown>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link href="/login">
                                    <Button variant="ghost" className="font-medium">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button className="bg-gradient-to-r from-[#df8620] to-[#fe9a00] text-white font-semibold rounded-lg px-6 py-2 hover:shadow-lg transition-all">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </header>
            </nav>

            {/* Mobile Navbar */}
            <nav className="fixed top-0 z-40 w-full border-b block lg:hidden border-slate-200/50 bg-white/95 backdrop-blur-lg shadow-sm">
                <header className="flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <Dropdown>
                            <DropdownTrigger>
                                {/* <Button aria-label="Menu" variant="ghost" className="p-2"> */}
                                    <Bars className="h-5 w-5" />
                                {/* </Button> */}
                            </DropdownTrigger>
                            <Dropdown.Popover>
                            
                            <DropdownMenu aria-label="Navigation menu">
                                <DropdownItem key="home" as={Link} href="/">
                                    <span className={path === '/' ? 'text-[#df8620] font-semibold' : ''}>Home</span>
                                </DropdownItem>
                                <DropdownItem key="all-books" as={Link} href="/all-book">
                                    <span className={path === '/all-book' ? 'text-[#df8620] font-semibold' : ''}>All Books</span>
                                </DropdownItem>
                                {data?.user && (
                                    <DropdownItem key="profile" as={Link} href="/profile">
                                        <span className={path === '/profile' ? 'text-[#df8620] font-semibold' : ''}>Profile</span>
                                    </DropdownItem>
                                )}
                                {data?.user && (
                                    <DropdownItem key="borrowed" as={Link} href="/borrowed">
                                        My Borrowed Books
                                    </DropdownItem>
                                )}
                                {data?.user && (
                                    <DropdownItem key="logout" onClick={logout} className="text-red-600">
                                        Sign Out
                                    </DropdownItem>
                                )}
                            </DropdownMenu>
                            </Dropdown.Popover>
                        </Dropdown>

                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-[#df8620] to-[#fe9a00] p-1.5 rounded-lg">
                                {/* <BookOpen className="h-5 w-5 text-white" /> */}
                                <Image src={BookLogo} width="50" height="50" alt="book logo" className="rounded-full" />
                            </div>
                            <span className={`${nunito.className} text-lg font-bold text-slate-900`}>Lumen</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        {data?.user ? (
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#df8620] to-[#fe9a00] text-white font-semibold text-sm">
                                    {userInitials}
                                </div>
                            </div>
                        ) : (
                            <Link href="/login">
                                <Button size="sm" className="bg-gradient-to-r from-[#df8620] to-[#fe9a00] text-white font-semibold rounded-lg px-4">
                                    Login
                                </Button>
                            </Link>
                        )}
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;
//                                 <Dropdown.Menu>
//                                     <Dropdown.Item id="new-file" textValue="New file">
//                                         <Link className="text-[#df8620]" href="/">Home</Link>
//                                     </Dropdown.Item>
//                                     <Dropdown.Item id="copy-link" textValue="Copy link">

//                                         <Link className="text-muted" href="/all-book">All Book</Link>
//                                     </Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown.Popover>
//                         </Dropdown>
//                         <Link href="/">
//                             <BookOpen className="h-8 w-8" color="#df8620" />
//                         </Link>
//                     </div>

//                      <div className="space-x-3">
//                         {
//                             data?.user ?
//                                 <>
//                                     <div className="flex items-center gap-4">
//                                         {/* <p>{data?.user.name}</p> */}
//                                         {/* <p>{user.email}</p> */}

//                                         <div className='flex items-center gap-3'>
//                                             {
//                                                 data?.user?.image ? <>
//                                                     <Avatar size='lg'>
//                                                         <Avatar.Image
//                                                             alt={data?.user?.name}
//                                                             src={data?.user?.image}
//                                                         />
//                                                         <Avatar.Fallback>SM</Avatar.Fallback>
//                                                     </Avatar>
//                                                 </> :
//                                                     <>
//                                                         <Avatar size='lg'>
//                                                             <Avatar.Image
//                                                                 alt={data?.user?.name}
//                                                                 src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
//                                                             />
//                                                             <Avatar.Fallback>SM</Avatar.Fallback>
//                                                         </Avatar>
//                                                     </>
//                                             }
//                                             <div>
//                                                 <h1 className={`${nunito.className}  text-3xl `}> {data?.user?.name} </h1>
//                                                 <p>{data?.user?.email}</p>
//                                             </div>
//                                         </div>

//                                         <Button onClick={() => logout()} variant="danger">
//                                             <ArrowRightFromSquare />
//                                         </Button>
//                                     </div>
//                                 </>
//                                 :
//                                 <>
//                                     <Link href={"/login"}>
//                                         <Button>Login</Button>
//                                     </Link>
//                                     <Link href={"/signup"}>
//                                         <Button className={"bg-[#df8620] font-semibold rounded-md"}>Sign Up</Button>
//                                     </Link> 
//                                 </>
//                         }
//                     </div>

//                     {/* <ul className="flex items-center gap-4">
//                         <li><Button>Sign Up</Button></li>
//                         <li><Button className="bg-[#fe9a00]">Login</Button></li>
//                     </ul> */}
//                 // </header>
//             </nav>
//         </div>
//     );

// }
