"use client";
import { Form, Formik, FormikHelpers } from "formik";
import {
  Button,
  Heading,
  Flex,
  Box,
  Divider,
  useToast,
  useCheckboxGroup,
  Text,
  Skeleton,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import api from "@/utils/axios/instance";
import { SecondFormValues } from "@/types/register/register";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/utils/context/user.context";
import GameCheckBox from "./GameCheckBox";
import GameFields from "./GameFields";
import * as Yup from "yup";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

const gameDetailsInitialValues: any = {};
let validationSchema: any = {};
export default function ThirdForm() {
  const [gameData, setGameData] = useState<any>([]);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [showGameFields, setShowGameFields] = useState<boolean>(false);
  const [selectedGameData, setSelectedGameData] = useState<any>([]);
  const toast = useToast();
  const { value, getCheckboxProps } = useCheckboxGroup();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await api.get("/games/");
        const data = response?.data;
        setGameData(data);
        setShowLoader(false);
      } catch (error: any) {
        const message = error?.response?.data?.error;
        toast({
          title: `Error fetching Data`,
          status: "error",
          isClosable: true,
          description: message,
        });
        // console.error("Error fetching Data:", error);
      }
    };
    fetchGameDetails();
  }, [toast]);

  /**
   * Filter the required game details
   */
  const filterGameData = () => {
    const filteredData = gameData.filter((item: any) => {
      return value.includes(item.name);
    });

    filteredData.forEach((game: any) => {
      const requirementsObj: { [requirementName: string]: string } = {};
      game.requirements.forEach((req: any) => {
        requirementsObj[req.key] = "";
      });
      gameDetailsInitialValues[game.name] = requirementsObj;
    });

    // Create validation schema dynamically
    validationSchema = Yup.object().shape(
      filteredData.reduce((acc: any, game: any) => {
        const gameSchema = game.requirements.reduce(
          (gameAcc: any, requirement: any) => {
            const { name, isMandatory, key } = requirement;

            // Apply specific validation based on game name and field key
            if (game.name === "BGMI" && key === "characterID") {
              gameAcc[key] = Yup.string()
                .matches(/^\d+$/, "Character ID must be numeric")
                .min(8, "Character ID must be at least 8 digits")
                .required(`${name} is required`);
            } else if (game.name === "VALORANT" && key === "riotID") {
              gameAcc[key] = Yup.string()
                .matches(/^[a-zA-Z0-9]*$/, "Riot ID must be alphanumeric")
                .max(4, "Riot ID must be at most 4 characters")
                .required(`${name} is required`);
            } else {
              // Default validation for other fields
              gameAcc[key] = isMandatory
                ? Yup.string().required(`${name} is required`)
                : Yup.string();
            }

            return gameAcc;
          },
          {}
        );

        acc[game.name] = Yup.object().shape(gameSchema);
        return acc;
      }, {})
    );

    setSelectedGameData(filteredData);
    setShowGameFields(true);
  };
  /**
   * Handles First Form Submission
   * @param values FirstFormValues
   * @param actions FormikHelpers
   */
  const handleSubmit = async (
    values: any,
    actions: FormikHelpers<SecondFormValues>
  ) => {
    //Extracting the values of the selected fields and creating a new object with just the selected checkbox
    const selectedValuesObj: any = {};
    value.forEach((key) => {
      if (values.hasOwnProperty(key)) {
        selectedValuesObj[key] = values[key];
      }
    });
    const enteredGameValues = Object.keys(selectedValuesObj).map((name) => ({
      name,
      ...selectedValuesObj[name],
    }));
    try {
      const response = await api.post(
        `/users/update/game-details/${state._id}`,
        {
          gameDetails: enteredGameValues,
        }
      );
      const data = response.data;
      if (response) {
        toast({
          title: `Details Submitted`,
          status: "success",
          isClosable: true,
          description: data.message,
        });
        dispatch({
          type: "UPDATE",
          payload: { ...state, gameDetails: enteredGameValues, activeStep: 3 },
        });
      }
    } catch (error: any) {
      const message = error?.response?.data?.error;
      toast({
        title: `Error submitting form`,
        status: "error",
        isClosable: true,
        description: message,
      });
    }
  };

  /**
   * For Edit Profile
   */

  useEffect(() => {
    console.log("state", state.gameDetails);
    if (state?.gameDetails.length > 0) {
      console.log("here");
      let gameNames = state.gameDetails.map((games: any) => {
        console.log("games", games);
        const name = games.name;
        console.log("name", name);
        return name;
      });
      // setPreselectedGames([...gameNames])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!showGameFields ? (
        <Flex className="flex-col grow pt-8 md:max-h-[80vh] ">
          <Heading
            // pb="1.25rem"
            paddingLeft={{ base: "2rem", lg: "4rem" }}
            pb={{ base: "2.125rem", lg: "1.25rem" }}
            className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal text-white tracking-wide lg:tracking-wider"
          >
            CHOOSE YOUR{" "}
            <Box as="span" color="#D1FF45">
              GAMES
            </Box>
          </Heading>
          {showLoader && (
            <Flex>
              {" "}
              <Text paddingLeft="4rem" color="white">
                Loading Games...
              </Text>
              <Spinner size="xs" color="white" />
            </Flex>
          )}

          <Skeleton
            isLoaded={!showLoader}
            fadeDuration={1}
            marginRight={{ lg: "4rem" }}
          >
            <Flex
              flexWrap="wrap"
              gap="0.5rem"
              overflowY="auto"
              paddingLeft={{ base: "1.25rem", lg: "4rem" }}
            >
              {gameData.length > 0 &&
                gameData.map((game: any) => (
                  <GameCheckBox
                    className="max-md:w-[46%]"
                    game={game}
                    key={game.name}
                    {...getCheckboxProps({ value: game.name })}
                  />
                ))}
            </Flex>
          </Skeleton>

          <div className="fixed bg-black z-50  lg:w-[55%] w-full   flex-col flex items-center justify-between lg:right-0 bottom-0 mt-auto ">
            <div className=" bg-black lg:pl-16   border-t border-[fffffef] w-full   lg:flex-row flex-col flex items-center justify-between ">
              <Button
                type="submit"
                id="select-games-btn"
                onClick={() =>
                  value.length > 0
                    ? filterGameData()
                    : toast({
                        title: `Select A Game`,
                        status: "error",
                        isClosable: true,
                        description: "Select a game to proceed.",
                      })
                }
                color={"#fff"}
                _hover={{ opacity: "90%" }}
                _active={{
                  filter: "drop-shadow(2px 2px 0px #DBFD67)",
                  transform: "skew(-12deg) translate(2px, 2px)",
                }}
                transform="skew(-12deg)"
                transition="0.4s all ease-out"
                filter="drop-shadow(4px 4px 0px #DBFD67)"
                borderRadius={"0.375rem"}
                className="helvetica-font mx-auto lg:ml-auto lg:mr-16 uppercase bg-black border border-#DBFD67"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"1rem"}
                mt="1.25rem"
                mb="1.25rem"
                height={{ base: "4.125rem", lg: "4.063rem" }}
                width={{ base: "17rem", lg: "22rem" }}
                loadingText="Updating Data"
              >
                Proceed
              </Button>
            </div>
          </div>
        </Flex>
      ) : (
        <Formik
          initialValues={gameDetailsInitialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, setFieldValue, handleSubmit, isSubmitting }) => (
            <Form className="flex flex-col grow pl-8 lg:pl-16 pr-8 lg:pr-0 pt-8 md:max-h-[80vh]">
              <Heading
                // pb="1.25rem"
                pb={{ base: "2.125rem", lg: "1.25rem" }}
                className="ppFormula-font italic font-light text-[1.5rem] lg:text-[3.75rem] leading-tight lg:leading-normal tracking-wide lg:tracking-wider text-white"
              >
                ENTER YOUR{" "}
                <Box as="span" color="#D1FF45">
                  GAME IDS
                </Box>
              </Heading>
              <Flex
                flexDirection="column"
                flexGrow="1"
                // paddingLeft="4rem"
                // paddingTop="2rem"
                maxHeight="80vh"
                overflowY="auto"
              >
                {" "}
                {selectedGameData.length > 0 &&
                  selectedGameData.map((game: any) => (
                    <GameFields game={game} key={game.name} />
                  ))}
                <Flex className="pt-4 flex-wrap flex-col items-start w-full md:w-[85%]">
                  <Alert
                    status="info"
                    className="w-auto bg-slate-800 text-white flex gap-1 "
                  >
                    <AlertIcon color={"white"} />
                    <div className="">
                      Keep your IGN(In-game name) the same during your matches
                      or notify our Discord admins of any changes!
                    </div>
                  </Alert>
                </Flex>
                <div className="p-12"></div>
              </Flex>
              <Box className="mt-auto sticky z-50 bg-black bottom-0">
                <Flex
                  className="form-submit-button-container"
                  width={{ base: "100%", lg: "92%" }}
                  justifyContent={{ base: "center", lg: "start" }}
                >
                  <div className="fixed bg-black z-50  lg:w-[55%] w-full   flex-col flex items-center justify-between lg:right-0 bottom-0 mt-auto ">
                    <div className=" bg-black lg:pl-16   border-t border-[fffffef] w-full   flex-row  flex items-center justify-between ">
                      <Button
                        colorScheme="whiteAlpha"
                        _hover={{ opacity: "90%" }}
                        variant="link"
                        onClick={() => setShowGameFields(false)}
                        leftIcon={<ChevronLeftIcon />}
                      >
                        Re-Select Game
                      </Button>
                      <Button
                        type="submit"
                        id="selected-games-ids-submit-btn"
                        color={"#fff"}
                        _hover={{ opacity: "90%" }}
                        _active={{
                          filter: "drop-shadow(2px 2px 0px #DBFD67)",
                          transform: "skew(-12deg) translate(2px, 2px)",
                        }}
                        transform="skew(-12deg)"
                        transition="0.4s all ease-out"
                        filter="drop-shadow(4px 4px 0px #DBFD67)"
                        borderRadius={"0.375rem"}
                        className="helvetica-font ml-auto lg:ml-auto lg:mr-16 uppercase bg-black border border-#DBFD67"
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontSize={{ base: "0.8rem", lg: "1rem" }}
                        mt="1.25rem"
                        mb="1.25rem"
                        mr="1.25rem"
                        ml="auto"
                        isLoading={isSubmitting}
                        loadingText="Submitting"
                        height={{ base: "3rem", lg: "4.063rem" }}
                        width={{ base: "10rem", lg: "22rem" }}
                      >
                        Proceed
                      </Button>
                    </div>
                  </div>
                </Flex>
              </Box>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
