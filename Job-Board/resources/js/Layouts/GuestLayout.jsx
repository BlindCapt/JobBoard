import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ title, children }) {
    return (
        <div className="flex bg-background text-white">
            <aside className=" bg-asideGrey w-1/5 min-h-screen rounded-r-lg text-center">
                <div className="pt-5 pb-20">
                    <div className="">
                        <img src="logo.png" className="w-36" alt="" />
                    </div>
                </div>
                <Link
                    className=" bg-gray-800 hover:bg-green-400 p-3 px-8 rounded-2xl"
                    href={route("home")}
                >
                    Offres d'emploi
                </Link>
            </aside>
            <div className="flex-col w-full">
                <header className="container mx-auto px-5 py-10 h-36">
                    <div className="grid grid-cols-4">
                        <div className=" text-4xl uppercase font-semibold col-span-3">
                            {title}
                        </div>

                        <div className="text-right">
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </header>
                <body className="grid grid-cols-6">
                    <div className="col-span-5">{children}</div>
                    <div className="vertical-align: text-bottom"> fleche</div>
                </body>
            </div>
        </div>
    );
}
