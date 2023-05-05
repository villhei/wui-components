import { Typography } from "./typography";

export class H1 extends Typography {
  constructor() {
    super("h1");
  }
}
export class H2 extends Typography {
  constructor() {
    super("h2");
  }
}
export class H3 extends Typography {
  constructor() {
    super("h3");
  }
}
export class H4 extends Typography {
  constructor() {
    super("h4");
  }
}
export class H5 extends Typography {
  constructor() {
    super("h5");
    this.tag.style.setProperty("text-transform", "uppercase");
  }
}
