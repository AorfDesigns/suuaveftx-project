"use client";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";

export default function App() {
  return (
    <div className="w-[90%] max-w-[800px] mx-auto mt-4 bg-[#FAFAFA] min-h-[380px] flex flex-col">
      <Table removeWrapper aria-label="Example static collection table" className="border-collapse border border-gray-300 flex-grow">
        <TableHeader className="border-b border-gray-300">
          <TableColumn className="text-center">DATE</TableColumn>
          <TableColumn className="text-center">PROJECT</TableColumn>
          <TableColumn className="text-center">CLIENT</TableColumn>
          <TableColumn className="text-center">EARNINGS</TableColumn>
        </TableHeader>

        <TableBody>
          {[
            { date: "12 May 2024", project: "Modern Fashion Attire Illustration", client: "SHOLA ADIN", earnings: "$700" },
            { date: "12 May 2024", project: "Modern Fashion Attire Illustration", client: "SHOLA ADIN", earnings: "$700" },
            { date: "12 May 2024", project: "Modern Fashion Attire Illustration", client: "SHOLA ADIN", earnings: "$700" },
            { date: "12 May 2024", project: "Modern Fashion Attire Illustration", client: "SHOLA ADIN", earnings: "$700" },
          ].map((user, index) => (
            <TableRow key={index} className="border-b border-gray-300">
              <TableCell className="text-center">{user.date}</TableCell>
              <TableCell className="text-blue-400 text-center">{user.project}</TableCell>
              <TableCell className="text-center">{user.client}</TableCell>
              <TableCell className="text-center">{user.earnings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
