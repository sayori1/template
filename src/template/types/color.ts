export type Color =
  | "black"
  | "white"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "transparent"
  | RGBA
  | string;

export class RGBA {
  constructor(
    public r: number,
    public g: number,
    public b: number,
    public a: number = 255
  ) {}

  static only(
    r: number = 0,
    g: number = 0,
    b: number = 0,
    a: number = 0
  ): RGBA {
    return new RGBA(r, g, b, a);
  }

  toHex(): string {
    let hex =
      (this.r | (1 << 8)).toString(16).slice(1) +
      (this.g | (1 << 8)).toString(16).slice(1) +
      (this.b | (1 << 8)).toString(16).slice(1) +
      (this.a | (1 << 8)).toString(16).slice(1);
    return `#${hex}`;
  }
}

export function getCSSColor(color: Color): string {
  if (typeof color == "string") {
    return color;
  } else if (color instanceof RGBA) {
    return color.toHex();
  } else {
    return color; // assuming color is already a valid CSS color string
  }
}
