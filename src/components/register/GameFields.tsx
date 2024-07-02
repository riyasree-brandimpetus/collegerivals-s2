import { Flex, FormLabel, Image, Input } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
import React from "react";

function GameFields({ game }: any) {
  return (
    <Flex
      mt="2.438rem"
      mb="3.125rem"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection={{ lg: "row", base: "column" }}
    >
      <Flex
        height="7.5rem"
        width={{ lg: "35%", base: "60%" }}
        backgroundColor="#d1ff45"
        justifyContent="center"
        alignItems="center"
        
        borderRadius="8px"
      >
        <Image src={game?.imageUrl} alt={game?.name} />
      </Flex>
      <Flex flexDirection="column" width={{ lg: "48%", base: "100%" }}>
        {game?.requirements &&
          game?.requirements.map((requirement: any, index: any) => (
            <Flex
              key={index}
              width={{ base: "100%" }}
              direction="column"
              pt={{ lg: index !== 0 ? "1.25rem" : "0rem", base: "1.25rem" }}
              pl={{ lg: "1.25rem" }}
              className="field"
            >
              <FormLabel color={"white"} htmlFor={`${game.name}.${requirement.key}`}>
                {`Provide your ${requirement.name}`}
                {requirement.isMandatory && " *"}
              </FormLabel>
              <Field
                as={Input}
                id={requirement.name}
                name={`${game.name}.${requirement.key}`}
                type="text"
                // mt="0.75rem"
                placeholder={`Eg. ${requirement.placeholder}`}
                height="4.063rem"
                borderRadius="0.75rem"
                color="white"
                errorBorderColor="red.300"
                focusBorderColor="#D1FF45"
              />
              <ErrorMessage
                name={`${game.name}.${requirement.key}`}
                component="div"
                className="errorDiv text-#DBFD67"
              />
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}

export default GameFields;
