"use client"
import { Flex, chakra, useCheckbox, Image } from '@chakra-ui/react';
import React, { useState } from 'react'

function GameCheckBox(props: any) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props);
      const [isHovered, setIsHovered] = useState(false);
  return (
    <chakra.label
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
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
      background={state.isChecked ? '#d1ff45' : 'transparent'}
  
    >
      <input {...getInputProps()} hidden className="hide-checkbox" />
      <Flex
  
        alignItems="center"
        justifyContent="center"
        {...getCheckboxProps()}
        className="hide-checkbox"
      >
      </Flex>
      <Image   
       filter={state.isChecked ? 'invert(0%)' : 'invert(100%)'}  src={props.game.imageUrl} alt={props.game.value}
     
       style={{
         filter: isHovered ? 'invert(0%)' : state.isChecked ? 'invert(0%)' : 'invert(100%)',
       }}
       />
    </chakra.label>
  );
}

export default GameCheckBox