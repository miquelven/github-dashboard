import { Provider } from "@/components/ui/provider";
import { Box, Text } from "@chakra-ui/react";

export default function App() {
  return (
    <Provider>
      <Box
        bg="background"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontFamily="body" fontSize="2xl" color="textPrimary">
          Hello World
        </Text>
      </Box>
    </Provider>
  );
}
