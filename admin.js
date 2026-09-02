/**
 * admin.js - 后台管理逻辑
 * 登录验证、仪表盘、产品/轮播/视频/留言/站点管理
 * 支持中英双语国际化
 */

// ========== 后台语言切换 ==========
function toggleLangAdmin() {
  const current = detectLang();
  const newLang = current === 'zh' ? 'en' : 'zh';
  DB.setLang(newLang);
  applyAdminLang();
}

// ========== 后台应用语言 ==========
function applyAdminLang() {
  // 1. 更新 <html lang>
  document.documentElement.lang = detectLang() === 'zh' ? 'zh-CN' : 'en';

  // 2. 更新带 data-i18n 的静态元素
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

  // 4. 更新语言切换按钮文字
  const langBtns = document.querySelectorAll('#langToggleAdmin, #langToggleLogin');
  langBtns.forEach(btn => { btn.textContent = t('lang_switch'); });

  // 5. 重新渲染当前面板
  const activePanel = document.querySelector('.sidebar-item.active');
  if (activePanel) {
    switchPanel(activePanel.dataset.panel);
  }
}

// ========== 登录处理 ==========
function initLogin() {
  // 先应用语言
  applyAdminLang();

  if (DB.isLoggedIn()) {
    showAdmin();
  } else {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('adminApp').style.display = 'none';
  }

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const result = DB.login(formData.get('username'), formData.get('password'));
    if (result.success) {
      showAdmin();
      adminToast(t('admin_login_success'));
    } else {
      adminToast(t('admin_login_fail'), 'error');
    }
  });
}

function showAdmin() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('adminApp').style.display = 'flex';
  switchPanel('dashboard');
}

// ========== Toast ==========
function adminToast(msg, type = '') {
  let toast = document.getElementById('adminToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'adminToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'toast ' + type;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ========== 侧边栏切换 ==========
document.querySelectorAll('.sidebar-item[data-panel]').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    switchPanel(item.dataset.panel);
  });
});

function switchPanel(panel) {
  document.getElementById('pageTitle').textContent = t('admin_' + panel);
  const content = document.getElementById('adminContent');
  switch (panel) {
    case 'dashboard': renderDashboard(content); break;
    case 'products': renderAdminProducts(content); break;
    case 'banners': renderAdminBanners(content); break;
    case 'videos': renderAdminVideos(content); break;
    case 'messages': renderAdminMessages(content); break;
    case 'settings': renderAdminSettings(content); break;
    case 'template': renderAdminTemplate(content); break;
  }
}

