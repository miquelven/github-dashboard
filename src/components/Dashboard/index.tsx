import { Container, Grid, GridItem } from "@chakra-ui/react";
import LanguagePieChart from "./LanguagePieChart";
import TopRepositoriesChart from "./TopRepositoriesChart";

export default function DashboardArea() {
  return (
    <Container maxW="7xl" mx="auto" pt="40px">
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem display="flex" justifyContent="start">
          <LanguagePieChart />
        </GridItem>

        <GridItem display="flex" justifyContent="center">
          <TopRepositoriesChart />
        </GridItem>

        {/* <GridItem display="flex" justifyContent="end">
          <LanguagePieChart />
        </GridItem> */}
      </Grid>
    </Container>
  );
}
