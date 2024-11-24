export type ThemeName = "light" | "dark";

export type ColorKey = "primary" | "secondary" | "background" | "third" | "border" | "text";

export type Headingsize = "large" | "medium" | "small";

export type Buttonsize = "large" | "medium" | "small";

export type ButtonScheme = "primary" | "normal" | "like";

export type LayoutWidth = "large" | "medium" | "small";

export type MediaQuery = "mobile" | "tablet" | "desktop";

interface Theme {
  name: ThemeName;

  color: Record<ColorKey, string>;

  heading: {[key in Headingsize ]: {
    fontSize: string;
  }};

  button: {[key in Buttonsize ]: {
    fontSize: string;
    padding: string;
  }};

  buttonScheme: {[key in ButtonScheme ]: {
    color: string;
    backgroundColor: string;
  }};

  borderRadius: {
    default: string;
  };

  layout: {
    width: {
      [key in LayoutWidth]: string;
    }
  };

  mediaQuery: {
    [key in MediaQuery]: string;
  }
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "#FF5800",
    secondary: "#5F5F5F",
    background: "lightgrey",
    third: "green",
    border: "grey",
    text: "black",
  },
  heading: {
    large: {
      fontSize: "2rem",
    },
    medium: {
      fontSize: "1.5rem",
    },
    small: {
      fontSize: "1rem",
    },
  },
  button: {
    large: {
      fontSize: "1.5rem",
      padding: "1rem 2rem",
    },
    medium: {
      fontSize: "1rem",
      padding: "0.5rem 1rem",
    },
    small: {
      fontSize: "0.75rem",
      padding: "0.25rem 0.5rem",
    },
  },
  buttonScheme: {
    primary: {
      color: "white",
      backgroundColor: "midnightblue",
    },
    normal: {
      color: "black",
      backgroundColor: "lightgray",
    },
    like: {
      color: "white",
      backgroundColor: "coral",
    }
  },
  borderRadius: {
    default: "4px",
  },
  layout: {
    width: {
      large: "1020px",
      medium: "760px",
      small: "320px",
    }
  },
  mediaQuery: {
    mobile: "(max-width: 768px)",
    tablet: "(max-width: 1024px)",
    desktop: "(min-width: 1025px)",
  }
}

export const dark: Theme = {
  ...light,
  name: "dark",
  color: {
    primary: "coral",
    secondary: "darkblue",
    background: "midnightblue",
    third: "green",
    border: "grey",
    text: "black",
  },
}

export const getTheme = (themeName : ThemeName): Theme => {
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
}