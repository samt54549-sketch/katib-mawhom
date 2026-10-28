:root {
  --bg-dark: #070707;
  --bg-sidebar: #0b0b0b;
  --bg-card: #121212;
  --bg-card-hover: #191919;
  --gold-main: #d4af37;
  --gold-bright: #f4d068;
  --gold-muted: #aa8c2c;
  --border-gold: rgba(212, 175, 55, 0.25);
  --border-gold-strong: rgba(212, 175, 55, 0.6);
  --text-primary: #ffffff;
  --text-muted: #8e8e8e;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Cairo', system-ui, -apple-system, sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-primary);
  direction: rtl;
  line-height: 1.5;
  overflow-x: hidden;
}

.app-layout {
  display: flex;
  min-height: 100vh;
}

/* الشريط الجانبي */
.sidebar {
  width: 260px;
  background-color: var(--bg-sidebar);
  border-left: 1px solid var(--border-gold);
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex-shrink: 0;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--border-gold);
}

.user-avatar {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, var(--gold-main), var(--gold-muted));
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.user-info strong {
  display: block;
  font-size: 0.9rem;
  color: var(--gold-bright);
}

.user-info small {
  color: var(--text-muted);
  font-size: 0.75rem;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.75rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.85rem;
  border-radius: 8px;
  transition: all 0.2s;
}

.nav-item:hover, .nav-item.active {
  background: rgba(212, 175, 55, 0.1);
  color: var(--gold-bright);
  border-right: 3px solid var(--gold-main);
}

.vip-card {
  background: linear-gradient(145deg, #18150a, #0d0b04);
  border: 1px solid var(--border-gold-strong);
  padding: 0.9rem;
  border-radius: 10px;
  text-align: center;
}

.vip-card h4 {
  color: var(--gold-bright);
  font-size: 0.9rem;
  margin-top: 0.3rem;
}

.vip-card p {
  font-size: 0.7rem;
  color: var(--text-muted);
  margin: 0.4rem 0 0.8rem;
}

.sidebar-footer-quote {
  font-size: 0.7rem;
  color: var(--gold-muted);
  font-style: italic;
  text-align: center;
  border-top: 1px dashed var(--border-gold);
  padding-top: 0.8rem;
}

/* المحتوى الرئيسي */
.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* الهيدر العلوي */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.5rem;
  background-color: var(--bg-sidebar);
  border-bottom: 1px solid var(--border-gold);
  gap: 1rem;
}

.search-box {
  position: relative;
  flex: 1;
  max-width: 280px;
}

.search-box input {
  width: 100%;
  padding: 0.45rem 2rem 0.45rem 0.8rem;
  background: #141414;
  border: 1px solid var(--border-gold);
  border-radius: 20px;
  color: #fff;
  font-size: 0.8rem;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.75rem;
}

.top-nav {
  display: flex;
  gap: 1.2rem;
}

.top-nav a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.85rem;
}

.top-nav a.active, .top-nav a:hover {
  color: var(--gold-bright);
}

.brand-logo h2 {
  font-size: 1.1rem;
  color: var(--gold-bright);
}

.brand-logo small {
  font-size: 0.6rem;
  color: var(--text-muted);
  display: block;
}

/* شبكة التخطيط الرئيسية */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 290px;
  gap: 1.2rem;
  padding: 1.2rem 1.5rem;
}

.main-content {
  min-width: 0;
}

/* البانر */
.main-banner {
  background: linear-gradient(135deg, #1a160b, #0c0a05);
  border: 1px solid var(--border-gold-strong);
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  gap: 1rem;
}

.banner-text h1 {
  font-size: 1.5rem;
  color: var(--gold-bright);
  margin-bottom: 0.4rem;
}

.banner-text p {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-bottom: 0.8rem;
}

.features-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem 0.8rem;
  margin-bottom: 1.2rem;
  font-size: 0.75rem;
  color: var(--gold-bright);
}

.book-cover-mockup {
  width: 120px;
  height: 160px;
  background: linear-gradient(145deg, #2a2212, #000);
  border: 2px solid var(--gold-main);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
}

.book-cover-mockup h3 {
  color: var(--gold-bright);
  font-size: 0.9rem;
}

.book-cover-mockup p {
  font-size: 0.55rem;
  color: var(--gold-muted);
}

/* التصنيفات */
.category-tags {
  display: flex;
  gap: 0.4rem;
  margin: 0.8rem 0 1.2rem;
  overflow-x: auto;
  padding-bottom: 0.4rem;
}

.tag-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  color: var(--text-muted);
  padding: 0.35rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  cursor: pointer;
  white-space: nowrap;
}

.tag-btn.active, .tag-btn:hover {
  background: var(--gold-main);
  color: #000;
  font-weight: bold;
}

/* شبكة بطاقات الكتب */
.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.section-title-row h3 {
  color: var(--gold-bright);
  font-size: 1.1rem;
}

.link-all {
  color: var(--gold-main);
  font-size: 0.8rem;
  text-decoration: none;
}

.books-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.8rem;
}

.gold-book-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.card-badge {
  position: absolute;
  top: 6px;
  left: 6px;
  background: var(--gold-main);
  color: #000;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}

.card-thumb {
  height: 150px;
  background: #1f1a0e;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
}

.card-thumb h4 {
  font-size: 0.9rem;
  color: var(--gold-bright);
}

.card-details {
  padding: 0.6rem;
}

.card-details h4 {
  font-size: 0.8rem;
  color: #fff;
}

.card-details .author {
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-top: 0.1rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 0.4rem;
  font-size: 0.7rem;
}

/* الودجت الجانبية */
.widgets-aside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.widget-box {
  background-color: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: 10px;
  padding: 0.9rem;
}

.widget-box h3 {
  font-size: 0.9rem;
  color: var(--gold-bright);
  margin-bottom: 0.7rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
}

.stat-card {
  background: #090909;
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 6px;
  padding: 0.5rem;
  text-align: center;
}

.stat-card small {
  display: block;
  font-size: 0.6rem;
  color: var(--text-muted);
}

.stat-card strong {
  font-size: 0.85rem;
}

.gold-text {
  color: var(--gold-bright);
}

.activity-list {
  list-style: none;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 0.7rem;
}

.activity-list small {
  display: block;
  color: var(--text-muted);
}

/* أزرار */
.button {
  border: none;
  border-radius: 6px;
  padding: 0.45rem 0.9rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
}

.btn-write {
  background: linear-gradient(135deg, var(--gold-main), var(--gold-muted));
  color: #000;
  width: 100%;
}

.button-gold {
  background: linear-gradient(135deg, var(--gold-bright), var(--gold-main));
  color: #000;
}

.button-outline {
  background: transparent;
  border: 1px solid var(--gold-main);
  color: var(--gold-bright);
}

.full-width {
  width: 100%;
}

/* الفوتر */
.app-footer {
  margin-top: auto;
  padding: 1.2rem 1.5rem;
  background-color: var(--bg-sidebar);
  border-top: 1px solid var(--border-gold);
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: var(--text-muted);
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  margin-left: 0.8rem;
}

/* تحسين العرض للهواتف المحمولة */
@media (max-width: 900px) {
  .app-layout {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    border-left: none;
    border-bottom: 1px solid var(--border-gold);
  }
  .content-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  .top-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
  }
  .search-box {
    max-width: 100%;
  }
  .top-nav {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  .main-banner {
    flex-direction: column;
    text-align: center;
  }
  .features-row {
    justify-content: center;
  }
  .app-footer {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
  }
  .footer-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}

