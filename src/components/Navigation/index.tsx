import { Navbar, NavLink } from '@mantine/core';
import React from 'react';

function Navigation() {
	return (
		<Navbar width={{ base: 300 }} height={500} p="xs">
			<NavLink label="Most Wanted">
				<NavLink label="PresetRides" />
				<NavLink label="Custom Cars" />
			</NavLink>
			<NavLink label="Underground 2">
				<NavLink label="PresetRides" />
				<NavLink label="Custom Cars" />
			</NavLink>
		</Navbar>
	);
}

export default Navigation;
