import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

const ZoomStatusPage = ({ onZoomCall }: { onZoomCall: string | null }) => {
  let backgroundColor: string;
  let statusText: string;

  switch (onZoomCall) {
    case "true":
      backgroundColor = "red.500";
      statusText = "On a Zoom call";
      break;
    case "false":
      backgroundColor = "green.500";
      statusText = "Not on a Zoom call";
      break;
    case "maybe":
      backgroundColor = "yellow.500";
      statusText = "Maybe on a Zoom call?";
      break;
    default:
      if (onZoomCall === null) {
        backgroundColor = "gray.500";
        statusText = "Loading...";
      } else {
        backgroundColor = "yellow.500";
        statusText = "Error: " + onZoomCall;
      }
  }

  return (
    <>
      <Head>
        <title>{statusText} - Dylan</title>
      </Head>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor={backgroundColor}
      >
        <meta httpEquiv="refresh" content="60" />

        <Box mb={4}>
          <Text fontSize="2xl" color="white">
            {statusText}
          </Text>
        </Box>

        <Box>
          <Text fontSize="sm" color="white">
            <Link href="/pages/zoom-readme" passHref>
              <a target="_blank" rel="noreferrer">
                How does this work?
              </a>
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps = async () => {
  let onZoomCall = null;

  try {
    const response = await axios.get("https://api.kvstore.io/collections/ddb/items/zoom", {
      headers: {
        kvstoreio_api_key: "031d2a425765ddeca905caa78cf33611e05c557615a190413b08ccb0dd0d5aa6",
      },
    });
    onZoomCall = response.data.value;
  } catch (error) {
    console.log(error);
    onZoomCall = error.response.data.message ?? error?.message ?? JSON.stringify(error);
  }

  return {
    props: {
      onZoomCall,
    },
  };
};

export default ZoomStatusPage;
