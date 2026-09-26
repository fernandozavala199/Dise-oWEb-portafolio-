

document.addEventListener('DOMContentLoaded', () => {
  
  /* --------------------------------------------------------------------------
     1. GESTOR DE TEMA CLARO / OSCURO (THEME SWITCHER)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const rootElement = document.documentElement;

  // Recuperar tema previo o preferencia del sistema
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  setTheme(currentTheme);

  function setTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = rootElement.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      showToast(`Tema cambiado a modo ${nextTheme === 'dark' ? 'oscuro 🌙' : 'claro ☀️'}`);
    });
  }

  /* --------------------------------------------------------------------------
     2. MENÚ RESPONSIVE (DRAWER MÓVIL)
     -------------------------------------------------------------------------- */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      hamburgerBtn.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar menú móvil al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. FILTRADO DINÁMICO DE HABILIDADES
     -------------------------------------------------------------------------- */
  const skillFilterBtns = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover estado activo de botones
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-skill-filter');

      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     4. FILTRADO DINÁMICO DE PROYECTOS
     -------------------------------------------------------------------------- */
  const projectFilterBtns = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-project-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-project-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

/* ==========================================================================
   5. MODAL DE DETALLES DE PROYECTO
   ========================================================================== */

const projectModal = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close');
const openModalBtns = document.querySelectorAll('.open-modal-btn');

// Elementos internos del modal
const modalImg = document.getElementById('modal-project-img');
const modalTitle = document.getElementById('modal-project-title');
const modalDesc = document.getElementById('modal-project-desc');
const modalProblem = document.getElementById('modal-project-problem');
const modalTech = document.getElementById('modal-project-tech');
const modalRepo = document.getElementById('modal-repo-link');
const modalDemo = document.getElementById('modal-demo-link');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const data = btn.dataset;

    if (modalImg) modalImg.src = data.img || '';
    if (modalTitle) modalTitle.textContent = data.title || '';
    if (modalDesc) modalDesc.textContent = data.desc || '';
    if (modalProblem) modalProblem.textContent = data.problem || '';
    if (modalTech) modalTech.textContent = data.tech || '';
    if (modalRepo) modalRepo.href = data.repo || '#';
    
    // Asigna el enlace de Netlify que está en data-demo del HTML
    if (modalDemo) modalDemo.href = data.demo || '#';

    if (projectModal) {
      projectModal.classList.add('active');
      projectModal.setAttribute('aria-hidden', 'false');
    }
  });
});

// Cerrar modal al hacer clic en la X
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => {
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
    }
  });
}
  /* --------------------------------------------------------------------------
     6. VALIDACIÓN DEL FORMULARIO DE CONTACTO
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const alertContainer = document.getElementById('form-alert-container');

  if (contactForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    // RegEx para validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField(input, isConditionValid) {
      const group = input.closest('.form-group');
      if (isConditionValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        if (group) group.classList.remove('has-error');
        return true;
      } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        if (group) group.classList.add('has-error');
        return false;
      }
    }

    // Eventos de validación en tiempo real (Blur & Input)
    if (nameInput) {
      nameInput.addEventListener('input', () => validateField(nameInput, nameInput.value.trim().length >= 3));
    }
    if (emailInput) {
      emailInput.addEventListener('input', () => validateField(emailInput, emailRegex.test(emailInput.value.trim())));
    }
    if (subjectInput) {
      subjectInput.addEventListener('input', () => validateField(subjectInput, subjectInput.value.trim().length >= 3));
    }
    if (messageInput) {
      messageInput.addEventListener('input', () => validateField(messageInput, messageInput.value.trim().length >= 10));
    }

    // Envío del Formulario
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 3);
      const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()));
      const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3);
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10);

      if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        if (alertContainer) {
          alertContainer.innerHTML = `
            <div class="form-status-alert success">
              ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.
            </div>
          `;
        }
        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
          input.classList.remove('is-valid', 'is-invalid');
          const grp = input.closest('.form-group');
          if (grp) grp.classList.remove('has-error');
        });

        setTimeout(() => {
          if (alertContainer) alertContainer.innerHTML = '';
        }, 5000);
      } else {
        if (alertContainer) {
          alertContainer.innerHTML = `
            <div class="form-status-alert error">
              ⚠️ Por favor completa correctamente todos los campos requeridos antes de enviar.
            </div>
          `;
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. SCROLLSPY Y BOTÓN VOLVER ARRIBA (BACK TO TOP)
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Botón flotante Volver Arriba
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Resaltado dinámico de navegación (ScrollSpy)
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. COPIAR CÓDIGOS DE COLOR EN DESIGN SYSTEM CON TOAST
     -------------------------------------------------------------------------- */
  const colorSwatches = document.querySelectorAll('.ds-swatch[data-copy-hex]');

  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      const hex = swatch.getAttribute('data-copy-hex');
      if (hex) {
        navigator.clipboard.writeText(hex)
          .then(() => {
            showToast(`Copiado ${hex} al portapapeles 📋`);
          })
          .catch(() => {
            showToast(`Color: ${hex}`);
          });
      }
    });
  });

  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

});

/* Keyframe animación fadeIn agregada dinámicamente si no existe */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);
