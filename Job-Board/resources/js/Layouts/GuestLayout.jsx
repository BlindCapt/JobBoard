import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ title, children }) {
    return (
        <div className="flex">
            <aside className="bg-slate-600 w-1/5 min-h-screen">layout</aside>
            <div className="flex-col w-full">
                <header className=" h-36 bg-blue-800">
                    <div>{title}</div>
                    <div className="text-right pt-10">login</div>
                </header>
                <div className=" ">{children}</div>
            </div>
        </div>
    );
}
