import { Button } from "@heroui/react";
import Link from "next/link";
import {BookOpen} from '@gravity-ui/icons';
const Navbar = () => {
    return (
        <div>

            {/* Basic */}
            <nav className="sticky top-0 py-2 z-40 w-full border-b border-separator hidden lg:block bg-[#f8f6f1] backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <BookOpen className="h-8 w-8" color="#df8620" />
                    </div>
                    <ul className="flex items-center gap-8">
                        <li><Link className="text-[#df8620]" href="/">Home</Link></li>
                        <li><Link className="text-muted" href="/allBook">All Book</Link></li>
                    </ul>
                <div className="space-x-3">
                    <button>Login</button>
                    <Button className={"bg-[#df8620] font-semibold rounded-md"}>Sign Up</Button>
                </div>
                </header>
            </nav>

            {/* With right-aligned content */}
            <nav className="sticky top-0 z-40 w-full border-b block lg:hidden border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div>Logo</div>
                    <ul className="flex items-center gap-4">
                        <li><Button>Sign Up</Button></li>
                    </ul>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;