import { Box, Heading, Link } from "@chakra-ui/react"

function RegistrationsClosed() {
  return (
    <div className="flex h-full items-center justify-center flex-col">
    <Heading
      pb={{ base: "0.5rem", lg: "0.25rem" }}
      className="ppFormula-font  wrap gap-3 px-10 text-center text-white italic font-light text-2xl lg:text-4xl leading-tight lg:leading-normal tracking-wide lg:tracking-wider uppercase"
    >
      The registration for <Box as="span" className=" text-[#DBFD67]">
      College Rivals Season 2
       </Box> is now Officially Closed
    </Heading>
    <div className="mt-8 text-white max-md:pt-2 helvetica-light-font font-normal">
                Already a member?{" "}
                <Link
                  href="/login"
                  className="text-#DBFD67 underline helvetica-font"
                >
                  Login
                </Link>
              </div>
    </div>
  )
}

export default RegistrationsClosed