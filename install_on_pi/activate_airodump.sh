#!/bin/bash

#  put wlan0 in monitoring mode
sudo airmon-ng start wlan0 

# activate airodump and have it output data to /tmp directory
sudo airodump-ng --output-format csv --write /tmp/capture mon0
