// ===== ANIMATE ON SCROLL =====
(function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document
    .querySelectorAll(".nf-fade-up, .nf-stagger, .nf-fade-in, .nf-blur-in")
    .forEach(function (el) {
      observer.observe(el);
    });
})();

// ===== FAQ ACCORDION =====
(function () {
  document.querySelectorAll(".nf-faq-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".nf-faq-item");
      var answer = item.querySelector(".nf-faq-answer");
      var icon = btn.querySelector(".nf-faq-icon");
      var isOpen = answer.classList.contains("open");

      // close all
      document.querySelectorAll(".nf-faq-answer.open").forEach(function (a) {
        a.classList.remove("open");
      });
      document.querySelectorAll(".nf-faq-icon.open").forEach(function (ic) {
        ic.classList.remove("open");
      });

      if (!isOpen) {
        answer.classList.add("open");
        icon.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      } else {
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
})();

// ===== CIRCULAR TESTIMONIALS =====
(function () {
  var testimonials = [
    {
      quote:
        "Eu era professora e tinha pavor de que meus alunos vissem que eu vendia coisa no digital. Com o Negócio Fantasma, montei tudo em um fim de semana. Ninguém sabe que sou eu. A renda que chegou no primeiro mês já passou o que eu esperava.",
      name: "Juliana M.",
      designation: "Professora · Minas Gerais",
      src: "images/mulher1.png",
    },
    {
      quote:
        "Meu contrato de trabalho tem uma cláusula que me impede de ter negócio próprio na mesma área. O Método Fantasma me deu o jeito de ter uma renda paralela completamente separada, anônima, sem risco nenhum pro meu emprego.",
      name: "Marcos R.",
      designation: "Analista de TI · São Paulo",
      src: "images/homem1.png",
    },
    {
      quote:
        "Fiquei dois anos querendo começar e emperrando sempre no mesmo lugar. Não queria aparecer. Depois de trinta dias aplicando o método, fiz as primeiras vendas. Sem mostrar o rosto. Sem rede social. Sem nada. Funcionou.",
      name: "Camila S.",
      designation: "Rio de Janeiro",
      src: "images/mulher2.png",
    },
    {
      quote:
        "Sempre tive vergonha de falar que queria empreender. Achava que ia parecer que estava vendendo sonho. O modelo invisível tirou esse peso. Monto, a IA executa, a renda entra.",
      name: "Fernanda L.",
      designation: "Administradora · Paraná",
      src: "images/mulher3.png",
    },
    {
      quote:
        "Tentei três métodos diferentes antes desse. Todos pediam que eu aparecesse em algum momento. O Negócio Fantasma foi o primeiro que cumpriu a promessa do início ao fim.",
      name: "Roberto A.",
      designation: "Contador · Bahia",
      src: "images/homem2.png",
    },
  ];

  var activeIndex = 0;
  var autoplayTimer = null;
  var container = document.getElementById("nf-circ-container");
  if (!container) return;

  var imgWrap = container.querySelector(".nf-circ-images");
  var nameEl = container.querySelector(".nf-circ-name");
  var designationEl = container.querySelector(".nf-circ-designation");
  var quoteEl = container.querySelector(".nf-circ-quote");
  var dotsWrap = container.querySelector(".nf-circ-dots");
  var prevBtn = container.querySelector(".nf-circ-prev");
  var nextBtn = container.querySelector(".nf-circ-next");

  // build images
  testimonials.forEach(function (t, i) {
    var img = document.createElement("img");
    img.src = t.src;
    img.alt = t.name;
    img.dataset.index = i;
    imgWrap.appendChild(img);
  });

  // build dots
  testimonials.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.className = "nf-circ-dot";
    dot.style.width = "6px";
    dot.setAttribute("aria-label", "Depoimento " + (i + 1));
    dot.addEventListener("click", function () {
      goTo(i);
      stopAutoplay();
    });
    dotsWrap.appendChild(dot);
  });

  function getImageStyles(i) {
    var count = testimonials.length;
    var containerWidth = imgWrap.offsetWidth || 200;
    var gap = Math.min(72, Math.max(40, 40 + 32 * ((containerWidth - 400) / 500)));
    var maxStickUp = gap * 0.8;
    var isActive = i === activeIndex;
    var isLeft = (activeIndex - 1 + count) % count === i;
    var isRight = (activeIndex + 1) % count === i;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
        border: "1px solid rgba(212,175,55,0.3)",
      };
    } else if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.7,
        pointerEvents: "auto",
        transform:
          "translateX(-" +
          gap +
          "px) translateY(-" +
          maxStickUp +
          "px) scale(0.82) rotateY(15deg)",
        border: "1px solid rgba(255,255,255,0.05)",
      };
    } else if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.7,
        pointerEvents: "auto",
        transform:
          "translateX(" +
          gap +
          "px) translateY(-" +
          maxStickUp +
          "px) scale(0.82) rotateY(-15deg)",
        border: "1px solid rgba(255,255,255,0.05)",
      };
    } else {
      return {
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none",
        transform: "translateX(0) scale(0.7)",
        border: "1px solid rgba(255,255,255,0.05)",
      };
    }
  }

  function updateImages() {
    var imgs = imgWrap.querySelectorAll("img");
    imgs.forEach(function (img, i) {
      var styles = getImageStyles(i);
      img.style.zIndex = styles.zIndex;
      img.style.opacity = styles.opacity;
      img.style.pointerEvents = styles.pointerEvents;
      img.style.transform = styles.transform;
      img.style.border = styles.border;
    });
  }

  function updateContent() {
    var t = testimonials[activeIndex];
    quoteEl.style.opacity = 0;
    quoteEl.style.transform = "translateY(16px)";
    setTimeout(function () {
      nameEl.textContent = t.name;
      designationEl.textContent = t.designation;
      quoteEl.textContent = t.quote;
      quoteEl.style.opacity = 1;
      quoteEl.style.transform = "translateY(0)";
    }, 150);
  }

  function updateDots() {
    var dots = dotsWrap.querySelectorAll(".nf-circ-dot");
    dots.forEach(function (dot, i) {
      if (i === activeIndex) {
        dot.classList.add("active");
        dot.style.width = "20px";
      } else {
        dot.classList.remove("active");
        dot.style.width = "6px";
      }
    });
  }

  function goTo(index) {
    activeIndex = (index + testimonials.length) % testimonials.length;
    updateImages();
    updateContent();
    updateDots();
  }

  function startAutoplay() {
    autoplayTimer = setInterval(function () {
      goTo(activeIndex + 1);
    }, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  prevBtn.addEventListener("click", function () {
    goTo(activeIndex - 1);
    stopAutoplay();
  });

  nextBtn.addEventListener("click", function () {
    goTo(activeIndex + 1);
    stopAutoplay();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { goTo(activeIndex - 1); stopAutoplay(); }
    if (e.key === "ArrowRight") { goTo(activeIndex + 1); stopAutoplay(); }
  });

  // img click to navigate
  imgWrap.addEventListener("click", function (e) {
    var img = e.target.closest("img");
    if (!img) return;
    var i = parseInt(img.dataset.index);
    var count = testimonials.length;
    var isLeft = (activeIndex - 1 + count) % count === i;
    var isRight = (activeIndex + 1) % count === i;
    if (isLeft) { goTo(activeIndex - 1); stopAutoplay(); }
    if (isRight) { goTo(activeIndex + 1); stopAutoplay(); }
  });

  // init
  goTo(0);
  startAutoplay();

  // update on resize
  window.addEventListener("resize", updateImages);
})();
