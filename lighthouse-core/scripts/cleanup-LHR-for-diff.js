#!/usr/bin/env node

/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/** @fileoverview Read in a LHR JSON file, remove whatever shouldn't be compared, write it back. */

const {readFileSync, writeFileSync} = require('fs');

const filename = process.argv[2];
if (!filename) throw new Error('No filename provided.');

const data = readFileSync(filename, 'utf8');
writeFileSync(filename, cleanAndFormatLHR(data), 'utf8');

/**
 * @param {string} lhrString
 * @return {string}
 */
function cleanAndFormatLHR(lhrString) {
  const lhr = JSON.parse(lhrString);
  delete lhr.timing;
  return JSON.stringify(lhr, null, 2);
}
