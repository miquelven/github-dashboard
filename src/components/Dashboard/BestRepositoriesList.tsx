"use client";

import { Box, Text, VStack, Icon, Link, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function BestRepositoriesList() {
  const repos = [
    { name: "octodash", url: "https://github.com/seu-usuario/octodash" },
    {
      name: "react-awesome",
      url: "https://github.com/seu-usuario/react-awesome",
    },
    {
      name: "chakra-styled",
      url: "https://github.com/seu-usuario/chakra-styled",
    },
    { name: "vite-fast", url: "https://github.com/seu-usuario/vite-fast" },
    {
      name: "next-template",
      url: "https://github.com/seu-usuario/next-template",
    },
  ];

  return (
    <Box
      w="100%"
      maxW="300px"
      px="16px"
      py="20px"
      borderWidth="1px"
      borderColor="border"
      borderRadius="lg"
      bg="backgroundSecondary"
      boxShadow="md"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        mb={8}
        textAlign="center"
        fontFamily="body"
        color="textPrimary"
      >
        Melhores Repositórios do Tema
      </Text>

      <VStack align="start" gap={4} w="100%">
        {repos.map((repo) => (
          <Link
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
            w="100%"
          >
            <Button
              as="div"
              variant="ghost"
              w="100%"
              size="sm"
              fontWeight="normal"
              fontFamily="body"
              color="textPrimary"
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              pl="8px"
              gap={3}
              bg="backgroundItem"
              _hover={{
                bg: "background",
                transform: "scale(1.02)",
                transition: "all 0.2s ease",
              }}
            >
              <Icon as={FaGithub} boxSize={4} />
              <Text>{repo.name}</Text>
            </Button>
          </Link>
        ))}
      </VStack>
    </Box>
  );
}
