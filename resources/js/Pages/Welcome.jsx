import AuthLayout from "@/Layouts/AuthLayout";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
        </>
    );
}

Welcome.layout = (page) => <AuthLayout children={page} title="" />;
