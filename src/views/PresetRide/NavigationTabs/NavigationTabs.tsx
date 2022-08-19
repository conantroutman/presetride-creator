import { Tabs } from '@mantine/core';
import React, { useState } from 'react';
import { Plus } from 'tabler-icons-react';

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState();

  const handleTabChange = (tabIndex: number, tabKey?: string) => {
    console.log(tabIndex, tabKey);
  };

  return (
    <Tabs defaultValue="untitled">
      <Tabs.List>
        <Tabs.Tab value="untitled">Untitled</Tabs.Tab>
        <Tabs.Tab value="new" icon={<Plus size={14} />}>
          New Preset Ride
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default NavigationTabs;
