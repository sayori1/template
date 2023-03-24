export type MainAxisAlignment =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type CrossAxisAlignment =
  | "start"
  | "end"
  | "center"
  | "stretch"
  | "baseline";

export type Side = "left" | "right" | "top" | "bottom";

export class EdgeInsets {
  constructor(
    public readonly top: Size = "0px",
    public readonly right: Size = "0px",
    public readonly bottom: Size = "0px",
    public readonly left: Size = "0px"
  ) {}

  static all(value: Size): EdgeInsets {
    return new EdgeInsets(value, value, value, value);
  }

  static only({
    top = "0px",
    right = "0px",
    bottom = "0px",
    left = "0px",
  }: {
    top?: Size;
    right?: Size;
    bottom?: Size;
    left?: Size;
  }): EdgeInsets {
    return new EdgeInsets(top, right, bottom, left);
  }

  static symmetric({
    vertical = "0px",
    horizontal = "0px",
  }: {
    vertical?: Size;
    horizontal?: Size;
  }): EdgeInsets {
    return new EdgeInsets(vertical, horizontal, vertical, horizontal);
  }

  toPadding(): string {
    return `padding: ${this.top} ${this.right} ${this.bottom} ${this.left};`;
  }

  toMargin(): string {
    return `margin: ${this.top} ${this.right} ${this.bottom} ${this.left};`;
  }
}

export class BorderRadius {
  constructor(
    public topLeft: number = 0,
    public topRight: number = 0,
    public bottomRight: number = 0,
    public bottomLeft: number = 0
  ) {}

  toCSS(): string {
    return `${this.topLeft}px ${this.topRight}px ${this.bottomRight}px ${this.bottomLeft}px`;
  }

  static all(radius: number): BorderRadius {
    return new BorderRadius(radius, radius, radius, radius);
  }

  static only(
    topLeft: number = 0,
    topRight: number = 0,
    bottomRight: number = 0,
    bottomLeft: number = 0
  ): BorderRadius {
    return new BorderRadius(topLeft, topRight, bottomRight, bottomLeft);
  }
}
