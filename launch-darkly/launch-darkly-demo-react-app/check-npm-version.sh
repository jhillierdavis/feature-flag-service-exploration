#!/bin/bash

LATEST_VERSION=$(npm view npm version)
CURRENT_VERSION=$(npm -version)
WHICH_NPM=$(which npm)

echo "NPM installation info:"
echo "Latest: ${LATEST_VERSION}" 
echo "Current: ${CURRENT_VERSION}"
echo "Which NPM: ${WHICH_NPM}"
echo ""

