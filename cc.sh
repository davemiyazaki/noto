#!/bin/bash
git add -A

read -p "Enter commit message: " msg

git commit -m "$msg"
