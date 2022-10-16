import { extend } from "vee-validate";
import { required, email, digits, regex } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "This field is must be an email"
});

extend("digits", {
  ...digits,
  message: "Phone number must be 11 digits"
});

extend("bdPhone", {
  ...regex,
  message: "Enter a valid number"
});
