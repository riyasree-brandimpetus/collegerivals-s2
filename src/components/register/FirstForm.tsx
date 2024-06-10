"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/utils/context/user.context";
import BasicDetailsForm from "./BasicDetailsForm";
import OTPForm from "./OTPForm";

export default function FirstForm() {
  const { state } = useContext(UserContext);
  const [showOTPForm, setShowOTPForm] = useState<boolean>(false);

  useEffect(() => {
    if (state.name && state.whatsappNumber && state.cityCenter && state.email) {
      console.log("Baisc details are entered");
      setShowOTPForm(true);
    }
  }, [state]);

  return <>{showOTPForm ? <OTPForm /> : <BasicDetailsForm />}</>;
}
