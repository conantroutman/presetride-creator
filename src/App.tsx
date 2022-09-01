import { AppShell, Header, Navbar, NavLink, Tabs } from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import './App.css';
import Navigation from './components/Navigation';
import PresetRideMain from './views/PresetRide/PresetRideMain/PresetRideMain';

function App() {
	return (
		<AppShell
			padding="md"
			navbar={<Navigation />}
			header={
				<Header height={60} p="xs">
					Header
				</Header>
			}
			styles={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			})}
		>
			<PresetRideMain />
		</AppShell>
	);
}

export default App;
