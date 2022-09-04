import { AppShell, Header } from '@mantine/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffectOnce } from 'usehooks-ts';
import './App.css';
import Navigation from './components/Navigation';
import CustomCars from './views/CustomCars';
import PresetRideMain from './views/PresetRide/PresetRideMain/PresetRideMain';

function App() {
	return (
		<BrowserRouter>
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
				<Routes>
					<Route
						path="/"
						element={<Navigate to="/most-wanted/presetride-editor" />}
					/>
					<Route path="most-wanted">
						<Route path="presetride-editor" element={<PresetRideMain />} />
						<Route path="custom-cars" element={<CustomCars />} />
					</Route>
				</Routes>
			</AppShell>
		</BrowserRouter>
	);
}

export default App;
