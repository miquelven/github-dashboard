"use client";

import { Button, HStack } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

export type ExportCsvButtonProps = {
  data: Record<string, any>[];
  filename?: string;
};

export default function ExportCsvButton({
  data,
  filename = "export",
}: ExportCsvButtonProps) {
  const handleExport = () => {
    if (!data.length) return;

    const header = Object.keys(data[0]).join(",");
    const rows = data.map((row) =>
      Object.values(row)
        .map((value) => `"${String(value).replace(/"/g, '""')}"`) // trata aspas dentro de texto
        .join(",")
    );

    const csvContent = [header, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleExport}
      variant="solid"
      size="sm"
      color="background"
      bg="blue"
      _hover={{ bg: "blue", opacity: 0.8 }}
      borderRadius="md"
      px={4}
      py={2}
    >
      <HStack>
        <FiDownload />
        <span>Exportar CSV</span>
      </HStack>
    </Button>
  );
}
