import { useField } from "formik";
import {
  Box,
  UseRadioProps,
  useRadio,
  ImageProps,
  chakra,
  useRadioGroupContext,
  Image,
} from "@chakra-ui/react";
import * as React from "react";

type Props = UseRadioProps &
  ImageProps & {
    imageUrl: string;
    value: string;
    name: string;
    disabled?: boolean; // Add optional disabled prop
  };

const CustomRadio = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { imageUrl, name, disabled, ...radioProps } = props; // Extract disabled prop
  const group = useRadioGroupContext();
  let isChecked = group.value.toString() === props.value.toString();
  const [{ checked, ...field }] = useField({
    name,
    type: "radio",
    value: radioProps.value.toString(),
    checked: isChecked,
  });

  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio({
      isChecked: isChecked,
      ...field,
      isDisabled: disabled, // Apply disabled condition to the useRadio hook
    });

  return (
    <chakra.label
      className="md:w-[40%] w-[50%]"
      {...htmlProps}
      cursor={disabled ? "not-allowed" : "pointer"} // Adjust cursor style when disabled
    >
      <input {...getInputProps({ disabled }, ref)} hidden />
      <Box
        {...getRadioProps()}
        cursor={disabled ? "not-allowed" : "pointer"} // Adjust cursor style when disabled
        bg="#232424"
        borderRadius="12px"
        width="100%"
        className="flex justify-center items-center"
        height={{ sm: "169px", base: "110px" }}
        _checked={{
          bg: "#D1FF45",
          color: "white",
          borderColor: "transparent",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        opacity={disabled ? 0.6 : 1} // Apply opacity when disabled
        px="15px"
        py="8px"
      >
        <Image
          width={{ base: "50px", lg: "65px" }}
          {...getLabelProps()}
          src={imageUrl}
          alt={props.value}
        />
      </Box>
    </chakra.label>
  );
});
CustomRadio.displayName = "CustomRadio";
export default CustomRadio;
