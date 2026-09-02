/**
 * app.js - 前端公共逻辑
 * 处理导航、轮播、产品渲染、视频渲染、联系表单、主题切换、国际化等
 * 
 * 国际化方案：
 * - t('key')  → UI 固定文本翻译，查 I18N 字典
 * - tl(item, 'field') → 内容字段翻译，中文返回 item.field，英文返回 item.field_en
 * - applyLang() → 遍历 [data-i18n] 元素更新文本，重新渲染动态内容
 */

// ========== 主题配色注入 ==========
function applyTheme() {
  if (typeof DB === 'undefined' || !DB.getColorScheme) return;
  const cs = DB.getColorScheme();
  const root = document.documentElement;
  root.style.setProperty('--primary', cs.primary);
  root.style.setProperty('--primary-dark', cs.primaryDark);
  root.style.setProperty('--primary-light', cs.primaryLight);
  root.style.setProperty('--primary-bg', cs.primaryBg);
  root.style.setProperty('--secondary', cs.secondary);
  root.style.setProperty('--accent', cs.accent);
}

// ========== SVG 图标库 ==========
const ICONS = {
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  chevronUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

// ========== 语言切换 ==========
function toggleLang() {
  const current = detectLang();
  const newLang = current === 'zh' ? 'en' : 'zh';
  DB.setLang(newLang);
  applyLang();
}

// ========== 应用语言：更新所有 UI ==========
function applyLang() {
  // 1. 更新 <html lang="...">
  document.documentElement.lang = detectLang() === 'zh' ? 'zh-CN' : 'en';

  // 2. 更新所有带 data-i18n 的静态元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && typeof I18N !== 'undefined' && I18N[key]) {
      el.textContent = t(key);
    }
  });

  // 3. 更新带 data-i18n-ph 的 placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (key && typeof I18N !== 'undefined' && I18N[key]) {
      el.setAttribute('placeholder', t(key));
    }
  });

  // 4. 重新渲染动态内容
  renderHeader();
  renderFooter();
  initHero();
  renderFeatures();
  renderHomeProducts();
  renderProducts();
  renderVideos();
  renderContact();
  renderStats();
}

// ========== 渲染 Header ==========
function renderHeader() {
  const site = DB.getSite();
  const nav = DB.getNav();
  const current = getCurrentPage();

  const header = document.getElementById('header');
  if (!header) return;

  header.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo">
        <span class="logo-icon">${site.logo}</span>
        <span>${tl(site, 'name')}</span>
      </a>
      <ul class="nav-list" id="navList">
        ${nav.map(item => `
          <li class="nav-item">
            <a href="${item.href}" class="${current === item.href ? 'active' : ''}">${tl(item, 'label')}</a>
          </li>
        `).join('')}
      </ul>
      <div class="header-actions">
        <button class="lang-toggle" id="langToggle" onclick="toggleLang()">${t('lang_switch')}</button>
        <a href="contact.html" class="btn btn-primary btn-sm">${t('free_consult')}</a>
        <a href="admin/admin.html" class="btn btn-ghost btn-sm">${t('admin_panel')}</a>
      </div>
      <button class="menu-toggle" id="menuToggle">☰</button>
    </div>
  `;

  // 移动端菜单
  const toggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  if (toggle) {
    toggle.addEventListener('click', () => navList.classList.toggle('show'));
  }
}

// ========== 渲染 Footer ==========
function renderFooter() {
  const site = DB.getSite();
  const nav = DB.getNav();
  const footer = document.getElementById('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo" style="color:#fff;">
            <span class="logo-icon">${site.logo}</span>
            <span>${tl(site, 'name')}</span>
          </a>
          <p>${tl(site, 'description')}</p>
        </div>
        <div class="footer-col">
          <h4>${t('footer_quick_links')}</h4>
          ${nav.map(item => `<a href="${item.href}">${tl(item, 'label')}</a>`).join('')}
        </div>
        <div class="footer-col">
          <h4>${t('footer_products')}</h4>
          <a href="product.html">${t('footer_iot')}</a>
          <a href="product.html">${t('footer_bigdata')}</a>
          <a href="product.html">${t('footer_security')}</a>
          <a href="product.html">${t('footer_community')}</a>
        </div>
        <div class="footer-col">
          <h4>${t('footer_contact')}</h4>
          <a>${site.phone}</a>
          <a>${site.email}</a>
          <a>${tl(site, 'address')}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${tl(site, 'copyright')}</span>
        <a href="#">${tl(site, 'icp')}</a>
      </div>
    </div>
  `;
}

// ========== 获取当前页面名 ==========
function getCurrentPage() {
  const path = window.location.pathname;
  return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
}

