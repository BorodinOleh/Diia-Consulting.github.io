// Конфигурация языков
const languages = {
  ru: { code: 'RU', name: 'Русский' },
  de: { code: 'DE', name: 'Deutsch' },
  en: { code: 'EN', name: 'English' },
  ua: { code: 'UA', name: 'Українська' }
};

// Получение текущего языка
function getCurrentLanguage() {
  return localStorage.getItem('preferredLanguage') || 'ru';
}

// Загрузка переводов из JSON файла
async function loadTranslations(lang) {
  try {
    const response = await fetch(`/translations/${lang}.json`);
    if (!response.ok) {
      throw new Error(`Не удалось загрузить переводы для языка: ${lang}`);
    }
    const translations = await response.json();
    return translations;
  } catch (error) {
    console.error('Ошибка загрузки переводов:', error);
    if (lang !== 'ru') {
      return loadTranslations('ru');
    }
    return null;
  }
}

// Применение переводов к главной странице
function applyTranslationsIndex(translations) {
  // Навигация
  const navElements = {
    'nav-services': translations.nav.services,
    'nav-expertise': translations.nav.expertise,
    'nav-process': translations.nav.process,
    'nav-testimonials': translations.nav.testimonials,
    'nav-contact': translations.nav.contact
  };

  Object.keys(navElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = navElements[id];
  });

  // Hero секция
  const heroElements = {
    'hero-label': translations.hero.label,
    'hero-title': translations.hero.title,
    'hero-description': translations.hero.description,
    'hero-btn-consultation': translations.hero.btn_consultation,
    'hero-btn-services': translations.hero.btn_services
  };

  Object.keys(heroElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = heroElements[id];
  });

  // Статистика
  const statsElements = {
    'stat-years-label': translations.stats.years_label,
    'stat-cases-label': translations.stats.cases_label,
    'stat-decisions-label': translations.stats.decisions_label,
    'stat-clients-label': translations.stats.clients_label
  };

  Object.keys(statsElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = statsElements[id];
  });

  // Услуги
  const servicesElements = {
    'services-label': translations.services.label,
    'services-title': translations.services.title,
    'services-description': translations.services.description,
    'service1-title': translations.services.service1_title,
    'service1-text': translations.services.service1_text,
    'service2-title': translations.services.service2_title,
    'service2-text': translations.services.service2_text,
    'service3-title': translations.services.service3_title,
    'service3-text': translations.services.service3_text,
    'service4-title': translations.services.service4_title,
    'service4-text': translations.services.service4_text
  };

  Object.keys(servicesElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = servicesElements[id];
  });

  // Экспертиза
  const expertiseElements = {
    'expertise-title': translations.expertise.title,
    'expertise-text1': translations.expertise.text1,
    'expertise-text2': translations.expertise.text2,
    'expertise-feature1': translations.expertise.feature1,
    'expertise-feature2': translations.expertise.feature2,
    'expertise-feature3': translations.expertise.feature3,
    'expertise-feature4': translations.expertise.feature4,
    'expertise-feature5': translations.expertise.feature5,
    'expertise-feature6': translations.expertise.feature6,
    'expertise-feature7': translations.expertise.feature7
  };

  Object.keys(expertiseElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = expertiseElements[id];
  });

  // Процесс
  const processElements = {
    'process-label': translations.process.label,
    'process-title': translations.process.title,
    'step1-title': translations.process.step1_title,
    'step1-text': translations.process.step1_text,
    'step2-title': translations.process.step2_title,
    'step2-text': translations.process.step2_text,
    'step3-title': translations.process.step3_title,
    'step3-text': translations.process.step3_text,
    'step4-title': translations.process.step4_title,
    'step4-text': translations.process.step4_text
  };

  Object.keys(processElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = processElements[id];
  });

  // Отзывы
  const testimonialsElements = {
    'testimonials-label': translations.testimonials.label,
    'testimonials-title': translations.testimonials.title,
    'testimonial1-text': translations.testimonials.testimonial1_text,
    'testimonial1-name': translations.testimonials.testimonial1_name,
    'testimonial1-position': translations.testimonials.testimonial1_position,
    'testimonial2-text': translations.testimonials.testimonial2_text,
    'testimonial2-name': translations.testimonials.testimonial2_name,
    'testimonial2-position': translations.testimonials.testimonial2_position
  };

  Object.keys(testimonialsElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = testimonialsElements[id];
  });

  // Контакты
  const contactElements = {
    'contact-label': translations.contact.label,
    'contact-title': translations.contact.title,
    'contact-info-title': translations.contact.info_title,
    'contact-hours-title': translations.contact.hours_title,
    'contact-phone-title': translations.contact.phone_title,
    'contact-email-title': translations.contact.email_title,
    'contact-address-title': translations.contact.address_title
  };

  Object.keys(contactElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = contactElements[id];
  });

  // HTML контент
  const htmlElements = {
    'contact-hours-text': translations.contact.hours_text,
    'contact-address-text': translations.contact.address_text
  };

  Object.keys(htmlElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = htmlElements[id];
  });

  // Форма
  const formLabels = {
    'firstName': translations.contact.form_firstname + ' *',
    'lastName': translations.contact.form_lastname + ' *',
    'email': translations.contact.form_email + ' *',
    'phone': translations.contact.form_phone,
    'service': translations.contact.form_service,
    'message': translations.contact.form_message + ' *'
  };

  Object.keys(formLabels).forEach(id => {
    const label = document.querySelector(`label[for="${id}"]`);
    if (label) label.textContent = formLabels[id];
  });

  // Опции формы
  const serviceSelect = document.getElementById('service');
  if (serviceSelect && serviceSelect.options) {
    serviceSelect.options[0].textContent = translations.contact.form_service_placeholder;
    serviceSelect.options[1].textContent = translations.contact.form_service_option1;
    serviceSelect.options[2].textContent = translations.contact.form_service_option2;
    serviceSelect.options[3].textContent = translations.contact.form_service_option3;
    serviceSelect.options[4].textContent = translations.contact.form_service_option4;
    serviceSelect.options[5].textContent = translations.contact.form_service_option5;
  }

  const submitBtn = document.querySelector('button[type="submit"]');
  if (submitBtn) submitBtn.textContent = translations.contact.form_submit;

  const formSuccess = document.getElementById('form-success');
  if (formSuccess) formSuccess.textContent = translations.contact.form_success;

  // Футер
  applyFooterTranslations(translations);
}

