import React from "react";
import { PresetRideProvider } from "../../../contexts/PresetRideProvider";
import Form from "../Form/Form";
import FormProvider from "../Form/FormProvider";
import NavigationTabs from "../NavigationTabs/NavigationTabs";

const PresetRideMain = () => {
  return (
    <>
      <NavigationTabs />
      <PresetRideProvider>
        <FormProvider>
          <Form />
        </FormProvider>
      </PresetRideProvider>
    </>
  );
};

export default PresetRideMain;
