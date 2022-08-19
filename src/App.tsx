import { AppShell, Header, Navbar, Tabs } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import "./App.css";
import PresetRideMain from "./views/PresetRide/PresetRideMain/PresetRideMain";

function App() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          Navbar
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          Header
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <PresetRideMain />
    </AppShell>
  );
}

export default App;