// ========== Toast 通知 ==========
function showToast(msg, type = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'toast ' + type;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ========== 回到顶部 ==========
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) {
    const el = document.createElement('button');
    el.id = 'backToTop';
    el.className = 'back-to-top';
    el.innerHTML = ICONS.chevronUp;
    el.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(el);
  }
  const btnEl = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) btnEl.classList.add('show');
    else btnEl.classList.remove('show');
  });
}

// ========== 首页：轮播图 ==========
function initHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const banners = DB.getBanners();
  if (!banners.length) return;

  hero.innerHTML = `
    ${banners.map((b, i) => `
      <div class="hero-slide ${i === 0 ? 'active' : ''}" style="background-image:url('${b.image}')">
        <div class="hero-content">
          <h1>${tl(b, 'title')}</h1>
          <p>${tl(b, 'subtitle')}</p>
          <a href="${b.link}" class="btn btn-lg" style="background:#fff;color:var(--primary);">${t('learn_more')}</a>
        </div>
      </div>
    `).join('')}
    <div class="hero-dots">
      ${banners.map((_, i) => `<span class="hero-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></span>`).join('')}
    </div>
  `;

  let current = 0;
  const slides = hero.querySelectorAll('.hero-slide');
  const dots = hero.querySelectorAll('.hero-dot');

  function go(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));

  // 自动播放
  setInterval(() => {
    go((current + 1) % banners.length);
  }, 5000);
}

// ========== 首页：特性卡片 ==========
function renderFeatures() {
  const container = document.getElementById('featuresGrid');
  if (!container) return;
  const data = DB.load();
  const features = data.features || [];
  container.innerHTML = features.map(f => `
    <div class="feature-card animate-in">
      <div class="feature-icon icon">${ICONS[f.icon] || ICONS.gear}</div>
      <h3>${tl(f, 'title')}</h3>
      <p>${tl(f, 'desc')}</p>
    </div>
  `).join('');
}

// ========== 首页：推荐产品 ==========
function renderHomeProducts() {
  const container = document.getElementById('homeProducts');
  if (!container) return;
  const products = DB.getProducts();
  const featured = products.slice(0, 3);
  container.innerHTML = featured.map(p => renderProductCard(p)).join('');
  bindProductCardEvents();
}

// ========== 产品卡片渲染 ==========
function renderProductCard(p) {
  const tag = tl(p, 'tag');
  const tagClass = tag === '热销' ? 'hot' : tag === '新品' ? 'new' : tag === '推荐' ? 'recommend' : '';
  return `
    <div class="product-card" data-id="${p.id}">
      ${tag ? `<span class="product-tag ${tagClass}">${tag}</span>` : ''}
      <img class="product-cover" src="${p.cover}" alt="${tl(p, 'name')}" loading="lazy">
      <div class="product-body">
        <h3>${tl(p, 'name')}</h3>
        <p class="product-summary">${tl(p, 'summary')}</p>
        <div class="product-footer">
          <span class="product-price">${tl(p, 'price')}</span>
          <span class="product-category">${tl(p, 'category')}</span>
        </div>
      </div>
    </div>
  `;
}

// ========== 产品页：渲染所有产品 ==========
function renderProducts() {
  const container = document.getElementById('productGrid');
  if (!container) return;
  const products = DB.getProducts();
  // 渲染筛选栏
  const categories = [t('filter_all'), ...new Set(products.map(p => tl(p, 'category')))];
  const filterBar = document.getElementById('filterBar');
  if (filterBar) {
    filterBar.innerHTML = categories.map((c, i) =>
      `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-cat="${c}">${c}</button>`
    ).join('');
    filterBar.addEventListener('click', e => {
      if (e.target.classList.contains('filter-btn')) {
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.dataset.cat;
        const allLabel = t('filter_all');
        const filtered = cat === allLabel ? products : products.filter(p => tl(p, 'category') === cat);
        container.innerHTML = filtered.map(p => renderProductCard(p)).join('') ||
          `<p style="text-align:center;color:var(--text-light);padding:48px;">${t('no_products')}</p>`;
        bindProductCardEvents();
      }
    });
  }
  container.innerHTML = products.map(p => renderProductCard(p)).join('');
  bindProductCardEvents();
}

// ========== 绑定产品卡片点击事件 ==========
function bindProductCardEvents() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      showProductModal(id);
    });
  });
}

// ========== 产品详情弹窗 ==========
function showProductModal(id) {
  const p = DB.getProductById(id);
  if (!p) return;

  let modal = document.getElementById('productModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.classList.contains('modal-close')) {
        modal.classList.remove('show');
      }
    });
  }

  const tag = tl(p, 'tag');
  modal.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h2>${tl(p, 'name')}</h2>
        <button class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <img class="modal-cover" src="${p.cover}" alt="${tl(p, 'name')}">
        ${tag ? `<span class="product-tag ${tag === '热销' ? 'hot' : tag === '新品' ? 'new' : 'recommend'}">${tag}</span><br><br>` : ''}
        <p class="modal-desc">${tl(p, 'desc')}</p>
        ${p.specs && p.specs.length ? `
          <h3 style="margin-bottom:16px;font-size:1.2rem;">${t('tech_specs')}</h3>
          <table class="spec-table">
            ${p.specs.map(s => `<tr><th>${tl(s, 'label')}</th><td>${s.value}</td></tr>`).join('')}
          </table>
        ` : ''}
        <div style="margin-top:24px;display:flex;gap:12px;align-items:center;">
          <span style="font-size:1.5rem;font-weight:700;color:var(--primary);">${tl(p, 'price')}</span>
          <a href="contact.html" class="btn btn-primary">${t('inquire_purchase')}</a>
        </div>
      </div>
    </div>
  `;
  modal.classList.add('show');
}

