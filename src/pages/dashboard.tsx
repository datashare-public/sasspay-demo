import { Flex, Title, Text, Code, Box } from "@mantine/core";
import Link from "next/link";
import { Prism } from "@mantine/prism";
import { DataShareDashboard } from "@datashare/react";

export default function Home() {
  return (
    <Flex
      direction="column"
      gap="xl"
      sx={{ width: 1200, marginRight: "auto", marginLeft: "auto" }}
    >
      <Box sx={{ width: 1200, minHeight: 400 }}>
        <DataShareDashboard dashboardId="394d7741-d143-45f9-909c-40e501482825" />
      </Box>
      <div style={{ width: "100%", height: 1, backgroundColor: "#ccc" }} />
      <Flex p="xl" gap="md" direction="column">
        <Title order={2}>{"<DataShareDashboard />"}</Title>
        <Text>
          A <Code>DataShareDashboard</Code> element respresents a full
          dashboard. It is best used when you want to combine multiple
          visualizations together.
        </Text>
        <Text>
          The only property on the dashboard is its <Code>dashboardId</Code>.
          For example, the React code for the above dashboard is as follows.
        </Text>
        <Prism language="tsx">
          {
            '<DataShareDashboard dashboardId="ed934b83-32ca-4a4f-80eb-ce0804632f14" />'
          }
        </Prism>
        <Text>
          If you are looking to build a visualization into other content, you
          will likely be better served by using a standalone{" "}
          <Link href="/visualization">DataShareVisualization</Link>.
        </Text>
      </Flex>
    </Flex>
  );
}
