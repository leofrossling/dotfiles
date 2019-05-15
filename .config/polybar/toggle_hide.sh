#!/bin/sh
# Check if xdo is installed
xdo_path=$(which xdo)
if [ $? -ne 0 ]; then
    echo "Cannot find \`xdo\` command."
    exit 1
fi
# Obtain bar's window id
id=$(xdo id -N "Polybar" | head -1)
# Toggle bar visibility
if xprop -id $id | grep -q "Normal"; then
    xdo hide -N "Polybar"
else
    xdo show -N "Polybar"
fi
