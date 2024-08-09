import Table from "@/Components/Table/Table";
import AuthLayout from "@/Layouts/AuthLayout";
import React from "react";

export default function Index({ jabatan }) {
    return (
        <div>
            <Table>
                <Table.thead>
                    <Table.th className={"w-[100px] text-center"}>No</Table.th>
                    <Table.th>Nama Jabatan</Table.th>
                    <Table.th>Gaji</Table.th>
                    <Table.th>Aksi</Table.th>
                </Table.thead>
                <Table.tbody>
                    {jabatan.length > 0 &&
                        jabatan.map((item, key) => (
                            <Table.tr>
                                <Table.td className={"w-[100px] text-center"}>
                                    {key + 1}
                                </Table.td>
                                <Table.td className={""}>
                                    {item.nama_jabatan}
                                </Table.td>
                                <Table.td className={""}>{item.gaji}</Table.td>
                                <Table.td>
                                    <Table.menu>
                                        <Table.link>Show</Table.link>
                                        <Table.link>Show</Table.link>
                                        <Table.link>Show</Table.link>
                                    </Table.menu>
                                </Table.td>
                            </Table.tr>
                        ))}
                </Table.tbody>
            </Table>
        </div>
    );
}

Index.layout = (page) => (
    <AuthLayout children={page} title={"Manage Jabatan"} />
);
