"use client";
import { Text, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { FirstFormValues } from "@/types/register/register";

const cityQualifierDates: any = {
  Delhi: "SEP 23 - OCT 3",
  Pune: "FEB 3 - FEB 10",
  Mumbai: "FEB 6 - FEB 12",
  Hyderabad: "NOV 20 - NOV 26",
  Bangalore: "DEC 16 - DEC 23",
};

function QualifierText() {
  const { values } = useFormikContext<FirstFormValues>();
  const [city, setCity] = useState<string>();

  /**
   * To set the city value
   */
  useEffect(() => {
    if (values.cityCenter) {
      setCity(values.cityCenter);
    }
  }, [values]);

  return (
    <>
      {city && city !== 'WildCard - All Cities' && (
        <Box className="flex py-1 px-3 bg-[#fdd7e6] mt-2 rounded-3xl w-fit justify-center">
          <Text className="text-sm leading-none pl-1">
            {`Qualifier dates: ${cityQualifierDates[city]} '23.`}
          </Text>
        </Box>
      )}
    </>
  );
}

export default QualifierText;
