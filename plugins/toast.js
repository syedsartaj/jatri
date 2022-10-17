export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.

	inject("successToast", ({ message = "" } = {}) => {
    app.$toast.show({
      type: "success",
      title: "Success",
			message: message,
			timeout: 4,
      classToast: "bg-green-500",
      classTitle: "text-white",
      classMessage: "text-white",
      classClose: "text-white",
      classTimeout: "bg-green-300",
    });
	});

	inject("errorToast", ({ message = "" } = {}) => {
    app.$toast.show({
      type: "danger",
      title: "Error",
			message: message,
			timeout: 4,
      classToast: "bg-red-500",
      classTitle: "text-white",
      classMessage: "text-white",
      classClose: "text-white",
      classTimeout: "bg-red-300",
    });
	});

	inject("infoToast", ({ message = "" } = {}) => {
    app.$toast.show({
      type: "info",
      title: "Info",
			message: message,
			timeout: 4,
      classToast: "bg-blue-500",
      classTitle: "text-white",
      classMessage: "text-white",
      classClose: "text-white",
      classTimeout: "bg-blue-300",
    });
  });

  inject("generalToast", ({ message = "" } = {}) => {
    app.$toast.show({
      type: "warning",
      message: message,
      timeout: 2,
      classToast: "backdrop-opacity-90 backdrop-invert bg-black-600",
      classTitle: "text-white",
      classMessage: "text-white",
      classClose: "text-white",
      classTimeout: "bg-black-300",
    });
  });

  inject("generalErrorToast", ({ message = "" } = {}) => {
    app.$toast.show({
      type: "danger",
      message: message,
      timeout: 1,
      classToast: "bg-red-500",
      classTitle: "text-white",
      classMessage: "text-white",
      classClose: "text-white",
      classTimeout: "bg-black-300",
    });
  });

  inject("generalSuccessToast", ({ message = "" } = {}) => {
    app.$toast.show({
      type: "success",
      message: message,
      timeout: 1,
      classToast: "bg-green-500",
      classTitle: "text-white",
      classMessage: "text-white",
      classClose: "text-white",
      classTimeout: "bg-green-300",
    });
  });
};
