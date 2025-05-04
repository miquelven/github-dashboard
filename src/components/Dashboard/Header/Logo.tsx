import { Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Octodash Logo"
      height="40px"
      objectFit="contain"
    />
  );
}
