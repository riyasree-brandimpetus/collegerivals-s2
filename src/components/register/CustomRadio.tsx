import { useField } from 'formik';
import {
  Box,
  UseRadioProps,
  useRadio,
  ImageProps,
  chakra,
  Text,
  useRadioGroupContext,
  Image
} from '@chakra-ui/react';
import * as React from 'react';

type Props = UseRadioProps &
  ImageProps & {
    imageUrl: string;
    value: string;
    name: string;
  };

const CustomRadio = React.forwardRef((props: Props, ref) => {
  const { imageUrl, name, ...radioProps } = props;
  const group = useRadioGroupContext();
  let isChecked = group.value.toString() === props.value.toString();
  const [{ checked, ...field }] = useField({
    name,
    type: 'radio',
    value: radioProps.value.toString(),
    checked: isChecked,
  });

  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio({
      isChecked: isChecked,
      ...field,
    });

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps({}, ref)} hidden />
      <Box
        {...getRadioProps()}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="12px"
        boxShadow="md"
        width="fit-content"
        _checked={{
          bg: '#FF077C',
          color: 'white',
          borderColor: 'transparent',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px="15px"
        py="8px"
      >
        {/* <Text {...getLabelProps()}>{degree}</Text> */}
        <Image {...getLabelProps()} src={props.imageUrl} alt={props.value} />
      </Box>
    </chakra.label>
  );
});
CustomRadio.displayName = 'CustomRadio';
export default CustomRadio;
