"use client";

import { CloseButton, Input, InputGroup } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function SearchInput() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = value ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setValue("");
        inputRef.current?.focus();
      }}
    />
  ) : undefined;

  return (
    <InputGroup endElement={endElement} w={"320px"}>
      <Input
        ref={inputRef}
        placeholder="Busque por um tema ou tecnologia..."
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        pl="8px"
        borderRadius={"md"}
        borderColor="border"
      />
    </InputGroup>
  );
}