// ========== 仪表盘 ==========
function renderDashboard(container) {
  const products = DB.getProducts();
  const banners = DB.getBanners();
  const videos = DB.getVideos();
  const messages = DB.getMessages();
  const unread = messages.filter(m => m.status === 'unread').length;

  container.innerHTML = `
    <div class="dash-grid">
      <div class="dash-card">
        <div class="dash-card-icon blue">📦</div>
        <div class="dash-card-label">${t('admin_total_products')}</div>
        <div class="dash-card-value">${products.length}</div>
      </div>
      <div class="dash-card">
        <div class="dash-card-icon green">🖼️</div>
        <div class="dash-card-label">${t('admin_total_banners')}</div>
        <div class="dash-card-value">${banners.length}</div>
      </div>
      <div class="dash-card">
        <div class="dash-card-icon orange">🎬</div>
        <div class="dash-card-label">${t('admin_total_videos')}</div>
        <div class="dash-card-value">${videos.length}</div>
      </div>
      <div class="dash-card">
        <div class="dash-card-icon purple">💬</div>
        <div class="dash-card-label">${t('admin_total_messages')}</div>
        <div class="dash-card-value">${messages.length} / ${unread}</div>
      </div>
    </div>
    <div class="data-table" style="margin-top:32px;">
      <table style="width:100%;">
        <thead>
          <tr><th>${t('admin_recent_messages')}</th><th>${t('admin_contact')}</th><th>${t('admin_time')}</th><th>${t('admin_status')}</th></tr>
        </thead>
        <tbody>
          ${messages.slice(0, 5).map(m => `
            <tr>
              <td>${m.name}：${(m.message || '').substring(0, 40)}...</td>
              <td>${m.phone || m.email || '-'}</td>
              <td>${m.time}</td>
              <td><span class="badge ${m.status === 'unread' ? 'badge-red' : 'badge-gray'}">${m.status === 'unread' ? t('admin_unread') : t('admin_read')}</span></td>
            </tr>
          `).join('') || `<tr><td colspan="4" style="text-align:center;padding:32px;color:#94a3b8;">${t('admin_no_messages')}</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

// ========== 产品管理 ==========
function renderAdminProducts(container) {
  const products = DB.getProducts();
  container.innerHTML = `
    <div class="toolbar">
      <div class="toolbar-left">
        <input type="text" class="search-box" id="productSearch" placeholder="${t('admin_search_products')}">
      </div>
      <button class="btn btn-primary" onclick="openProductModal()">${t('admin_add_product')}</button>
    </div>
    <div class="data-table">
      <table style="width:100%;">
        <thead>
          <tr>
            <th>${t('admin_cover')}</th><th>${t('admin_name')}</th><th>${t('admin_category')}</th><th>${t('admin_price')}</th><th>${t('admin_tag')}</th><th>${t('admin_actions')}</th>
          </tr>
        </thead>
        <tbody id="productTableBody">
          ${products.map(p => productRow(p)).join('')}
        </tbody>
      </table>
    </div>
  `;

  document.getElementById('productSearch').addEventListener('input', e => {
    const kw = e.target.value.toLowerCase();
    const filtered = DB.getProducts().filter(p => p.name.toLowerCase().includes(kw));
    document.getElementById('productTableBody').innerHTML = filtered.map(p => productRow(p)).join('') ||
      `<tr><td colspan="6" style="text-align:center;padding:32px;color:#94a3b8;">${t('admin_no_match')}</td></tr>`;
  });
}

function productRow(p) {
  const tagBadge = p.tag === '热销' ? 'badge-red' : p.tag === '新品' ? 'badge-green' : p.tag === '推荐' ? 'badge-blue' : 'badge-gray';
  return `
    <tr>
      <td><img class="thumb" src="${p.cover}" alt=""></td>
      <td style="font-weight:600;">${p.name}</td>
      <td><span class="badge badge-blue">${p.category}</span></td>
      <td>${p.price}</td>
      <td>${p.tag ? `<span class="badge ${tagBadge}">${p.tag}</span>` : '<span class="badge badge-gray">-</span>'}</td>
      <td>
        <button class="action-btn edit" onclick="openProductModal(${p.id})">${t('admin_edit')}</button>
        <button class="action-btn delete" onclick="deleteProduct(${p.id})">${t('admin_delete')}</button>
      </td>
    </tr>
  `;
}

function openProductModal(id) {
  const p = id ? DB.getProductById(id) : null;
  const title = p ? t('admin_edit_product') : t('admin_add_product_title');
  document.getElementById('editModalTitle').textContent = title;
  document.getElementById('editModalBody').innerHTML = `
    <form class="edit-form" id="productEditForm">
      <div class="form-group">
        <label>${t('admin_product_name')} *</label>
        <input type="text" class="form-control" name="name" value="${p ? p.name : ''}" required>
      </div>
      <div class="form-group">
        <label>${t('admin_product_cat')} *</label>
        <input type="text" class="form-control" name="category" value="${p ? p.category : ''}" required>
      </div>
      <div class="form-group">
        <label>${t('admin_product_price')} *</label>
        <input type="text" class="form-control" name="price" value="${p ? p.price : ''}" required>
      </div>
      <div class="form-group">
        <label>${t('admin_product_tag')}</label>
        <select class="form-control" name="tag">
          <option value="">-</option>
          <option value="热销" ${p && p.tag === '热销' ? 'selected' : ''}>${t('admin_tag') === 'Tag' ? 'Hot' : '热销'}</option>
          <option value="新品" ${p && p.tag === '新品' ? 'selected' : ''}>${t('admin_tag') === 'Tag' ? 'New' : '新品'}</option>
          <option value="推荐" ${p && p.tag === '推荐' ? 'selected' : ''}>${t('admin_tag') === 'Tag' ? 'Recommended' : '推荐'}</option>
        </select>
      </div>
      <div class="form-group">
        <label>${t('admin_product_cover')}</label>
        <input type="text" class="form-control" name="cover" value="${p ? p.cover : ''}">
      </div>
      <div class="form-group">
        <label>${t('admin_product_summary')}</label>
        <input type="text" class="form-control" name="summary" value="${p ? p.summary : ''}">
      </div>
      <div class="form-group">
        <label>${t('admin_product_desc')}</label>
        <textarea class="form-control" name="desc">${p ? p.desc : ''}</textarea>
      </div>
      <div class="form-group">
        <label>${t('admin_product_specs')}</label>
        <textarea class="form-control" name="specs">${p && p.specs ? p.specs.map(s => s.label + '|' + s.value).join('\n') : ''}</textarea>
      </div>
      <div class="edit-form-actions">
        <button type="button" class="btn btn-ghost" onclick="closeEditModal()">${t('admin_cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('admin_save')}</button>
      </div>
    </form>
  `;
  document.getElementById('editModal').classList.add('show');

  document.getElementById('productEditForm').addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const specsText = formData.get('specs').trim();
    const specs = specsText ? specsText.split('\n').filter(l => l.includes('|')).map(l => {
      const [label, ...rest] = l.split('|');
      return { label: label.trim(), value: rest.join('|').trim() };
    }) : [];

    const data = {
      name: formData.get('name'),
      category: formData.get('category'),
      price: formData.get('price'),
      tag: formData.get('tag'),
      cover: formData.get('cover') || `https://picsum.photos/seed/p${Date.now()}/600/400`,
      summary: formData.get('summary'),
      desc: formData.get('desc'),
      specs: specs
    };

    if (id) {
      DB.updateProduct(id, data);
      adminToast(t('admin_product_updated'));
    } else {
      DB.addProduct(data);
      adminToast(t('admin_product_added'));
    }
    closeEditModal();
    renderAdminProducts(document.getElementById('adminContent'));
  });
}

