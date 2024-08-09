import AuthLayout from "@/Layouts/AuthLayout";
import { Link, Head } from "@inertiajs/react";

export default function Dashboard({ auth, laravelVersion, phpVersion }) {
    return <></>;
}

Dashboard.layout = (page) => <AuthLayout children={page} title="Dashboard" />;
