import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';

const ZoomStatusPage = ({ onZoomCall }: { onZoomCall: string | null }) => {

  if (onZoomCall === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={onZoomCall ? "red.500" : "green.500"}
    >
      <Text fontSize="2xl" color="white">
        {onZoomCall ? "On a Zoom call" : "Not on a Zoom call"}
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