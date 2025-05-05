"use client";

import { Box, Text } from "@chakra-ui/react";
import { Chart, useChart } from "@chakra-ui/charts";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

export default function TopRepositoriesChart() {
  const chart = useChart({
    data: [
      { allocation: 60, type: "Stock", color: "#f85149" },
      { allocation: 45, type: "Crypto", color: "#58a6ff" },
      { allocation: 12, type: "ETF", color: "#3fb950" },
      { allocation: 4, type: "Cash", color: "#ffcc00" },
    ],
  });

  return (
    <Box
      mb={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        fontFamily="body"
        color="textPrimary"
        mb={4}
      >
        Top Repositórios por Estrelas
      </Text>

      <Chart.Root maxH="340px" w="100%" maxW="600px" chart={chart}>
        <BarChart data={chart.data}>
          <CartesianGrid stroke={chart.color("border")} vertical={false} />
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey={chart.key("type")}
            tick={{
              fill: "currentColor",
              fontFamily: "Fira Code",
              fontSize: 12,
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tick={{
              fill: "currentColor",
              fontFamily: "Fira Code",
              fontSize: 12,
            }}
          />
          <Bar
            isAnimationActive={true}
            animationDuration={500}
            dataKey={chart.key("allocation")}
            radius={[4, 4, 0, 0]}
          >
            {chart.data.map((item) => (
              <Cell key={item.type} fill={item.color} />
            ))}
          </Bar>
        </BarChart>
      </Chart.Root>
    </Box>
  );
}
