import { Flex, Title, Text, Code, Box } from "@mantine/core";
import Link from "next/link";
import { Prism } from "@mantine/prism";
import { DataShareExplorer } from "@datashare/react";

export default function Home() {
  return (
    <Flex
      direction="column"
      gap="xl"
      sx={{ maxWidth: 1200, marginRight: "auto", marginLeft: "auto" }}
    >
      <Box sx={{ width: "100%", height: 800, marginTop: 20 }}>
        <DataShareExplorer assistant />
      </Box>
      <div style={{ width: "100%", height: 1, backgroundColor: "#ccc" }} />
      <Flex p="xl" gap="md" direction="column">
        <Title order={2}>{"<DataShareExplorer />"}</Title>
        <Text>
          A <Code>DataShareExplorer</Code> element allows your users to freely
          explore their data using both SQL and natural language.
        </Text>
        <Text>The React code for the above explorer is as follows.</Text>
        <Prism language="tsx">{"<DataShareExplorer assistant />"}</Prism>
        <Text>
          The `assistant` property can be ommitted if you do not wish to allows
          users to query data using natural language.
        </Text>
      </Flex>
    </Flex>
  );
}