// Применение переводов к футеру (используется везде)
function applyFooterTranslations(translations) {
  const footerElements = {
    'footer-about-title': translations.footer.about_title,
    'footer-about-text': translations.footer.about_text,
    'footer-services-title': translations.footer.services_title,
    'footer-service1': translations.footer.service1,
    'footer-service2': translations.footer.service2,
    'footer-service3': translations.footer.service3,
    'footer-service4': translations.footer.service4,
    'footer-company-title': translations.footer.company_title,
    'footer-company-about': translations.footer.company_about,
    'footer-company-testimonials': translations.footer.company_testimonials,
    'footer-company-process': translations.footer.company_process,
    'footer-company-contact': translations.footer.company_contact,
    'footer-legal-title': translations.footer.legal_title,
    'footer-copyright': translations.footer.copyright
  };

  Object.keys(footerElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = footerElements[id];
  });
}

// Применение переводов к странице услуги
function applyTranslationsService(translations, serviceNum) {
  // Навигация
  const navElements = {
    'nav-services': translations.nav.services,
    'nav-expertise': translations.nav.expertise,
    'nav-process': translations.nav.process,
    'nav-testimonials': translations.nav.testimonials,
    'nav-contact': translations.nav.contact
  };

  Object.keys(navElements).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = navElements[id];
  });

  // Заголовок услуги
  const serviceKey = `service${serviceNum}`;
  const serviceTitle = document.getElementById('service-title');
  if (serviceTitle && translations.servicePages && translations.servicePages[serviceKey]) {
    serviceTitle.textContent = translations.servicePages[serviceKey].title;
  }

  // Описание услуги
  const serviceDesc = document.getElementById('service-description');
  if (serviceDesc && translations.servicePages && translations.servicePages[serviceKey]) {
    serviceDesc.textContent = translations.servicePages[serviceKey].description;
  }

  // Пункты услуги
  if (translations.servicePages && translations.servicePages[serviceKey] && translations.servicePages[serviceKey].points) {
    translations.servicePages[serviceKey].points.forEach((point, index) => {
      const pointEl = document.getElementById(`service-point${index + 1}`);
      if (pointEl) pointEl.textContent = point;
    });
  }

  // Кнопка контакта
  const contactBtn = document.getElementById('service-contact-btn');
  if (contactBtn && translations.servicePages && translations.servicePages.contact_button) {
    contactBtn.textContent = translations.servicePages.contact_button;
  }

  // Кнопка назад
  const backBtn = document.getElementById('service-back-btn');
  if (backBtn && translations.servicePages && translations.servicePages.back_button) {
    backBtn.textContent = translations.servicePages.back_button;
  }

  // Футер
  applyFooterTranslations(translations);
}

// Обновление кнопки текущего языка
function updateCurrentLanguageButton(lang) {
  const currentBtn = document.getElementById('current-lang');
  const langConfig = languages[lang];

  if (currentBtn && langConfig) {
    currentBtn.innerHTML = `
      <span class="lang-code">${langConfig.code}</span>
      <span class="lang-arrow">▼</span>
    `;
  }
}

// Переключение языка
async function changeLanguage(lang) {
  document.body.style.opacity = '0.7';

  try {
    const translations = await loadTranslations(lang);

    if (translations) {
      // Определяем тип страницы
      const isIndexPage = document.getElementById('hero-title') !== null;
      const serviceMatch = window.location.pathname.match(/usluga(\d+)\.html/);

      if (isIndexPage) {
        applyTranslationsIndex(translations);
      } else if (serviceMatch) {
        const serviceNum = serviceMatch[1];
        applyTranslationsService(translations, serviceNum);
      } else {
        // Только футер для других страниц
        applyFooterTranslations(translations);
      }

      localStorage.setItem('preferredLanguage', lang);
      updateCurrentLanguageButton(lang);

      // Обновляем активную опцию
      document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
          option.classList.add('active');
        }
      });

      document.documentElement.lang = lang;
    }
  } catch (error) {
    console.error('Ошибка при смене языка:', error);
  } finally {
    document.body.style.opacity = '1';
  }
}

// Инициализация при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = getCurrentLanguage();

  updateCurrentLanguageButton(savedLang);
  changeLanguage(savedLang);

  // Устанавливаем активную опцию
  document.querySelectorAll('.lang-option').forEach(option => {
    if (option.dataset.lang === savedLang) {
      option.classList.add('active');
    }
  });
});
