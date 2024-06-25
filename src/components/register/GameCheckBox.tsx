import { Flex, chakra, useCheckbox, Image } from '@chakra-ui/react';
import React from 'react'

function GameCheckBox(props: any) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      width="30%"
      justifyContent="center"
      height="7.5rem"
      borderWidth="1px"
      borderRadius="8px"
      borderColor="#232424"
      _checked={{
        color: 'white',
        borderColor: 'transparent',
      }}
      _hover={{
        opacity: '90%',
        background: '#d1ff45',
      }}
      cursor="pointer"
      {...htmlProps}
      background={state.isChecked ? '#d1ff45' : 'white'}
    >
      <input {...getInputProps()} hidden className="hide-checkbox" />
      <Flex
        alignItems="center"
        justifyContent="center"
        {...getCheckboxProps()}
        className="hide-checkbox"
      >
      </Flex>
      <Image src={props.game.imageUrl} alt={props.game.value} />
    </chakra.label>
  );
}

export default GameCheckBox