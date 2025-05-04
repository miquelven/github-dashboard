"use client";

import { Box, Container, Separator, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import ExportCsvButton from "./ExportCsvButton";

export default function Header() {
  return (
    <header>
      <Container maxW="7xl" mx="auto" pt="24px">
        <Box display="flex" alignItems="flex-end">
          <Logo />
          <Box display="flex" gap="4" ml="auto">
            <SearchInput />
            <ExportCsvButton data={[]} />
          </Box>
        </Box>
      </Container>
      <Stack mt="12px">
        <Separator size="xs" borderColor="border" />
      </Stack>
    </header>
  );
}
