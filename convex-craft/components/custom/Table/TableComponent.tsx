import { useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";

const TableComponent = (props: any) => {
    return (
        <div>
            <Table aria-label={props.label} isStriped={props.isStriped}>
                <TableHeader>
                    {props.headers.map((header: string) => (
                        <TableColumn>{header}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody>
                    {props.data.map((row: string[], ind: number) => {
                        return (
                            <TableRow key={ind}>
                                {row.map((col) => {
                                    return <TableCell>{col}</TableCell>;
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableComponent;
