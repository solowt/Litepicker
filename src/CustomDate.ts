export class CustomDate implements Date {
  private _date: Date;
  constructor(...args: any[]) {
    this._date = new Date(args as any);
  }

  valueOf() {
    return this._date.valueOf()
  }

  toDateString() {
    return this._date.toDateString();
  }

  toTimeString() {
    return this._date.toTimeString();
  }

  toLocaleString(...args: any) {
  	return this._date.toLocaleString(...args);
  }

  toISOString() {
    return this._date.toISOString();
  }

  toUTCString() {
    return this._date.toUTCString();
  }

  toLocaleDateString() {
    return this._date.toLocaleDateString();
  }

  toLocaleTimeString() {
    return this._date.toLocaleTimeString()
  }

  getTimezoneOffset() {
    return this._date.getTimezoneOffset();
  }

  getTime() {
    return this._date.getTime();
  }

  getFullYear() {
    return this._date.getFullYear();
  }

  getDate() {
    return this._date.getDate()
  }

  getDay() {
    return this._date.getDay();
  }

  getMilliseconds() {
    return this._date.getMilliseconds();
  }

  getHours() {
    return this._date.getHours();
  }

  getMinutes() {
    return this._date.getMinutes();
  }

  getMonth() {
    return this._date.getMonth();
  }

  getSeconds() {
    return this._date.getSeconds();
  }

  getUTCDate() {
    return this._date.getUTCDate()
  }

  getUTCDay() {
    return this._date.getUTCDay();
  }

  getUTCHours() {
    return this._date.getUTCHours();
  }

  getUTCMilliseconds() {
    return this._date.getUTCMilliseconds();
  }

  getUTCMinutes() {
    return this._date.getUTCMinutes();
  }

  getUTCMonth() {
    return this._date.getUTCMonth();
  }

  getUTCSeconds() {
    return this._date.getUTCSeconds();
  }

  getUTCFullYear() {
    return this._date.getUTCFullYear();
  }

  getVarDate() {
    return this._date.getVarDate();
  }

  setDate(...args: any[]) {
    return this._date.setDate(args as any);
  }

  setHours(...args: any[]) {
    return this._date.setHours(args as any)
  }

  setMilliseconds(...args: any[]) {
    return this._date.setMilliseconds(args as any);
  }

  setMinutes(...args: any[]) {
    return this._date.setMinutes(args as any);
  }

  setMonth(...args: any) {
    return this._date.setMonth(args as any);
  }

  setSeconds(...args: any) {
    return this._date.setSeconds(args as any);
  }

  setTime(...args: any) {
    return this._date.setTime(args as any);
  }

  setUTCDate(...args: any) {
    return this._date.setUTCDate(args as any);
  }

  setUTCHours(...args: any) {
    return this._date.setUTCHours(args as any);
  }

  setUTCMilliseconds(...args: any) {
    return this._date.setUTCMilliseconds(args as any);
  }

  setUTCMinutes(...args: any) {
    return this._date.setUTCMinutes(args as any);
  }

  setUTCMonth(...args: any) {
    return this._date.setUTCMonth(args as any);
  }

  setUTCSeconds(...args: any) {
    return this._date.setUTCSeconds(args as any);
  }

  setUTCFullYear(...args: any) {
    return this._date.setUTCFullYear(args as any);
  }

  setFullYear(...args: any) {
    return this._date.setFullYear(args as any);
  }

  toJSON() {
    return this._date.toJSON();
  }

  [Symbol.toPrimitive](hint: any): any {
    return this._date[Symbol.toPrimitive](hint as any);
  }
}