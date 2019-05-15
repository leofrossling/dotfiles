#!/bin/sh

TOGGLE=$HOME/.cache/wal-backup/toggle

if [ ! -e $TOGGLE ]; then
    touch $TOGGLE
    mkdir ~/.cache/wal-backup
    cp -r ~/.cache/wal/* ~/.cache/wal-backup/
    wal --theme ~/.config/wal/colorschemes/dark/hacker2
    sudo /home/leo/.keyboard/change_colours.sh
    #sudo /home/leo/.keyboard/msi-keyboard/msi-keyboard -m normal -c left,green,light -c middle,green,light -c right,green,light
else
    rm $TOGGLE
    cp -r ~/.cache/wal-backup/* ~/.cache/wal/
    wal -R
    sudo /home/leo/.keyboard/change_colours.sh
fi
