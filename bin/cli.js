#!/usr/bin/env node
const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
};
const repoName = process.argv[2];
const checkoutCommand = `git clone --depth 1 https://github.com/Ahmed-Abelfatah/nodejs-ts-template ${repoName}`;
const installDependancies = `cd ${repoName} && yarn install`;
const cleanUpAndInitiateGit = `cd ${repoName} && rm -rf .git bin && git init -b main`
console.log(`🏗️  👷👷 Cloning the repository with name ${repoName} 👷👷 🏗️`);
const checkout = runCommand(checkoutCommand);
if (!checkout) process.exit(-1);
const cleanUpAndInit = runCommand(cleanUpAndInitiateGit)
if(!cleanUpAndInit) process.exit(-1)
console.log(`🔨🔨🔨 Installing the dependancies 🔨🔨🔨`);
const installPackages = runCommand(installDependancies);
if (!installPackages) process.exit(-1);
console.log(
  `✅✅✅ Congratulation!! 🚀🚀🚀🚀🚀 You are ready just follow the following command to start \n
  cd ${repoName} && yarn start
  `
);