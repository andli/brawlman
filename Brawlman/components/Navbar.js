import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="text-white text-lg font-bold">
                        Brawlman
                    </div>
                    <div className="space-x-4">
                        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                        <Link href="/teams" className="text-gray-300 hover:text-white">Teams</Link>
                        <Link href="/matches" className="text-gray-300 hover:text-white">Matches</Link>
                        <Link href="/auth/signin" className="text-gray-300 hover:text-white">Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;