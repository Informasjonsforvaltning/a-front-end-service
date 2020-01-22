#!/usr/bin/env bash
echo feature prefix:
read prefix
echo feature description:
read description

FEAT_FILE=features/$prefix.feature
touch $FEAT_FILE
echo "Feature: $description" >> $FEAT_FILE
echo "" >> $FEAT_FILE
echo "Scenario: " >> $FEAT_FILE
echo "  Given: " >> $FEAT_FILE
echo "    When" >> $FEAT_FILE
echo "      Then" >> $FEAT_FILE

