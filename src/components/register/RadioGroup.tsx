import { useField } from 'formik';
import {
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as ChakraRadioGroupProps,
} from '@chakra-ui/react';
import * as React from 'react';

type Props = ChakraRadioGroupProps;

const RadioGroup = ({ name, children, ...props }: Props) => {
  const [field, , { setValue }] = useField({ name: name!==undefined? name : '', value: props.value });

  const namedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return;

    return React.cloneElement(child, {
      name,
    } as Partial<unknown> & React.Attributes);
  });

  return (
    <ChakraRadioGroup
      {...props}
      {...field}
      onChange={setValue}
      // children={namedChildren}
    >
      {namedChildren}
    </ChakraRadioGroup>
  );
};

export default RadioGroup;
