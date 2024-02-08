import { useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";

const TableComponent: React.FC<{
    label: string;
    headers: any[];
    data: any[][];
}> = ({ label, headers, data }) => {
    console.log(label, headers, data);
    return (
        <div className="component">
            <Table aria-label={label}>
                <TableHeader>
                    {headers.map((header) => (
                        <TableColumn>{header}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody>
                    {data.map((row, ind) => {
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
