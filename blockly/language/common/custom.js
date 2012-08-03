/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.text_from_number = {
  category: 'Text',
  helpUrl: 'http://www.w3schools.com/jsref/jsref_length_string.asp',
  init: function() {
    this.setColour(195);
    this.setOutput(true, String);
    this.appendInput('text from number', Blockly.INPUT_VALUE, 'NUM', Number);
    this.setTooltip('Creates text from a number.');
  }
};
