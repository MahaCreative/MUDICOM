import CardComponent from "@/Components/Card/Card";
import Pagination from "@/Components/Pagination/Pagination";
import Table from "@/Components/Table/Table";
import AuthLayout from "@/Layouts/AuthLayout";
import { router } from "@inertiajs/react";
import { Person } from "@mui/icons-material";
import { Card, debounce } from "@mui/material";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";

export default function Index(props) {
    const { data: jabatan, links, current_page } = props.jabatan;
    const total = props.total;
    const [showAllCard, setShowAllCard] = useState(4);
    const [params, setParams] = useState({ load: 10, page: 1, search: "" });
    const reload = useCallback(
        debounce((query) => {
            router.get(
                route("manage-jabatan"),
                // pickBy(query), ini harus di import dari lodash
                { ...query, page: query.search ? 1 : query.page },
                {
                    preserveScroll: true,
                    preserveState: true,
                }
            );
        }, 300),
        []
    );
    useEffect(() => reload(params), [params]);
    return (
        <div>
            {/* Card Information */}

            {jabatan.length && (
                <div className="w-full py-3">
                    <div
                        className={`grid ${
                            jabatan.length % 2 == 0
                                ? "md:grid-cols-4"
                                : "md:grid-cols-3"
                        }   items-start gap-2 grid-cols-2`}
                    >
                        {jabatan.map(
                            (item, key) =>
                                key < showAllCard && (
                                    <CardComponent key={key}>
                                        <div className="flex justify-between gap-3 items-center">
                                            <CardComponent.Icon>
                                                <Person
                                                    color="inherit"
                                                    fontSize="inherit"
                                                />
                                            </CardComponent.Icon>
                                            <div className="text-right">
                                                <p className="font-satoshi font-extrabold text-xl md:text-3xl">
                                                    {item.petugas_count}
                                                </p>
                                                <p className="capitalize text-xs">
                                                    total jabatan{" "}
                                                    {item.nama_jabatan}
                                                </p>
                                            </div>
                                        </div>
                                    </CardComponent>
                                )
                        )}
                    </div>
                    <div className="w-full flex justify-center items-center py-2">
                        {jabatan.length !== showAllCard ? (
                            <button
                                className="text-xs hover:text-slate-800 usetransition"
                                onClick={() => setShowAllCard(jabatan.length)}
                            >
                                Lihat Semua Card{" "}
                            </button>
                        ) : (
                            <button
                                className="text-xs hover:text-slate-800 usetransition"
                                onClick={() => setShowAllCard(4)}
                            >
                                Tutup Card{" "}
                            </button>
                        )}
                    </div>
                </div>
            )}
            <Table
                length={total}
                links={links}
                current_page={current_page}
                params={params}
                setParams={setParams}
            >
                <Table.Thead>
                    <Table.Th className={"w-[100px] text-center"}>No</Table.Th>
                    <Table.Th>Nama Jabatan</Table.Th>
                    <Table.Th>Gaji</Table.Th>
                    <Table.Th>Created at</Table.Th>
                    <Table.Th>Updated at</Table.Th>
                    <Table.Th>Aksi</Table.Th>
                </Table.Thead>
                <Table.Tbody>
                    {jabatan.length > 0 &&
                        jabatan.map((item, key) => (
                            <Table.Tr key={key}>
                                <Table.Td className={"w-[100px] text-center"}>
                                    {key + 1}
                                </Table.Td>
                                <Table.Td className={""}>
                                    {item.nama_jabatan}
                                </Table.Td>
                                <Table.Td className={""}>{item.gaji}</Table.Td>
                                <Table.Td>
                                    {moment(item.created_at).format("LL")}
                                </Table.Td>
                                <Table.Td>
                                    {moment(item.update_at).format("LL")}
                                </Table.Td>
                                <Table.Td>
                                    <Table.Menu>
                                        <Table.LinkMenu
                                            onClick={() => showHandler(item)}
                                        >
                                            Show
                                        </Table.LinkMenu>
                                        <Table.LinkMenu
                                            onClick={() => editHandler(item)}
                                        >
                                            Edit
                                        </Table.LinkMenu>
                                        <Table.LinkMenu
                                            onClick={() => deleteHandler(item)}
                                        >
                                            Delete
                                        </Table.LinkMenu>
                                    </Table.Menu>
                                </Table.Td>
                            </Table.Tr>
                        ))}
                </Table.Tbody>
            </Table>
        </div>
    );
}

Index.layout = (page) => (
    <AuthLayout children={page} title={"Manage Jabatan"} />
);
