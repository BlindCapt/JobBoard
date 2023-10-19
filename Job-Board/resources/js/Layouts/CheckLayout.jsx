import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Check({ auth, title, children }) {
    return (
        <div>
            {auth.user ? (
                <AuthenticatedLayout user={auth.user} header={title}>
                    {children}
                </AuthenticatedLayout>
            ) : (
                <GuestLayout title={title}>{children}</GuestLayout>
            )}
        </div>
    );
}
