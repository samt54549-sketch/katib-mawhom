document.addEventListener('DOMContentLoaded', () => {
  // --- 1. تصفية الكتب حسب التصنيف ---
  const tagButtons = document.querySelectorAll('.tag-btn');
  const bookCards = document.querySelectorAll('.gold-book-card');

  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      // إزالة التفعيل من جميع الأزرار وتفعيله على الزر المباشر
      tagButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.textContent.trim();

      bookCards.forEach(card => {
        if (category === 'كل التصنيفات' || category.includes('كل')) {
          card.style.display = 'block';
        } else {
          // فحص تصنيف الكتاب
          const cardTitle = card.querySelector('h4')?.textContent || '';
          if (cardTitle.includes(category) || category.includes(cardTitle)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'block'; // الحفاظ على عرض الكتب للنماذج
          }
        }
      });
    });
  });

  // --- 2. فتح تفاصيل الرواية عند الضغط عليها ---
  bookCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const title = card.querySelector('h4')?.textContent || 'عنوان الكتاب';
      const author = card.querySelector('.author')?.textContent || 'كاتب موهوم';
      
      alert(`📚 ${title}\n${author}\n\nهذه واجهة تجريبية احترافية! سيتم فتح قارئ النص الكامل قريباً عند ربطه بقاعدة البيانات.`);
    });
  });

  // --- 3. تشغيل أزرار التفاعل العامة ---
  const writeBtn = document.querySelector('.btn-write');
  if (writeBtn) {
    writeBtn.addEventListener('click', () => {
      alert('✍️ أهلًا بك في محرر كاتب موهوم!\nسيتم فتح محرر النصوص الفاخر لكتابة روايتك الجديدة.');
    });
  }

  const vipButtons = document.querySelectorAll('.button-gold');
  vipButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      alert('👑 العضوية المميزة:\nتمنحك وصولًا غير محدود لجميع الروايات الحصرية بدون إعلانات.');
    });
  });

  const searchInput = document.querySelector('.search-box input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      bookCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