function deleteProduct(id) {
  if (!confirm(t('admin_confirm_delete_product'))) return;
  DB.deleteProduct(id);
  adminToast(t('admin_product_deleted'));
  renderAdminProducts(document.getElementById('adminContent'));
}

// ========== 轮播管理 ==========
function renderAdminBanners(container) {
  const banners = DB.getBanners();
  container.innerHTML = `
    <div class="toolbar">
      <div class="toolbar-left"><h3>${t('admin_banner_mgmt')}</h3></div>
      <button class="btn btn-primary" onclick="openBannerModal()">+ ${t('admin_add_banner')}</button>
    </div>
    <div class="data-table">
      <table style="width:100%;">
        <thead>
          <tr><th>${t('admin_preview')}</th><th>${t('admin_banner_title')}</th><th>${t('admin_banner_subtitle')}</th><th>${t('admin_link')}</th><th>${t('admin_actions')}</th></tr>
        </thead>
        <tbody>
          ${banners.map(b => `
            <tr>
              <td><img class="thumb" src="${b.image}" alt="" style="width:100px;"></td>
              <td style="font-weight:600;">${b.title}</td>
              <td style="max-width:300px;">${b.subtitle}</td>
              <td>${b.link}</td>
              <td>
                <button class="action-btn edit" onclick="openBannerModal(${b.id})">${t('admin_edit')}</button>
                <button class="action-btn delete" onclick="deleteBanner(${b.id})">${t('admin_delete')}</button>
              </td>
            </tr>
          `).join('') || `<tr><td colspan="5" style="text-align:center;padding:32px;color:#94a3b8;">${t('admin_no_banners')}</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function openBannerModal(id) {
  const banners = DB.getBanners();
  const b = id ? banners.find(x => x.id === id) : null;
  document.getElementById('editModalTitle').textContent = b ? t('admin_edit_banner') : t('admin_add_banner');
  document.getElementById('editModalBody').innerHTML = `
    <form class="edit-form" id="bannerEditForm">
      <div class="form-group">
        <label>${t('admin_banner_title')} *</label>
        <input type="text" class="form-control" name="title" value="${b ? b.title : ''}" required>
      </div>
      <div class="form-group">
        <label>${t('admin_banner_subtitle')}</label>
        <input type="text" class="form-control" name="subtitle" value="${b ? b.subtitle : ''}">
      </div>
      <div class="form-group">
        <label>${t('admin_banner_image')}</label>
        <input type="text" class="form-control" name="image" value="${b ? b.image : ''}">
      </div>
      <div class="form-group">
        <label>${t('admin_banner_link')}</label>
        <input type="text" class="form-control" name="link" value="${b ? b.link : 'product.html'}">
      </div>
      <div class="edit-form-actions">
        <button type="button" class="btn btn-ghost" onclick="closeEditModal()">${t('admin_cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('admin_save')}</button>
      </div>
    </form>
  `;
  document.getElementById('editModal').classList.add('show');

  document.getElementById('bannerEditForm').addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get('title'),
      subtitle: formData.get('subtitle'),
      image: formData.get('image') || `https://picsum.photos/seed/b${Date.now()}/1600/600`,
      link: formData.get('link') || 'product.html'
    };
    if (id) {
      DB.updateBanner(id, data);
      adminToast(t('admin_banner_updated'));
    } else {
      DB.addBanner(data);
      adminToast(t('admin_banner_added'));
    }
    closeEditModal();
    renderAdminBanners(document.getElementById('adminContent'));
  });
}

