// Function for switching devices

function updateDeviceClass() {
  const body = document.body;
  const width = window.innerWidth;

  if (width >= 1024) {
    body.classList.add("isdesktop");
  } else {
    body.classList.remove("isdesktop");
  }
}

updateDeviceClass();
window.addEventListener("resize", updateDeviceClass);

// Function to expand text in promo box

document.addEventListener("DOMContentLoaded", function () {
  const promoText = document.querySelector(".promo-text");
  const promoBtn = document.querySelector(".promo-toggle");

  if (!promoText || !promoBtn) return;

  let expanded = false;

  promoBtn.addEventListener("click", function () {
    expanded = !expanded;

    if (expanded) {
      promoText.classList.add("expanded");
      promoBtn.textContent = "See Less";
    } else {
      promoText.classList.remove("expanded");
      promoBtn.textContent = "See More";
    }
  });
});

//Accordion

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".footer-accordion-item");

  items.forEach((item) => {
    const btn = item.querySelector(".footer-accordion");

    btn.addEventListener("click", () => {
      item.classList.toggle("is-open");
    });
  });
});

// Function for calculating margin for bottom navigation

function updateFooterMargin() {
  const nav = document.querySelector(".bottom-nav");
  const footer = document.querySelector(".site-footer");

  if (!nav || !footer) return;

  const navHeight = nav.offsetHeight || 0;

  footer.style.marginBottom = navHeight + "px";
}

document.addEventListener("DOMContentLoaded", updateFooterMargin);
window.addEventListener("resize", updateFooterMargin);
