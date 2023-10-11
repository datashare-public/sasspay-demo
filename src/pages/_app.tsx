import "@/styles/globals.css";
import { Header, Flex, MantineProvider, Box } from "@mantine/core";
import type { AppProps } from "next/app";
import { DataShareProvider } from "@datashare/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Menu from "@/components/Menu";

interface MyAppProps extends AppProps {
  dataShareEndUserToken: string;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const [userId, setUserId] = useState("1");
  const router = useRouter();

  const fetchEndUserToken = async () => {
    const user = router.asPath.split("?user=")[1] || "1";
    setUserId(user);
    const result = await fetch(`/api/end_user_token/${user}`);
    const data = await result.json();
    return data.endUserToken;
  };

  return (
    <DataShareProvider
      endUserToken={fetchEndUserToken}
      theme={{
        fontFamily: "sans-serif",
        colors: {
          palette: ["rgb(90,150,110)", "rgb(100,160,90)"],
        },
        borderWidth: 0,
      }}
      host={process.env.NEXT_PUBLIC_DATASHARE_URL}
    >
      <MantineProvider
        theme={{ fontFamily: "sans-serif" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Header
          height={56}
          sx={{ backgroundColor: "rgb(90,150,110)", borderBottom: "none" }}
        >
          <Flex
            sx={{
              height: "100%",
              maxWidth: 1200,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            justify="space-between"
            align="center"
          >
            <Link href={`/?user=${userId}`}>
              <Image
                src="/sasspay-logo-white.png"
                alt="SassPay Logo"
                width={100}
                height={56}
                style={{
                  objectFit: "contain",
                }}
              />
            </Link>
            <Menu userId={userId} />
          </Flex>
        </Header>
        <Box
          sx={{ marginLeft: "auto", marginRight: "auto", paddingBottom: 100 }}
        >
          <Component {...pageProps} />
          <Flex
            sx={{
              position: "fixed",
              bottom: 20,
              width: "100%",
              zIndex: 100000000000,
            }}
            justify="center"
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                boxShadow: "0px 0px 5px rgba(0,0,0,0.25)",
              }}
              p="xs"
            >
              SassPay is a demo for{" "}
              <Link
                style={{ color: "rgb(60,187,240)" }}
                href="http://datashare.co"
                target="_blank"
              >
                DataShare
              </Link>{" "}
              and is not a real product.{" "}
              <Link
                style={{ color: "rgb(60,187,240)" }}
                href="https://github.com/datashare-public/sasspay-demo"
                target="_blank"
              >
                View on Github
              </Link>
            </Box>
          </Flex>
        </Box>
      </MantineProvider>
    </DataShareProvider>
  );
};

export default MyApp;
