import { Injectable } from '@angular/core';
import { randString } from "./rand-stor";
import { AppName, Version } from "./const-stor";

@Injectable ()
export class DataService {
    
    constructor ( ) {}

    getRandString(aLength: number): string {
        return randString(aLength);
    }

    getAppAndVersion(): string {
        return AppName + ': ' + Version;
    }

    setDataToLocal(aKey: string, aValue: string) {
        localStorage.setItem(aKey, aValue);
    }

    getDataFromLocal(aKey: string): string {
        return localStorage.getItem(aKey);
    }
}