function deleteBanner(id) {
  if (!confirm(t('admin_confirm_delete_banner'))) return;
  DB.deleteBanner(id);
  adminToast(t('admin_banner_deleted'));
  renderAdminBanners(document.getElementById('adminContent'));
}

// ========== 视频管理 ==========
function renderAdminVideos(container) {
  const videos = DB.getVideos();
  container.innerHTML = `
    <div class="toolbar">
      <div class="toolbar-left"><h3>${t('admin_video_mgmt')}</h3></div>
      <button class="btn btn-primary" onclick="openVideoModal()">+ ${t('admin_add_video')}</button>
    </div>
    <div class="data-table">
      <table style="width:100%;">
        <thead>
          <tr><th>${t('admin_cover')}</th><th>${t('admin_name')}</th><th>${t('admin_category')}</th><th>${t('admin_video_duration')}</th><th>${t('admin_link')}</th><th>${t('admin_actions')}</th></tr>
        </thead>
        <tbody>
          ${videos.map(v => `
            <tr>
              <td><img class="thumb" src="${v.cover}" alt=""></td>
              <td style="font-weight:600;">${v.title}</td>
              <td><span class="badge badge-blue">${v.category}</span></td>
              <td>${v.duration}</td>
              <td style="max-width:200px;font-size:0.8rem;color:#64748b;">${v.url}</td>
              <td>
                <button class="action-btn edit" onclick="openVideoModal(${v.id})">${t('admin_edit')}</button>
                <button class="action-btn delete" onclick="deleteVideo(${v.id})">${t('admin_delete')}</button>
              </td>
            </tr>
          `).join('') || `<tr><td colspan="6" style="text-align:center;padding:32px;color:#94a3b8;">${t('admin_no_videos')}</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function openVideoModal(id) {
  const videos = DB.getVideos();
  const v = id ? videos.find(x => x.id === id) : null;
  document.getElementById('editModalTitle').textContent = v ? t('admin_edit_video') : t('admin_add_video');
  document.getElementById('editModalBody').innerHTML = `
    <form class="edit-form" id="videoEditForm">
      <div class="form-group">
        <label>${t('admin_video_title')} *</label>
        <input type="text" class="form-control" name="title" value="${v ? v.title : ''}" required>
      </div>
      <div class="form-group">
        <label>${t('admin_video_cat')} *</label>
        <input type="text" class="form-control" name="category" value="${v ? v.category : ''}" required>
      </div>
      <div class="form-group">
        <label>${t('admin_video_duration')}</label>
        <input type="text" class="form-control" name="duration" value="${v ? v.duration : ''}">
      </div>
      <div class="form-group">
        <label>${t('admin_video_cover')}</label>
        <input type="text" class="form-control" name="cover" value="${v ? v.cover : ''}">
      </div>
      <div class="form-group">
        <label>${t('admin_video_url')} *</label>
        <input type="text" class="form-control" name="url" value="${v ? v.url : ''}" required>
      </div>
      <div class="form-group">
        <label>${t('admin_video_desc')}</label>
        <textarea class="form-control" name="desc">${v ? v.desc : ''}</textarea>
      </div>
      <div class="edit-form-actions">
        <button type="button" class="btn btn-ghost" onclick="closeEditModal()">${t('admin_cancel')}</button>
        <button type="submit" class="btn btn-primary">${t('admin_save')}</button>
      </div>
    </form>
  `;
  document.getElementById('editModal').classList.add('show');

  document.getElementById('videoEditForm').addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get('title'),
      category: formData.get('category'),
      duration: formData.get('duration') || '00:00',
      cover: formData.get('cover') || `https://picsum.photos/seed/v${Date.now()}/480/270`,
      url: formData.get('url'),
      desc: formData.get('desc')
    };
    if (id) {
      DB.updateVideo(id, data);
      adminToast(t('admin_video_updated'));
    } else {
      DB.addVideo(data);
      adminToast(t('admin_video_added'));
    }
    closeEditModal();
    renderAdminVideos(document.getElementById('adminContent'));
  });
}

