export const handleScrollBehaviour = (value) => {
  const body = document.getElementsByTagName("body")[0];
  const html = document.getElementsByTagName("html")[0];
  if (body && html) {
    body.style.overflow = "";
    html.style.overflow = "";
    if (value) {
      body.style.overflowX = "clip";
      html.style.overflowX = "clip";
    } else {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    }
  }
};

export const moduleType = {
  INTERCITY: "intercity",
  INTERCITY_V2: "intercity-v2",
  PARIBAHAN: "paribahan",
  LONDON_EXPRESS: "london-express",
  SHOHAGH: "shohagh",
};

export const ServiceType = {
  BUS: "BUS",
  LAUNCH: "LAUNCH",
};

export const isValidPhoneNumber = (phoneNumber) => {
  // Remove any non-digit characters from the input
  const cleanNumber = phoneNumber?.replace(/\D/g, "");

  return cleanNumber?.length === 11 && cleanNumber?.startsWith("01");
};

export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

// Utility function to clean and validate a phone number string
export const cleanAndValidatePhoneNumber = (input) => {
  const cleanedInput = input.replace(/\D/g, "");
  
  if (cleanedInput.length > 11) {
    return cleanedInput.slice(0, 11);
  }
  
  // Prevent negative numbers
  return cleanedInput.trim();
};

// Utility function to clean and validate a pasted text
export const cleanAndValidatePastedText = (pastedText) => {
  const cleanedInput = pastedText.replace(/\D/g, "");
  
  if (cleanedInput.length > 11) {
    return cleanedInput.slice(0, 11);
  }
  
  // Prevent negative numbers
  return cleanedInput.trim();
};

export const extractApiResMessage = (error) => {
  if(Object.hasOwn(error, 'response')){

  }
}
