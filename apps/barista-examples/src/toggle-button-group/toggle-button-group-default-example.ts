/**
 * @license
 * Copyright 2019 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'component-barista-example',
  template: `
    <dt-toggle-button-group>
      <button dt-toggle-button-item value="1">
        <dt-toggle-button-item-icon>
          <dt-icon name="agent"></dt-icon>
        </dt-toggle-button-item-icon>
        One
      </button>
      <button dt-toggle-button-item value="2">
        <dt-toggle-button-item-icon>
          <dt-icon name="agent"></dt-icon>
        </dt-toggle-button-item-icon>
        Two
      </button>
      <button dt-toggle-button-item value="3">
        <dt-toggle-button-item-icon>
          <dt-icon name="agent"></dt-icon>
        </dt-toggle-button-item-icon>
        Three
      </button>
    </dt-toggle-button-group>
  `,
  styles: [
    '.dt-toggle-button-item { margin-right: 16px; }',
    '.dt-toggle-button-item:last-of-type { margin-right: 0; }',
  ],
  preserveWhitespaces: false,
})
export class ToggleButtonGroupDefaultExample {}
