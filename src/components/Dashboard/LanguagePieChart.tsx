"use client";

import { Box, Text } from "@chakra-ui/react";
import { Chart, useChart } from "@chakra-ui/charts";
import { Cell, Pie, PieChart, Sector, Tooltip } from "recharts";
import { useState } from "react";

export default function LanguagePieChart() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const chart = useChart({
    data: [
      { name: "JavaScript", value: 400, color: "#f7df1e" },
      { name: "TypeScript", value: 300, color: "#3178c6" },
      { name: "Python", value: 200, color: "#3776ab" },
      { name: "Rust", value: 100, color: "#dea584" },
      { name: "Other", value: 50, color: "#8b949e" },
    ],
  });

  return (
    <Box
      mb={8}
      display="flex"
      justifyContent={"center"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        fontFamily="body"
        color="textPrimary"
      >
        Distribuição de Linguagens
      </Text>

      <Chart.Root boxSize="320px" chart={chart}>
        <PieChart>
          <Tooltip
            cursor={false}
            animationDuration={200}
            content={<Chart.Tooltip hideLabel />}
          />
          <Pie
            data={chart.data}
            dataKey={chart.key("value")}
            nameKey={chart.key("name")}
            innerRadius={80}
            outerRadius={140}
            strokeWidth={1}
            isAnimationActive={true}
            animationDuration={500}
            activeIndex={activeIndex}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            activeShape={(props: any) => (
              <Sector
                {...props}
                outerRadius={props.outerRadius + 10}
                style={{ transition: "all 0.3s ease" }}
              />
            )}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(undefined)}
          >
            {chart.data.map((item) => (
              <Cell
                key={item.name}
                fill={item.color}
                style={{ transition: "all 0.3s ease" }}
              />
            ))}
          </Pie>
        </PieChart>
      </Chart.Root>
    </Box>
  );
}
