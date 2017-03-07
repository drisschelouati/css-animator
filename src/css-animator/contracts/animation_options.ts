export interface AnimationOptions {
  [key: string]: string|number|boolean;
  pin?: boolean;
  type?: string;
  fillMode?: string;
  timingFunction?: string;
  playState?: string;
  direction?: string;
  duration?: string|number;
  delay?: string|number;
  iterationCount?: string|number;
}
