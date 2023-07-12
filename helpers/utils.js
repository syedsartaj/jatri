export const handleScrollBehaviour = (value) => {
    const body = document.getElementsByTagName("body")[0];
    const html = document.getElementsByTagName("html")[0];
    if (body && html) {
        body.style.overflow = "";
        html.style.overflow = "";
        if (value) {
            body.style.overflowX = "clip";
            html.style.overflowX = "clip";
        }
        else {
            body.style.overflow = "hidden";
            html.style.overflow = "hidden";
        }
    }
}


export const moduleType = {
    INTERCITY: "intercity",
    INTERCITY_V2: "intercity-v2",
    PARIBAHAN: "paribahan",
    LONDON_EXPRESS: "london-express",
    SHOHAGH: "shohagh",
  };
  