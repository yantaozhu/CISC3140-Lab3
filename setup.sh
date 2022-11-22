#! /bin/bash

if [[ $(mongod --version) ]]; then
    echo "MongoDB is installed"
else
    if [[ $(xcode-select --version) ]]; then
        echo "Xcode is installed"
    else
        echo "Installing Xcode"
        xcode-select --install
    fi
    if [[ $(brew --version) ]]; then
        echo "Update Homebrew"
        brew update
    else
        echo "Installing Homebrew"
        $(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
    fi
    echo "Installing MongoDB"
    brew tap mongodb/brew
    brew install mongodb-community@6.0
fi

