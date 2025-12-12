window.addEventListener("message", (event) => {
  if (event.data && event.data.type === "pref-center:update") {
    console.log("Preference Center updated:", event.data);
  }
});