// ========== 视频页：渲染视频 ==========
function renderVideos() {
  const container = document.getElementById('videoGrid');
  if (!container) return;
  const videos = DB.getVideos();
  if (!videos.length) {
    container.innerHTML = `<p style="text-align:center;color:var(--text-light);padding:48px;">${t('no_videos')}</p>`;
    return;
  }

  // 筛选栏
  const categories = [t('filter_all'), ...new Set(videos.map(v => tl(v, 'category')))];
  const filterBar = document.getElementById('videoFilterBar');
  if (filterBar) {
    filterBar.innerHTML = categories.map((c, i) =>
      `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-cat="${c}">${c}</button>`
    ).join('');
    filterBar.addEventListener('click', e => {
      if (e.target.classList.contains('filter-btn')) {
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.dataset.cat;
        const allLabel = t('filter_all');
        const filtered = cat === allLabel ? videos : videos.filter(v => tl(v, 'category') === cat);
        renderVideoCards(filtered);
      }
    });
  }
  renderVideoCards(videos);
}

function renderVideoCards(videos) {
  const container = document.getElementById('videoGrid');
  container.innerHTML = videos.map(v => `
    <div class="video-card" data-url="${v.url}">
      <div class="video-thumb">
        <img src="${v.cover}" alt="${tl(v, 'title')}" loading="lazy">
        <div class="video-play icon">${ICONS.play}</div>
        <span class="video-duration">${v.duration}</span>
      </div>
      <div class="video-body">
        <div class="video-category">${tl(v, 'category')}</div>
        <h3>${tl(v, 'title')}</h3>
        <p>${tl(v, 'desc')}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      window.open(card.dataset.url, '_blank');
    });
  });
}

// ========== 联系页：渲染信息 + 表单 ==========
function renderContact() {
  const infoCard = document.getElementById('contactInfo');
  if (!infoCard) return;
  const site = DB.getSite();

  infoCard.innerHTML = `
    <h3>${t('contact_info')}</h3>
    <div class="contact-item">
      <div class="contact-item-icon icon">${ICONS.phone}</div>
      <div>
        <div class="contact-item-label">${t('hotline')}</div>
        <div class="contact-item-value">${site.phone}</div>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-item-icon icon">${ICONS.mail}</div>
      <div>
        <div class="contact-item-label">${t('email_addr')}</div>
        <div class="contact-item-value">${site.email}</div>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-item-icon icon">${ICONS.location}</div>
      <div>
        <div class="contact-item-label">${t('company_addr')}</div>
        <div class="contact-item-value">${tl(site, 'address')}</div>
      </div>
    </div>
  `;

  // 表单提交
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const msg = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };
      if (!msg.name || !msg.message) {
        showToast(t('toast_msg_error'), 'error');
        return;
      }
      DB.addMessage(msg);
      form.reset();
      showToast(t('toast_msg_success'), 'success');
    });
  }
}

// ========== 首页：统计数据 ==========
function renderStats() {
  const container = document.getElementById('statsGrid');
  if (!container) return;
  const products = DB.getProducts();
  const videos = DB.getVideos();
  const stats = [
    { num: products.length + '+', label: t('stat_products') },
    { num: '500+', label: t('stat_clients') },
    { num: videos.length + '+', label: t('stat_videos') },
    { num: '99.9%', label: t('stat_uptime') }
  ];
  container.innerHTML = stats.map(s => `
    <div class="stat-item">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  applyLang();
  initBackToTop();
});
