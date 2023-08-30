import { Button, Group, Menu as MantineMenu } from "@mantine/core";
import { IconUser, IconUserCheck } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu({ userId }: { userId: string }) {
  const router = useRouter();
  return (
    <Group spacing={20}>
      <Link style={{ color: "#fff" }} href={`/?=${userId}`}>
        Overview
      </Link>
      <Link style={{ color: "#fff" }} href={`/visualization?user=${userId}`}>
        Visualization
      </Link>
      <Link style={{ color: "#fff" }} href={`/dashboard?user=${userId}`}>
        Dashboard
      </Link>
      <MantineMenu trigger="hover" closeDelay={400}>
        <MantineMenu.Target>
          <Button color="teal">Switch User</Button>
        </MantineMenu.Target>

        <MantineMenu.Dropdown>
          <MantineMenu.Item
            icon={
              userId == "1" ? (
                <IconUserCheck color="rgb(90,150,110)" size={14} />
              ) : (
                <IconUser size={14} />
              )
            }
            onClick={() => router.push("?user=1")}
          >
            <Link
              href={"?user=1"}
              style={{
                color: userId == "1" ? "rgb(90,150,110)" : "inherit",
              }}
            >
              Alice Smith
            </Link>
          </MantineMenu.Item>
          <MantineMenu.Item
            icon={
              userId == "2" ? (
                <IconUserCheck color="rgb(90,150,110)" size={14} />
              ) : (
                <IconUser size={14} />
              )
            }
            onClick={() => router.push("?user=2")}
          >
            <Link
              href={"?user=2"}
              style={{
                color: userId == "2" ? "rgb(90,150,110)" : "inherit",
              }}
            >
              Bob Jones
            </Link>
          </MantineMenu.Item>
        </MantineMenu.Dropdown>
      </MantineMenu>
    </Group>
  );
}
