The following script runs via crontab, every 2 minutes in order to sync the zoom state:
```
#!/bin/bash

KV_API_KEY=<key here>

store_kv() {
    local key="$1"
    local value="$2"
    if [ -z "$key" ] || [ -z "$value" ]; then
        echo "Usage: store_kv <key> <value>"
        return 1
    fi
    echo "Putting $key: $value"
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
	if [ $(/usr/sbin/lsof -i 4UDP | /usr/bin/grep zoom | /usr/bin/awk 'END{print NR}') -gt 1 ]; then
		echo "Yes, you are on Zoom"
        store_kv "zoom" "true"
        
    else
        echo "No, you are not on Zoom"
        store_kv "zoom" "false"
    fi
fi

# POST collections
# curl --request POST 'https://api.kvstore.io/collections' \
#      --header 'Content-Type: application/json' \
#      --header 'kvstoreio_api_key: $KV_API_KEY' \
#      --data-raw '{"collection" : "ddb"}'

# GET collections
# curl --request GET 'https://api.kvstore.io/collections' \
#      --header 'Content-Type: application/json' \
#      --header 'kvstoreio_api_key: $KV_API_KEY'

# PUT key
# curl --request PUT 'https://api.kvstore.io/collections/ddb/items/zoom' \
#      --header 'kvstoreio_api_key: $KV_API_KEY' \
#      --header 'Content-Type: text/plain' \
#      --data-raw 'Hello'

# GET key
# curl --request GET 'https://api.kvstore.io/collections/ddb/items/zoom' \
#      --header 'kvstoreio_api_key: $KV_API_KEY'

# Crontab configured
# */2 * * * * $HOME/Workspace/scripts/am-i-on-zoom > $HOME/Workspace/scripts/am-i-on-zoom.log 2>&1
```
