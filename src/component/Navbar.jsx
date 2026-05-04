"use client";
import { Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { Bars, BookOpen } from '@gravity-ui/icons';
import { authClient, useSession } from "@/lib/auth-client";
import { redirect, usePathname } from "next/navigation";

const Navbar = () => {
    let { data } = useSession()
    let path = usePathname();

    async function logout() {
        await authClient.signOut()
        redirect("/login")
    } 
    
    return (
        <div>

            {/* Basic */}
            <nav className="fixed top-0 py-2 z-40 w-full border-b border-separator hidden lg:block bg-[#f8f6f1] backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <BookOpen className="h-8 w-8" color="#df8620" />
                    </div>
                    <ul className="flex items-center gap-8">
                        <li><Link className={`${path==='/'?'text-[#df8620]':'text-muted'} `} href="/">Home</Link></li>
                        <li><Link className={`${path==='/all-book'?'text-[#df8620]':'text-muted'} `} href="/all-book">All Book</Link></li>
                          {
                            data?.user ?
                                
                        <li><Link className={`${path==='/profile'?'text-[#df8620]':'text-muted'} `} href="/profile">Profile</Link></li>
                        :''
                          }
                    </ul>
                    <div className="space-x-3">
                        {
                            data?.user ?
                                <>
                                    <div className="flex items-center gap-4">
                                        <p>{data.user.name}</p>
                                        {/* <p>{user.email}</p> */}
                                        <Button onClick={() => logout()} variant="danger">Log Out</Button>
                                    </div>
                                </>
                                :
                                <>
                                    <Link href={"login"}>
                                        <Button>Login</Button>
                                    </Link>
                                    <Link href={"signup"}>
                                        <Button className={"bg-[#df8620] font-semibold rounded-md"}>Sign Up</Button>
                                    </Link>
                                </>
                        }
                    </div>
                </header>
            </nav>

            {/* With right-aligned content */}
            <nav className="fixed top-0 z-40 w-full border-b block lg:hidden border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <Dropdown>
                            <Button aria-label="Menu" variant="ghost" >
                                <Bars />
                            </Button>
                            <Dropdown.Popover>
                                <Dropdown.Menu>
                                    <Dropdown.Item id="new-file" textValue="New file">
                                        <Link className="text-[#df8620]" href="/">Home</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="copy-link" textValue="Copy link">

                                        <Link className="text-muted" href="/all-book">All Book</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                        <Link href="/">
                            <BookOpen className="h-8 w-8" color="#df8620" />
                        </Link>
                    </div>

                    <ul className="flex items-center gap-4">
                        <li><Button>Sign Up</Button></li>
                        <li><Button className="bg-[#fe9a00]">Login</Button></li>
                    </ul>
                </header>
            </nav>
        </div>
    );

}

export default Navbar;