function deleteVideo(id) {
  if (!confirm(t('admin_confirm_delete_video'))) return;
  DB.deleteVideo(id);
  adminToast(t('admin_video_deleted'));
  renderAdminVideos(document.getElementById('adminContent'));
}

// ========== 留言管理 ==========
function renderAdminMessages(container) {
  const messages = DB.getMessages();
  if (!messages.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">💬</div>
        <p>${t('admin_no_messages')}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = messages.map(m => `
    <div class="message-card">
      <div class="message-avatar">${m.name.charAt(0).toUpperCase()}</div>
      <div class="message-body">
        <div class="message-header">
          <span class="message-name">${m.name}</span>
          <span class="message-time">${m.time}</span>
        </div>
        <div class="message-contact">
          ${m.email ? t('admin_site_email') + ': ' + m.email : ''}
          ${m.phone ? ' | ' + t('form_phone') + ': ' + m.phone : ''}
          ${m.subject ? ' | ' + t('form_subject') + ': ' + m.subject : ''}
        </div>
        <div class="message-text">${m.message}</div>
        <div class="message-actions">
          <span class="badge ${m.status === 'unread' ? 'badge-red' : 'badge-gray'}">${m.status === 'unread' ? t('admin_unread') : t('admin_read')}</span>
          ${m.status === 'unread' ? `<button class="action-btn edit" onclick="markRead(${m.id})">${t('admin_mark_read')}</button>` : ''}
          <button class="action-btn delete" onclick="deleteMessage(${m.id})">${t('admin_delete')}</button>
        </div>
      </div>
    </div>
  `).join('');
}

function markRead(id) {
  DB.markMessageRead(id);
  adminToast(t('admin_msg_marked'));
  renderAdminMessages(document.getElementById('adminContent'));
}

function deleteMessage(id) {
  if (!confirm(t('admin_confirm_delete_msg'))) return;
  DB.deleteMessage(id);
  adminToast(t('admin_msg_deleted'));
  renderAdminMessages(document.getElementById('adminContent'));
}

// ========== 站点设置 ==========
function renderAdminSettings(container) {
  const site = DB.getSite();
  container.innerHTML = `
    <form class="edit-form settings-form" id="settingsForm">
      <div class="form-group">
        <label>${t('admin_site_name')}</label>
        <input type="text" class="form-control" name="name" value="${site.name}">
      </div>
      <div class="form-group">
        <label>${t('admin_site_logo')}</label>
        <input type="text" class="form-control" name="logo" value="${site.logo}" maxlength="3">
      </div>
      <div class="form-group">
        <label>${t('admin_site_slogan')}</label>
        <input type="text" class="form-control" name="slogan" value="${site.slogan}">
      </div>
      <div class="form-group">
        <label>${t('admin_site_desc')}</label>
        <textarea class="form-control" name="description">${site.description}</textarea>
      </div>
      <div class="form-group">
        <label>${t('admin_site_phone')}</label>
        <input type="text" class="form-control" name="phone" value="${site.phone}">
      </div>
      <div class="form-group">
        <label>${t('admin_site_email')}</label>
        <input type="text" class="form-control" name="email" value="${site.email}">
      </div>
      <div class="form-group">
        <label>${t('admin_site_addr')}</label>
        <input type="text" class="form-control" name="address" value="${site.address}">
      </div>
      <div class="form-group">
        <label>${t('admin_site_copyright')}</label>
        <input type="text" class="form-control" name="copyright" value="${site.copyright}">
      </div>
      <div class="form-group">
        <label>${t('admin_site_icp')}</label>
        <input type="text" class="form-control" name="icp" value="${site.icp}">
      </div>
      <div class="edit-form-actions">
        <button type="submit" class="btn btn-primary">${t('admin_save_settings')}</button>
      </div>
    </form>
    <hr style="margin:40px 0;border:none;border-top:1px solid #e2e8f0;">
    <h3 style="margin-bottom:16px;">${t('admin_data_mgmt')}</h3>
    <div style="display:flex;gap:12px;">
      <button class="btn btn-danger" onclick="resetData()">${t('admin_reset_all')}</button>
    </div>
  `;

  document.getElementById('settingsForm').addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    DB.updateSite(data);
    adminToast(t('admin_settings_saved'));
  });
}

