/**
 * @fileoverview Header component that displays the header of the website.
 * @description The header component displays the header of the website. It contains the name of the website and the login and sign up buttons.
 *
 *
 *while not authenticated, display login and sign up buttons
 * while authenticated, display logout button, and user profile button
 */
interface HeaderProps {
    isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({isAuthenticated = false}: HeaderProps) => {
    return (
        <header className={"flex justify-between px-3 py-2 shadow"}>
            <h1 className={'text-[#1368CE] text-2xl italic font-bold'}>Big Brain</h1>
            {isAuthenticated ? (
                <div>
                    <button className={'hover:underline bg-white text-zinc-800 rounded-md px-4 py-2 font-semibold'}>Logout
                    </button>
                    <button className={'hover:underline bg-white text-zinc-800 rounded-md px-4 py-2 font-semibold'}>Profile
                    </button>
                </div>
            ) : (
                <div>
                    <button className={'hover:underline bg-white text-zinc-800 rounded-md px-4 py-2 font-semibold'}>Login
                    </button>
                    <button className={'hover:underline bg-white text-zinc-800 rounded-md px-4 py-2 font-semibold'}>Sign
                        Up
                    </button>
                </div>
            )
            }

        </header>
    );
}
export default Header;