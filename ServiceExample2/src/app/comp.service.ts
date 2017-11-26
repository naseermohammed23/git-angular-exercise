import { EventEmitter } from '@angular/core';

export class ComponentService {

    statusMessage = new EventEmitter<String>();
}