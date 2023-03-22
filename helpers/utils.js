export const handleScrollBehaviour = (value) => {
    const body = document.getElementsByTagName("body")[0];
    if (body) {
        body.style.overflow = value ? "scroll" : "hidden";
    }
}


export const moduleType = {
    "INTERCITY": 'intercity',
    "INTERCITY_V2": 'intercity-v2',
    "PARIBAHAN": 'paribahan',
    "LONDON_EXPRESS": 'london-express'
}