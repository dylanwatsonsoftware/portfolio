import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';

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
      statusText = "Maybe on a Zoom call";
      break;
    default:
      backgroundColor = "gray.500";
      statusText = "Loading...";
  }

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={backgroundColor}
    >
      <Text fontSize="2xl" color="white">
        {statusText}
      </Text>
    </Box>
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
    console.error("Error fetching zoom status:", error);
    onZoomCall = "maybe";
  }

  return {
    props: {
      onZoomCall,
    },
  };
};

export default ZoomStatusPage;