import { Box, Heading, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

const ZoomReadmePage = () => {
  return (
    <>
      <Head>
        <title>Zoom Readme</title>
      </Head>
      <VStack spacing={8} as="main" p={8}>
        <Box as="section" maxW="2xl" mx="auto" w="100%">
          <VStack spacing={8} alignItems="center" justifyContent="center" textAlign="center" pt={24} pb={12}>
            <Box>
              <Heading
                as="h1"
                fontFamily="body"
                bgColor="blue.400"
                bgClip="text"
                size="4xl"
                bgGradient="linear(to-l, #79c2ff, #4a5888)"
                className="jumbotron-name-heading"
              >
                Zoom Readme
              </Heading>
            </Box>
            <Box>
              <Heading as="h2" size="lg" lineHeight="tall" color="gray.500" fontWeight="medium">
                How to know if I&apos;m on a Zoom call
              </Heading>
            </Box>
          </VStack>
        </Box>
        <Box as="section" maxW="2xl" mx="auto" w="100%">
          <Box className="article">
            <Link href="/pages/zoom" passHref>
              <a target="_blank" rel="noreferrer">
                Am I on Zoom?
              </a>
            </Link>
            <br />
            <br />
            The following script runs via crontab, every 2 minutes in order to sync the zoom state:
            <br />
            <br />
            file: am-i-on-zoom
            <pre>
              {`#!/bin/bash

KV_API_KEY=<key here>

store_kv() {
    local key="$1"
    local value="$2"
    local cache_file="/tmp/store_kv_$\{key}_cache"
    if [ -z "$key" ] || [ -z "$value" ]; then
        echo "Usage: store_kv <key> <value>"
        return 1
    fi
    echo "Putting $key: $value"

    # Check if the cache file exists and read its contents
    if [ -f "$cache_file" ]; then
        # Read the cached key and value
        read -r cached_key cached_value < "$cache_file"
        # If the key and value are the same as the cached ones, do nothing
        if [ "$key" == "$cached_key" ] && [ "$value" == "$cached_value" ]; then
            echo "Value unchanged, not updating."
            return 0
        fi
    fi

    # Update the cache file with the new key-value pair
    echo "$key $value" > "$cache_file"
    
    # Perform the update as the value has changed
    local collection="ddb"
    local url="https://api.kvstore.io/collections/$collection/items/$key"
    curl --request PUT "$url" \
         --header "kvstoreio_api_key: $KV_API_KEY" \
         --header "Content-Type: text/plain" \
         --data-raw "$value"
}

if [ "$1" == "--help" ]; then
	echo "Usage: am-i-on-zoom"
else
	if [ $(/usr/sbin/lsof -i 4UDP | /usr/bin/grep zoom | /usr/bin/awk &apos;END{print NR}&apos;) -gt 1 ]; then
		echo "Yes, you are on Zoom"
        store_kv "zoom" "true"
        
    else
        echo "No, you are not on Zoom"
        store_kv "zoom" "false"
    fi
fi`}
            </pre>
            <br />
            <br />
            Crontab configured:
            <pre>
              {`* * * * * $HOME/Workspace/scripts/am-i-on-zoom > $HOME/Workspace/scripts/am-i-on-zoom.log 2>&1`}
            </pre>
          </Box>
        </Box>
      </VStack>
    </>
  );
};

export default ZoomReadmePage;
