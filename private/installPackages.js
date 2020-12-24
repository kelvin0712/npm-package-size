"use strict";

const { execSync } = require("child_process");

/**
 * Install packages into a temporary folder.
 * @kind function
 * @name installPackages
 * @param {string} dir A directory to install packages.
 * @param {string[]} packageNames Name of all packages need to be installed.
 * @ignore
 */
module.exports = function installPackages(dir, packageNames) {
  execSync(`npm install --prefix ${dir} ${packageNames.join(" ")}`);
};
