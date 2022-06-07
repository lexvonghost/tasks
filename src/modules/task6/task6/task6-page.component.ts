import { Component } from '@angular/core';
import { sqr } from '../sqr.function';

@Component({
  selector: 'app-task6',
  templateUrl: './task6-page.component.html',
  styleUrls: ['./task6-page.component.scss']
})
export class Task6PageComponent{
  public sqr: string = '';
  public array: number[] = [];

  constructor() {}

  public calcSqr(str: string): void {
    let n: number = Number.parseInt(str, 10);
    this.sqr = sqr(n).toString();
    this.array = [];
    for(let i = 1; i <= n; i++) {
      this.array.push(i);
    }
  }

  public sqrBack(n: number): number {
    return sqr(n);
  }
}