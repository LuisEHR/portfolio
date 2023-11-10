const btc_cv = document.querySelector("#btn-cv");
const cv_notification = document.querySelector("#cv-notification");

btc_cv.addEventListener("click", () => {
  // Show notification.
  cv_notification.classList.remove("hidden");

  // Hide 4 seconds later
  window.setTimeout(function () {
    cv_notification.classList.add("hidden");
  }, 10000);
});
