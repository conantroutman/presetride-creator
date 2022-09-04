import { Navbar, NavLink } from '@mantine/core';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Navigation() {
	const location = useLocation();

	return (
		<Navbar width={{ base: 300 }} height={500} p="xs">
			<NavLink
				label="Most Wanted"
				opened={location.pathname.includes('most-wanted')}
			>
				<NavLink
					label="PresetRides"
					component={Link}
					to="/most-wanted/presetride-editor"
					active={location.pathname === '/most-wanted/presetride-editor'}
				/>
				<NavLink
					label="Custom Cars"
					component={Link}
					to="/most-wanted/custom-cars"
					active={location.pathname === '/most-wanted/custom-cars'}
				/>
			</NavLink>
			<NavLink label="Underground 2">
				<NavLink label="PresetRides" />
				<NavLink label="Custom Cars" />
			</NavLink>
		</Navbar>
	);
}

export default Navigation;
