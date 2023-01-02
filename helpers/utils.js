export const handleScrollBehaviour = (value) => {
    const body = document.getElementsByTagName("body")[0];
    if (body) {
        body.style.overflow = value ? "scroll" : "hidden";
    }
}