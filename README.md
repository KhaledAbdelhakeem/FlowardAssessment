# Mobile Automation Test Suite for floward.

## Overview
This repository contains automated end-to-end tests for the mobile application using WebdriverIO, Appium, JavaScript, and Cucumber (BDD). Tests run on a real Android device using the Page Object Model.

## Environment Setup
1. Install **Node.js**, **Java JDK 17/21**, and **Android SDK**.  
2. Configure environment variables:

## Device Preparation
- Enable Developer Mode & USB Debugging  
- Connect device and verify.

## How to Run the Tests
1. Connect your Android device.  
2. Ensure `adb devices` shows your device as **device**.  
3. Execute the automated tests: 'npx wdio run wdio.conf.js'


WebdriverIO will start Appium automatically, connect to the device, and run all Cucumber `.feature` scenarios.

