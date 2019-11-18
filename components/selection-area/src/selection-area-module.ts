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

import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';

import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtIconModule } from '@dynatrace/barista-components/icon';

import { DtSelectionArea } from './selection-area';
import { DtSelectionAreaActions } from './selection-area-actions';
import { DtSelectionAreaContainer } from './selection-area-container';
import { DtSelectionAreaOrigin } from './selection-area-origin';

/**
 * @deprecated The selection area will be replaced with the chart selection area
 * @breaking-change To be removed with 5.0.0.
 */
// tslint:disable: deprecation
@NgModule({
  imports: [
    DtIconModule,
    DtButtonModule,
    OverlayModule,
    A11yModule,
    PortalModule,
  ],
  exports: [DtSelectionArea, DtSelectionAreaOrigin, DtSelectionAreaActions],
  declarations: [
    DtSelectionArea,
    DtSelectionAreaContainer,
    DtSelectionAreaOrigin,
    DtSelectionAreaActions,
  ],
  entryComponents: [DtSelectionAreaContainer],
})
export class DtSelectionAreaModule {}
