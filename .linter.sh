#!/bin/bash
cd /home/kavia/workspace/code-generation/india-unveiled-heritage--horizons-95019-95027/main_container_for_india_unveiled
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

