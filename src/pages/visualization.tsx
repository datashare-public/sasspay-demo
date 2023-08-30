import { Box, Flex, Title, Text, Code } from "@mantine/core";
import Link from "next/link";
import { Prism } from "@mantine/prism";
import { DataShareVisualization } from "@datashare/react";

export default function Home() {
  return (
    <Flex
      direction="column"
      gap="xl"
      sx={{ maxWidth: 1200, marginRight: "auto", marginLeft: "auto" }}
    >
      <Box sx={{ width: "100%", height: 400 }}>
        <DataShareVisualization visualizationId="f9c1bbd6-e668-4e3b-ada4-b45a2425c5f5" />
      </Box>
      <div style={{ width: "100%", height: 1, backgroundColor: "#ccc" }} />
      <Flex p="xl" gap="md" direction="column">
        <Title order={2}>{"<DataShareVisualization />"}</Title>
        <Text>
          A <Code>DataShareVisualization</Code> element respresents a standalone
          visualization. It is best used when you are embedding a single
          visualization inside of other content.
        </Text>
        <Text>
          The only property on the visualization is its{" "}
          <Code>visualizationId</Code>. For example, the React code for the
          above visualization is as follows.
        </Text>
        <Prism language="tsx">
          {
            '<DataShareVisualization visualizationId="f9c1bbd6-e668-4e3b-ada4-b45a2425c5f5" />'
          }
        </Prism>
        <Text>
          If you are looking to build a dashboard, you will likely be better
          served by using a <Link href="/dashboard">DataShareDashboard</Link>{" "}
          rather than trying to combine multiple visualizations into a dashboard
          yourself.
        </Text>
      </Flex>
    </Flex>
  );
}
