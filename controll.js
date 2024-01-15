const sliderItems = document.querySelectorAll(".slider-item");
const checkboxes = document.querySelectorAll(".checkbox");

sliderItems.forEach((item, index) => {
  const icon = item.getAttribute("data-icon");
  const range = item.querySelector("input");
  const slideValue = item.querySelector(".slide-value");
  const iconElement = item.querySelector(".icon");
  const checkbox = checkboxes[index];

  iconElement.src = `assets/${icon}`;

  range.addEventListener("input", () => {
    if (checkbox.checked) {
      let rangeVal = range.value;
      slideValue.innerText = rangeVal;
    }
    // Nilai slide tidak diperbarui jika switch mati
  });

  checkbox.addEventListener("change", () => {
    // Mengaktifkan/menonaktifkan slider berdasarkan status switch
    range.disabled = !checkbox.checked;

    // Reset nilai slide saat switch dimatikan
    if (!checkbox.checked) {
      range.value = 0;
      slideValue.innerText = "0";
    }
  });
});