function resetData() {
  if (!confirm(t('admin_reset_confirm1'))) return;
  if (!confirm(t('admin_reset_confirm2'))) return;
  DB.reset();
  adminToast(t('admin_data_reset'));
  switchPanel('dashboard');
}

// ========== 模板配置 ==========
let selectedIndustry = null;
let selectedColorScheme = null;

function renderAdminTemplate(container) {
  const industryList = DB.getIndustryList();
  const colorList = DB.getAllColorSchemes();
  const currentColorKey = DB.getColorSchemeKey();

  if (!selectedColorScheme) selectedColorScheme = currentColorKey;
  if (!selectedIndustry) selectedIndustry = null;

  const lang = detectLang();
  const indName = (ind) => lang === 'en' ? (ind.name_en || ind.name) : ind.name;
  const indDesc = (ind) => lang === 'en' ? (ind.description_en || ind.description) : ind.description;
  const csName = (cs) => cs.name;

  container.innerHTML = `
    <!-- 行业模板选择 -->
    <div class="template-section">
      <div class="template-section-title">📦 ${t('admin_template_section')}</div>
      <div class="template-section-desc">${t('admin_template_desc')}</div>
      <div class="industry-grid" id="industryGrid">
        ${industryList.map(ind => `
          <div class="industry-card ${selectedIndustry === ind.key ? 'active' : ''}" data-key="${ind.key}">
            <div class="industry-card-icon">${ind.icon}</div>
            <div class="industry-card-name">${indName(ind)}</div>
            <div class="industry-card-desc">${indDesc(ind)}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 配色方案选择 -->
    <div class="template-section">
      <div class="template-section-title">🎨 ${t('admin_color_section')}</div>
      <div class="template-section-desc">${t('admin_color_desc')}</div>
      <div class="color-grid" id="colorGrid">
        ${colorList.map(cs => `
          <div class="color-card ${selectedColorScheme === cs.key ? 'active' : ''}" data-key="${cs.key}">
            <div class="color-card-name">${csName(cs)}</div>
            <div class="color-preview">
              <div class="color-swatch main" style="background:${cs.primary};"></div>
              <div class="color-swatch" style="background:${cs.primaryDark};"></div>
              <div class="color-swatch" style="background:${cs.primaryLight};"></div>
              <div class="color-swatch" style="background:${cs.secondary};"></div>
            </div>
            <div class="color-info">${t('admin_main_color')} ${cs.primary}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 预览 -->
    <div class="template-preview" id="templatePreview">
      <div class="template-preview-title">📋 ${t('admin_preview')}</div>
      <div id="previewContent">
        <div class="preview-field">
          <span class="preview-field-label">${t('admin_current_color')}</span>
          <span class="preview-field-value" id="previewColorName">-</span>
        </div>
        <div class="preview-field">
          <span class="preview-field-label">${t('admin_selected_industry')}</span>
          <span class="preview-field-value" id="previewIndustryName">${t('admin_not_selected')}</span>
        </div>
        <div class="preview-field" id="previewProductsRow" style="display:none;">
          <span class="preview-field-label">${t('admin_will_replace')}</span>
          <span class="preview-field-value">
            <div class="preview-product-list" id="previewProducts"></div>
          </span>
        </div>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="template-actions">
      <button class="btn btn-primary" id="applyColorBtn">${t('admin_apply_color')}</button>
      <button class="btn btn-primary" id="applyIndustryBtn" ${!selectedIndustry ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>${t('admin_apply_industry')}</button>
      <button class="btn btn-outline" id="resetSelectionBtn">${t('admin_reset_selection')}</button>
    </div>
  `;

  container.querySelectorAll('.industry-card').forEach(card => {
    card.addEventListener('click', () => {
      container.querySelectorAll('.industry-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedIndustry = card.dataset.key;
      updatePreview(container);
      const applyBtn = document.getElementById('applyIndustryBtn');
      applyBtn.disabled = false;
      applyBtn.style.opacity = '1';
      applyBtn.style.cursor = 'pointer';
    });
  });

  container.querySelectorAll('.color-card').forEach(card => {
    card.addEventListener('click', () => {
      container.querySelectorAll('.color-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedColorScheme = card.dataset.key;
      updatePreview(container);
    });
  });

  document.getElementById('applyColorBtn').addEventListener('click', () => {
    DB.setColorScheme(selectedColorScheme);
    applyThemeToAdmin();
    adminToast(t('admin_color_applied'));
    container.querySelectorAll('.color-card').forEach(c => {
      c.classList.toggle('active', c.dataset.key === selectedColorScheme);
    });
  });

  document.getElementById('applyIndustryBtn').addEventListener('click', () => {
    if (!selectedIndustry) {
      adminToast(t('admin_select_first'), 'error');
      return;
    }
    const tpl = DB.getIndustryTemplate(selectedIndustry);
    if (!tpl) return;
    const tplName = lang === 'en' ? (tpl.name_en || tpl.name) : tpl.name;
    const confirmMsg = t('admin_apply_template_confirm').replace('{name}', tplName);
    if (!confirm(confirmMsg)) return;
    DB.applyIndustryTemplate(selectedIndustry);
    selectedColorScheme = tpl.colorScheme;
    applyThemeToAdmin();
    adminToast(t('admin_template_applied') + ' ' + tplName);
    renderAdminTemplate(container);
  });

  document.getElementById('resetSelectionBtn').addEventListener('click', () => {
    selectedIndustry = null;
    selectedColorScheme = DB.getColorSchemeKey();
    renderAdminTemplate(container);
  });

  updatePreview(container);
}

function updatePreview(container) {
  const lang = detectLang();
  const colorName = COLOR_SCHEMES[selectedColorScheme]
    ? COLOR_SCHEMES[selectedColorScheme].name
    : selectedColorScheme;
  document.getElementById('previewColorName').textContent = colorName;

  if (selectedIndustry) {
    const tpl = DB.getIndustryTemplate(selectedIndustry);
    if (tpl) {
      const tplName = lang === 'en' ? (tpl.name_en || tpl.name) : tpl.name;
      const siteName = lang === 'en' ? (tpl.site.name_en || tpl.site.name) : tpl.site.name;
      document.getElementById('previewIndustryName').textContent = `${tpl.icon} ${tplName} — ${siteName}`;
      const productsRow = document.getElementById('previewProductsRow');
      productsRow.style.display = 'flex';
      document.getElementById('previewProducts').innerHTML = tpl.products.map(p =>
        `<span class="preview-product-tag">${lang === 'en' ? (p.name_en || p.name) : p.name}</span>`
      ).join('');
    }
  } else {
    document.getElementById('previewIndustryName').textContent = t('admin_not_selected');
    document.getElementById('previewProductsRow').style.display = 'none';
  }
}

function applyThemeToAdmin() {
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

// ========== 关闭弹窗 ==========
function closeEditModal() {
  document.getElementById('editModal').classList.remove('show');
}

document.getElementById('editModalClose').addEventListener('click', closeEditModal);
document.getElementById('editModal').addEventListener('click', e => {
  if (e.target.id === 'editModal') closeEditModal();
});

// ========== 退出登录 ==========
document.getElementById('logoutBtn').addEventListener('click', () => {
  if (!confirm(t('admin_confirm_logout'))) return;
  DB.logout();
  document.getElementById('adminApp').style.display = 'none';
  document.getElementById('loginPage').style.display = 'flex';
  adminToast(t('admin_logout_success'));
});

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', initLogin);
