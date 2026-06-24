'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    // تابع کمکی برای تشخیص اکتیو بودن لینک
    const isActive = (path) => {
        if (path === '/') return pathName === path;
        return pathName?.startsWith(path);
    };

    return (
        <div className="top-area">
            <div className="header-area">
                <nav className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle">
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link href="/" className="navbar-brand">
                                carvilla<span></span>
                            </Link>
                        </div>
                        <div id="navbar-menu">
                            <ul className="navbar-right">
                                <li className="scroll">
                                    <Link
                                        style={{ color: isActive('/') ? "blue" : undefined }}
                                        href="/"
                                    >
                                        خانه
                                    </Link>
                                </li>
                                <li className="scroll">
                                    <Link
                                        style={{ color: isActive('/services') ? "blue" : undefined }}
                                        href="/services"
                                    >
                                        سرویس ها
                                    </Link>
                                </li>
                                <li className="scroll">
                                    <Link
                                        style={{ color: isActive('/cars') ? "blue" : undefined }}
                                        href="/cars"
                                    >
                                        ماشین
                                    </Link>
                                </li>
                                <li className="scroll">
                                    <Link
                                        style={{ color: isActive('/login') ? "blue" : undefined }}
                                        href="/login"
                                    >
                                        ورود به صفحه کاربری
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleClick} className="">
                                        بازگشت به خانه
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;