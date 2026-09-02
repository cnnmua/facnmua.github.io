/**
 * data.js - 数据层
 * 全站数据存储与管理，使用 localStorage 持久化
 * GitHub 风格纯前端架构，无需后端服务器
 * 支持多行业模板切换 + 配色方案自定义 + 中英双语
 */

// ========== I18N 翻译字典 ==========
const I18N = {
  // 导航
  nav_home: { zh: '首页', en: 'Home' },
  nav_products: { zh: '产品中心', en: 'Products' },
  nav_videos: { zh: '视频中心', en: 'Videos' },
  nav_contact: { zh: '联系我们', en: 'Contact' },
  // Header
  free_consult: { zh: '免费咨询', en: 'Free Consult' },
  admin_panel: { zh: '管理后台', en: 'Admin' },
  // Hero
  learn_more: { zh: '了解更多', en: 'Learn More' },
  // Features
  why_choose: { zh: '为什么选择', en: 'Why Choose' },
  why_choose_sub: { zh: '六大核心优势，为您的数字化转型保驾护航', en: 'Six core advantages to empower your digital transformation' },
  // Stats
  stat_products: { zh: '核心产品', en: 'Core Products' },
  stat_clients: { zh: '企业客户', en: 'Enterprise Clients' },
  stat_videos: { zh: '视频资源', en: 'Video Resources' },
  stat_uptime: { zh: '服务可用性', en: 'Service Uptime' },
  // Products section
  core_products: { zh: '核心产品', en: 'Core Products' },
  core_products_sub: { zh: '覆盖物联网、大数据、智能安防等多领域解决方案', en: 'Solutions covering IoT, Big Data, AI Security and more' },
  view_all_products: { zh: '查看全部产品', en: 'View All Products' },
  // Product page
  products_title: { zh: '产品中心', en: 'Products' },
  products_sub: { zh: '覆盖物联网、大数据、智能安防、智慧社区等多领域的核心产品与解决方案', en: 'Core products and solutions across IoT, Big Data, AI Security, Smart Community and more' },
  filter_all: { zh: '全部', en: 'All' },
  no_products: { zh: '暂无该类别产品', en: 'No products in this category' },
  tech_specs: { zh: '技术规格', en: 'Specifications' },
  inquire_purchase: { zh: '咨询购买', en: 'Inquire' },
  no_suitable: { zh: '找不到合适的方案？', en: 'Cannot find the right solution?' },
  no_suitable_sub: { zh: '我们支持按需定制，联系我们的技术团队获取专属解决方案', en: 'We support on-demand customization. Contact our tech team for a tailored solution.' },
  contact_custom: { zh: '联系定制', en: 'Contact for Customization' },
  // Video page
  videos_title: { zh: '视频中心', en: 'Videos' },
  videos_sub: { zh: '产品演示、使用教程、客户案例与技术分享，带您全方位了解 TechVision', en: 'Product demos, tutorials, case studies and tech sharing' },
  no_videos: { zh: '暂无视频', en: 'No videos available' },
  want_more: { zh: '想了解更多？', en: 'Want to know more?' },
  want_more_sub: { zh: '浏览我们的产品中心，或直接联系获取专属演示', en: 'Browse our products or contact us for a personalized demo' },
  view_products: { zh: '查看产品', en: 'View Products' },
  // Contact page
  contact_title: { zh: '联系我们', en: 'Contact Us' },
  contact_sub: { zh: '无论您有任何技术问题或合作意向，我们都期待您的来信', en: 'Whether you have technical questions or partnership interests, we look forward to hearing from you' },
  contact_info: { zh: '联系方式', en: 'Contact Information' },
  hotline: { zh: '客服热线', en: 'Hotline' },
  email_addr: { zh: '电子邮箱', en: 'Email' },
  company_addr: { zh: '公司地址', en: 'Address' },
  online_message: { zh: '在线留言', en: 'Leave a Message' },
  form_name: { zh: '姓名', en: 'Name' },
  form_email: { zh: '邮箱', en: 'Email' },
  form_phone: { zh: '电话', en: 'Phone' },
  form_subject: { zh: '主题', en: 'Subject' },
  form_message: { zh: '留言内容', en: 'Message' },
  form_name_ph: { zh: '请输入您的姓名', en: 'Enter your name' },
  form_email_ph: { zh: '请输入您的电子邮箱', en: 'Enter your email' },
  form_phone_ph: { zh: '请输入您的联系电话', en: 'Enter your phone number' },
  form_subject_ph: { zh: '请输入咨询主题', en: 'Enter the subject' },
  form_message_ph: { zh: '请输入您的留言或咨询内容', en: 'Enter your message or inquiry' },
  submit_message: { zh: '提交留言', en: 'Submit' },
  // CTA
  cta_title: { zh: '开启您的数字化转型之旅', en: 'Start Your Digital Transformation' },
  cta_sub: { zh: '无论您处于哪个行业，我们都能为您提供量身定制的技术方案', en: 'No matter your industry, we provide tailored technology solutions' },
  contact_now: { zh: '立即咨询', en: 'Contact Now' },
  // Toast
  toast_msg_success: { zh: '留言提交成功，我们会尽快与您联系！', en: 'Message submitted! We will contact you soon.' },
  toast_msg_error: { zh: '请填写姓名和留言内容', en: 'Please fill in your name and message' },
  // Footer
  footer_quick_links: { zh: '快速导航', en: 'Quick Links' },
  footer_products: { zh: '产品中心', en: 'Products' },
  footer_contact: { zh: '联系我们', en: 'Contact' },
  footer_iot: { zh: '物联网设备', en: 'IoT Devices' },
  footer_bigdata: { zh: '大数据平台', en: 'Big Data' },
  footer_security: { zh: '智能安防', en: 'AI Security' },
  footer_community: { zh: '智慧社区', en: 'Smart Community' },
  // Language switch
  lang_switch: { zh: 'EN', en: '中文' },
  // Admin
  admin_login: { zh: '管理后台', en: 'Admin Panel' },
  admin_username: { zh: '用户名', en: 'Username' },
  admin_password: { zh: '密码', en: 'Password' },
  admin_login_btn: { zh: '登录', en: 'Login' },
  admin_login_hint: { zh: '默认账号: admin / 密码: admin123', en: 'Default: admin / admin123' },
  admin_dashboard: { zh: '仪表盘', en: 'Dashboard' },
  admin_products: { zh: '产品管理', en: 'Products' },
  admin_banners: { zh: '轮播管理', en: 'Banners' },
  admin_videos: { zh: '视频管理', en: 'Videos' },
  admin_messages: { zh: '留言管理', en: 'Messages' },
  admin_settings: { zh: '站点设置', en: 'Settings' },
  admin_template: { zh: '模板配置', en: 'Template' },
  admin_back_home: { zh: '返回前台', en: 'Back to Site' },
  admin_logout: { zh: '退出登录', en: 'Logout' },
  admin_total_products: { zh: '产品总数', en: 'Total Products' },
  admin_total_banners: { zh: '轮播图数', en: 'Total Banners' },
  admin_total_videos: { zh: '视频数量', en: 'Total Videos' },
  admin_total_messages: { zh: '留言 / 未读', en: 'Messages / Unread' },
  admin_recent_messages: { zh: '最近留言', en: 'Recent Messages' },
  admin_contact: { zh: '联系方式', en: 'Contact' },
  admin_time: { zh: '时间', en: 'Time' },
  admin_status: { zh: '状态', en: 'Status' },
  admin_unread: { zh: '未读', en: 'Unread' },
  admin_read: { zh: '已读', en: 'Read' },
  admin_no_messages: { zh: '暂无留言', en: 'No messages' },
  admin_add_product: { zh: '+ 新增产品', en: '+ Add Product' },
  admin_search_products: { zh: '搜索产品名称...', en: 'Search products...' },
  admin_cover: { zh: '封面', en: 'Cover' },
  admin_name: { zh: '名称', en: 'Name' },
  admin_category: { zh: '分类', en: 'Category' },
  admin_price: { zh: '价格', en: 'Price' },
  admin_tag: { zh: '标签', en: 'Tag' },
  admin_actions: { zh: '操作', en: 'Actions' },
  admin_edit: { zh: '编辑', en: 'Edit' },
  admin_delete: { zh: '删除', en: 'Delete' },
  admin_add: { zh: '新增', en: 'Add' },
  admin_save: { zh: '保存', en: 'Save' },
  admin_cancel: { zh: '取消', en: 'Cancel' },
  admin_no_match: { zh: '无匹配结果', en: 'No matching results' },
  admin_product_name: { zh: '产品名称', en: 'Product Name' },
  admin_product_cat: { zh: '分类', en: 'Category' },
  admin_product_price: { zh: '价格', en: 'Price' },
  admin_product_tag: { zh: '标签', en: 'Tag' },
  admin_product_cover: { zh: '封面图 URL', en: 'Cover Image URL' },
  admin_product_summary: { zh: '一句话摘要', en: 'Summary' },
  admin_product_desc: { zh: '详细描述', en: 'Description' },
  admin_product_specs: { zh: '技术规格（每行一条，格式：标签|值）', en: 'Specs (one per line, format: label|value)' },
  admin_banner_title: { zh: '标题', en: 'Title' },
  admin_banner_subtitle: { zh: '副标题', en: 'Subtitle' },
  admin_banner_image: { zh: '背景图 URL', en: 'Background Image URL' },
  admin_banner_link: { zh: '跳转链接', en: 'Link' },
  admin_video_title: { zh: '标题', en: 'Title' },
  admin_video_cat: { zh: '分类', en: 'Category' },
  admin_video_duration: { zh: '时长', en: 'Duration' },
  admin_video_cover: { zh: '封面图 URL', en: 'Cover Image URL' },
  admin_video_url: { zh: '视频链接', en: 'Video URL' },
  admin_video_desc: { zh: '描述', en: 'Description' },
  admin_mark_read: { zh: '标记已读', en: 'Mark Read' },
  admin_confirm_delete: { zh: '确定删除', en: 'Confirm delete' },
  admin_site_name: { zh: '站点名称', en: 'Site Name' },
  admin_site_logo: { zh: 'Logo 文字', en: 'Logo Text' },
  admin_site_slogan: { zh: '站点标语', en: 'Slogan' },
  admin_site_desc: { zh: '站点描述', en: 'Description' },
  admin_site_phone: { zh: '客服电话', en: 'Phone' },
  admin_site_email: { zh: '邮箱', en: 'Email' },
  admin_site_addr: { zh: '地址', en: 'Address' },
  admin_site_copyright: { zh: '版权信息', en: 'Copyright' },
  admin_site_icp: { zh: 'ICP 备案号', en: 'ICP Number' },
  admin_save_settings: { zh: '保存设置', en: 'Save Settings' },
  admin_data_mgmt: { zh: '数据管理', en: 'Data Management' },
  admin_reset_all: { zh: '重置全部数据', en: 'Reset All Data' },
  admin_reset_confirm1: { zh: '确定重置全部数据为默认值？此操作不可恢复！', en: 'Are you sure? This cannot be undone!' },
  admin_reset_confirm2: { zh: '再次确认：所有产品、轮播、视频、留言将被重置！', en: 'Confirm again: All data will be reset!' },
  admin_template_section: { zh: '行业模板', en: 'Industry Templates' },
  admin_template_desc: { zh: '选择对应的行业模板，一键替换站点信息、产品、轮播图、视频和配色方案。留言和管理员账号保持不变。', en: 'Select an industry template to replace site info, products, banners, videos and color scheme. Messages and admin account are preserved.' },
  admin_color_section: { zh: '配色方案', en: 'Color Schemes' },
  admin_color_desc: { zh: '单独切换配色方案，不影响内容数据。可独立于行业模板使用。', en: 'Switch color scheme independently without affecting content data.' },
  admin_apply_color: { zh: '应用配色方案', en: 'Apply Color Scheme' },
  admin_apply_industry: { zh: '应用行业模板', en: 'Apply Industry Template' },
  admin_reset_selection: { zh: '重置选择', en: 'Reset Selection' },
  admin_preview: { zh: '配置预览', en: 'Configuration Preview' },
  admin_current_color: { zh: '当前配色', en: 'Current Color' },
  admin_selected_industry: { zh: '选中行业', en: 'Selected Industry' },
  admin_not_selected: { zh: '未选择', en: 'Not selected' },
  admin_will_replace: { zh: '将替换产品', en: 'Products to replace' },
  admin_login_success: { zh: '登录成功', en: 'Login successful' },
  admin_logout_success: { zh: '已退出登录', en: 'Logged out' },
  admin_confirm_logout: { zh: '确定退出登录？', en: 'Confirm logout?' },
  admin_product_added: { zh: '产品已添加', en: 'Product added' },
  admin_product_updated: { zh: '产品已更新', en: 'Product updated' },
  admin_product_deleted: { zh: '产品已删除', en: 'Product deleted' },
  admin_banner_added: { zh: '轮播图已添加', en: 'Banner added' },
  admin_banner_updated: { zh: '轮播图已更新', en: 'Banner updated' },
  admin_banner_deleted: { zh: '轮播图已删除', en: 'Banner deleted' },
  admin_video_added: { zh: '视频已添加', en: 'Video added' },
  admin_video_updated: { zh: '视频已更新', en: 'Video updated' },
  admin_video_deleted: { zh: '视频已删除', en: 'Video deleted' },
  admin_msg_marked: { zh: '已标记为已读', en: 'Marked as read' },
  admin_msg_deleted: { zh: '留言已删除', en: 'Message deleted' },
  admin_settings_saved: { zh: '站点设置已保存', en: 'Settings saved' },
  admin_color_applied: { zh: '配色方案已应用', en: 'Color scheme applied' },
  admin_template_applied: { zh: '已切换到', en: 'Switched to' },
  admin_select_first: { zh: '请先选择一个行业模板', en: 'Please select a template first' },
  admin_data_reset: { zh: '数据已重置', en: 'Data has been reset' },
  // Admin extras
  admin_edit_product: { zh: '编辑产品', en: 'Edit Product' },
  admin_add_product_title: { zh: '新增产品', en: 'Add Product' },
  admin_edit_banner: { zh: '编辑轮播图', en: 'Edit Banner' },
  admin_add_banner: { zh: '新增轮播图', en: 'Add Banner' },
  admin_edit_video: { zh: '编辑视频', en: 'Edit Video' },
  admin_add_video: { zh: '新增视频', en: 'Add Video' },
  admin_banner_mgmt: { zh: '首页轮播图管理', en: 'Homepage Banner Management' },
  admin_video_mgmt: { zh: '视频资源管理', en: 'Video Resource Management' },
  admin_link: { zh: '链接', en: 'Link' },
  admin_preview: { zh: '预览', en: 'Preview' },
  admin_no_banners: { zh: '暂无轮播图', en: 'No banners' },
  admin_no_videos: { zh: '暂无视频', en: 'No videos' },
  admin_confirm_delete_product: { zh: '确定删除此产品？', en: 'Delete this product?' },
  admin_confirm_delete_banner: { zh: '确定删除此轮播图？', en: 'Delete this banner?' },
  admin_confirm_delete_video: { zh: '确定删除此视频？', en: 'Delete this video?' },
  admin_confirm_delete_msg: { zh: '确定删除此留言？', en: 'Delete this message?' },
  admin_main_color: { zh: '主色', en: 'Main Color' },
  admin_apply_template_confirm: { zh: '确定应用【{name}】行业模板？这将替换站点信息、产品、轮播图、视频和配色方案。留言和管理员账号不受影响。', en: 'Apply the "{name}" template? This will replace site info, products, banners, videos, and color scheme. Messages and admin account are preserved.' },
  admin_admin: { zh: '管理员', en: 'Admin' },
  admin_login_fail: { zh: '用户名或密码错误', en: 'Invalid username or password' }
};

// ========== 语言管理 ==========
const LANG_KEY = 'techvision_lang';

function detectLang() {
  // 1. Check localStorage
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === 'zh' || stored === 'en') return stored;
  // 2. Detect browser language
  const browserLang = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';
  return 'en';
}

// ========== 配色方案库 ==========
const COLOR_SCHEMES = {
  tech_blue: {
    name: '科技蓝',
    primary: '#1a73e8',
    primaryDark: '#1557b0',
    primaryLight: '#4a9af5',
    primaryBg: '#e8f0fe',
    secondary: '#0f172a',
    accent: '#ff6b35'
  },
  forest_green: {
    name: '自然绿',
    primary: '#16a34a',
    primaryDark: '#15803d',
    primaryLight: '#22c55e',
    primaryBg: '#dcfce7',
    secondary: '#14532d',
    accent: '#f59e0b'
  },
  warm_orange: {
    name: '暖橙',
    primary: '#ea580c',
    primaryDark: '#c2410c',
    primaryLight: '#fb923c',
    primaryBg: '#fff7ed',
    secondary: '#431407',
    accent: '#0891b2'
  },
  royal_purple: {
    name: '典雅紫',
    primary: '#7c3aed',
    primaryDark: '#6d28d9',
    primaryLight: '#8b5cf6',
    primaryBg: '#f3e8ff',
    secondary: '#3b0764',
    accent: '#f59e0b'
  },
  rose_red: {
    name: '玫瑰红',
    primary: '#e11d48',
    primaryDark: '#be123c',
    primaryLight: '#f43f5e',
    primaryBg: '#ffe4e6',
    secondary: '#4c0519',
    accent: '#0d9488'
  },
  ocean_teal: {
    name: '海洋青',
    primary: '#0d9488',
    primaryDark: '#0f766e',
    primaryLight: '#14b8a6',
    primaryBg: '#ccfbf1',
    secondary: '#042f2e',
    accent: '#f59e0b'
  },
  midnight_dark: {
    name: '暗夜黑金',
    primary: '#f59e0b',
    primaryDark: '#d97706',
    primaryLight: '#fbbf24',
    primaryBg: '#fef3c7',
    secondary: '#0c0a09',
    accent: '#3b82f6'
  },
  elegant_brown: {
    name: '复古棕',
    primary: '#92400e',
    primaryDark: '#78350f',
    primaryLight: '#b45309',
    primaryBg: '#fef3c7',
    secondary: '#422006',
    accent: '#059669'
  }
};

// ========== 行业模板库 ==========
const INDUSTRY_TEMPLATES = {
  tech: {
    name: '科技/IT',
    name_en: 'Tech/IT',
    icon: '💻',
    description: '科技企业、IT服务商、SaaS平台',
    description_en: 'Tech companies, IT service providers, SaaS platforms',
    colorScheme: 'tech_blue',
    site: {
      name: 'TechVision',
      name_en: 'TechVision',
      slogan: '驱动未来 · 智联世界',
      slogan_en: 'Driving the Future · Connecting the World',
      description: '专注于智能产品与数字化解决方案的企业官网',
      description_en: 'Enterprise website for smart products and digital solutions',
      logo: 'TV',
      phone: '400-888-9999',
      email: 'contact@techvision.com',
      address: '浙江省杭州市余杭区文一西路969号',
      address_en: 'No. 969 Wen Yi West Road, Yuhang, Hangzhou, Zhejiang',
      copyright: '© 2026 TechVision. All rights reserved.',
      copyright_en: '© 2026 TechVision. All rights reserved.',
      icp: '浙ICP备2026000001号',
      icp_en: 'Zhejiang ICP No. 2026000001'
    },
    features: [
      { id: 1, icon: 'wifi', title: '智能互联', title_en: 'Smart Connectivity', desc: '支持多种协议接入，毫秒级响应，确保设备稳定在线', desc_en: 'Multi-protocol support with millisecond response for stable connectivity' },
      { id: 2, icon: 'chart', title: '数据可视化', title_en: 'Data Visualization', desc: '实时数据大屏展示，多维度分析报表，决策一目了然', desc_en: 'Real-time dashboards and multi-dimensional analytics at a glance' },
      { id: 3, icon: 'shield', title: '安全防护', title_en: 'Security', desc: '金融级加密标准，多重身份认证，全方位守护数据安全', desc_en: 'Financial-grade encryption with multi-factor authentication' },
      { id: 4, icon: 'cloud', title: '弹性云服务', title_en: 'Elastic Cloud', desc: '自动弹性扩缩容，按需付费，降低IT运营成本', desc_en: 'Auto-scaling with pay-as-you-go pricing to reduce IT costs' },
      { id: 5, icon: 'bolt', title: '高性能', title_en: 'High Performance', desc: '99.9%服务可用性，低延迟全球加速，极致体验', desc_en: '99.9% uptime with low-latency global acceleration' },
      { id: 6, icon: 'gear', title: '灵活定制', title_en: 'Flexible Customization', desc: '模块化架构设计，支持二次开发，满足个性化需求', desc_en: 'Modular architecture with secondary development support' }
    ],
    products: [
      { id: 1, name: '智能物联网关 TG-2000', name_en: 'Smart IoT Gateway TG-2000', category: '物联网', category_en: 'IoT', price: '¥2,800', price_en: '$400', tag: '热销', tag_en: 'Hot', cover: 'https://picsum.photos/seed/tech-p1/600/400', summary: '多协议智能网关，支持LoRa/NB-IoT/Wi-Fi/Zigbee', summary_en: 'Multi-protocol smart gateway supporting LoRa/NB-IoT/Wi-Fi/Zigbee', desc: 'TG-2000智能物联网关是面向智慧城市、工业物联网的核心接入设备，支持多种通信协议并行处理，具备边缘计算能力。', desc_en: 'TG-2000 is a core access device for smart cities and industrial IoT with edge computing capability.', specs: [{label:'通信协议',label_en:'Protocol',value:'LoRa/NB-IoT/Wi-Fi/Zigbee'},{label:'处理器',label_en:'CPU',value:'四核ARM Cortex-A53 1.4GHz'},{label:'内存',label_en:'Memory',value:'2GB DDR4'},{label:'防护等级',label_en:'Protection',value:'IP65'}] },
      { id: 2, name: '数据可视化平台 DataV Pro', name_en: 'DataV Pro Visualization Platform', category: '大数据', category_en: 'Big Data', price: '¥12,000/年', price_en: '$1,700/yr', tag: '推荐', tag_en: 'Recommended', cover: 'https://picsum.photos/seed/tech-p2/600/400', summary: '一站式数据可视化平台，拖拽式大屏搭建', summary_en: 'Drag-and-drop data visualization platform', desc: 'DataV Pro 数据可视化平台提供海量数据组件库和行业模板，支持拖拽式大屏搭建。', desc_en: 'DataV Pro provides a massive component library and templates for drag-and-drop dashboards.', specs: [{label:'组件数量',label_en:'Components',value:'200+ widgets'},{label:'数据源',label_en:'Data Sources',value:'MySQL/PostgreSQL/API'},{label:'渲染性能',label_en:'Performance',value:'Millions of points < 100ms'}] },
      { id: 3, name: 'AI智能安防系统 SecureAI', name_en: 'SecureAI Security System', category: '智能安防', category_en: 'AI Security', price: '¥35,000', price_en: '$5,000', tag: '新品', tag_en: 'New', cover: 'https://picsum.photos/seed/tech-p3/600/400', summary: 'AI视觉+热成像双模安防，7×24小时智能巡检', summary_en: 'AI vision + thermal dual-mode security with 24/7 patrol', desc: 'SecureAI 智能安防系统融合计算机视觉与热成像技术，支持人脸识别、行为分析、火情检测。', desc_en: 'SecureAI fuses computer vision with thermal imaging for face recognition, behavior analysis, and fire detection.', specs: [{label:'AI算法',label_en:'AI Algorithm',value:'YOLO v8 + proprietary models'},{label:'识别精度',label_en:'Accuracy',value:'> 99.5%'},{label:'检测类型',label_en:'Detection',value:'Face/Behavior/Fire/Intrusion'}] },
      { id: 4, name: '智慧社区管理平台 Community+', name_en: 'Community+ Smart Platform', category: '智慧社区', category_en: 'Smart Community', price: '¥8,000/年', price_en: '$1,100/yr', tag: '热销', tag_en: 'Hot', cover: 'https://picsum.photos/seed/tech-p4/600/400', summary: '门禁+物业+社区服务一体化管理平台', summary_en: 'Integrated access control + property + community services', desc: 'Community+ 智慧社区管理平台整合智能门禁、物业缴费、报修工单等模块。', desc_en: 'Community+ integrates smart access control, property payment, and repair tickets.', specs: [{label:'功能模块',label_en:'Modules',value:'Access/Property/Payment/Repair'},{label:'门禁方式',label_en:'Access',value:'Face/QR Code/IC Card'},{label:'覆盖户数',label_en:'Capacity',value:'100,000+ households'}] }
    ],
    banners: [
      { id: 1, title: '智能物联 · 触达未来', title_en: 'Smart IoT · Reach the Future', subtitle: '端到端物联网解决方案，让每个设备都能智能互联', subtitle_en: 'End-to-end IoT solutions for smart device connectivity', image: 'https://picsum.photos/seed/tech-b1/1600/600', link: 'product.html' },
      { id: 2, title: '数据驱动 · 精准决策', title_en: 'Data Driven · Smart Decisions', subtitle: '大数据分析平台，实时洞察业务全貌', subtitle_en: 'Big data analytics for real-time business insights', image: 'https://picsum.photos/seed/tech-b2/1600/600', link: 'product.html' },
      { id: 3, title: '云端协同 · 无界办公', title_en: 'Cloud Collaboration · Boundless Work', subtitle: '一站式云服务平台，助力企业高效协作', subtitle_en: 'One-stop cloud platform for efficient collaboration', image: 'https://picsum.photos/seed/tech-b3/1600/600', link: 'product.html' }
    ],
    videos: [
      { id: 1, title: 'TechVision 2026 企业宣传片', title_en: 'TechVision 2026 Corporate Video', category: '企业宣传', category_en: 'Corporate', cover: 'https://picsum.photos/seed/tech-v1/480/270', url: 'https://www.bilibili.com', duration: '05:32', desc: '了解 TechVision 的发展历程与未来愿景', desc_en: 'Learn about TechVision\'s history and future vision' },
      { id: 2, title: '智能物联网关产品演示', title_en: 'Smart IoT Gateway Demo', category: '产品演示', category_en: 'Product Demo', cover: 'https://picsum.photos/seed/tech-v2/480/270', url: 'https://www.bilibili.com', duration: '08:15', desc: 'TG-2000网关部署实操演示', desc_en: 'TG-2000 gateway deployment demonstration' }
    ]
  },

  healthcare: {
    name: '医疗/健康',
    name_en: 'Healthcare',
    icon: '🏥',
    description: '医院、诊所、医疗器械、健康服务平台',
    description_en: 'Hospitals, clinics, medical devices, health services',
    colorScheme: 'ocean_teal',
    site: {
      name: 'HealthCare+',
      name_en: 'HealthCare+',
      slogan: '守护生命 · 健康同行',
      slogan_en: 'Protecting Lives · Health for All',
      description: '专业医疗健康服务机构，提供全周期健康管理服务',
      description_en: 'Professional healthcare institution providing full-cycle health management',
      logo: 'HC',
      phone: '400-666-8888',
      email: 'service@healthcareplus.cn',
      address: '上海市浦东新区张江高科技园区博云路2号',
      address_en: 'No. 2 Boyun Road, Zhangjiang Hi-Tech Park, Pudong, Shanghai',
      copyright: '© 2026 HealthCare+. All rights reserved.',
      copyright_en: '© 2026 HealthCare+. All rights reserved.',
      icp: '沪ICP备2026000002号',
      icp_en: 'Shanghai ICP No. 2026000002'
    },
    features: [
      { id: 1, icon: 'shield', title: '专业权威', title_en: 'Professional Authority', desc: '三甲医院专家团队，严格医疗质控体系，保障诊疗安全', desc_en: 'Top-tier hospital experts with strict quality control for safe treatment' },
      { id: 2, icon: 'heart', title: '全周期管理', title_en: 'Full-Cycle Management', desc: '从预防、诊疗到康复，全流程健康管理跟踪服务', desc_en: 'From prevention to rehabilitation, full-process health tracking' },
      { id: 3, icon: 'bolt', title: '智慧医疗', title_en: 'Smart Healthcare', desc: 'AI辅助诊断，远程会诊，智能预约，就医更便捷', desc_en: 'AI-assisted diagnosis, telemedicine, and smart scheduling' },
      { id: 4, icon: 'cloud', title: '云端档案', title_en: 'Cloud Records', desc: '电子健康档案云端存储，随时查阅，终身保留', desc_en: 'Cloud-based health records, accessible anytime, lifelong retention' },
      { id: 5, icon: 'phone', title: '7×24热线', title_en: '24/7 Hotline', desc: '全天候健康咨询热线，专业医护团队随时响应', desc_en: 'Round-the-clock health hotline with professional medical team' },
      { id: 6, icon: 'location', title: '全国布局', title_en: 'Nationwide Coverage', desc: '覆盖全国300+城市，500+合作医疗机构', desc_en: '300+ cities, 500+ partner medical institutions nationwide' }
    ],
    products: [
      { id: 1, name: '智能健康监测手环 HC-Watch', name_en: 'HC-Watch Health Monitor', category: '健康设备', category_en: 'Health Devices', price: '¥899', price_en: '$130', tag: '热销', tag_en: 'Hot', cover: 'https://picsum.photos/seed/med-p1/600/400', summary: '24小时心率/血氧/睡眠监测，异常预警', summary_en: '24/7 heart rate/SpO2/sleep monitoring with abnormal alerts', desc: 'HC-Watch 智能健康手环支持全天候心率监测、血氧检测、睡眠分析，异常数据自动推送至家庭医生。', desc_en: 'HC-Watch supports all-day heart rate monitoring, SpO2 detection, and sleep analysis with automatic abnormal data alerts.', specs: [{label:'监测项目',label_en:'Monitoring',value:'心率/血氧/血压/睡眠'},{label:'续航',label_en:'Battery',value:'14 days'},{label:'防水等级',label_en:'Waterproof',value:'IP68'},{label:'屏幕',label_en:'Screen',value:'1.4" AMOLED'}] },
      { id: 2, name: '远程会诊平台 TeleMed', name_en: 'TeleMed Telemedicine Platform', category: '医疗平台', category_en: 'Medical Platform', price: '¥2,000/年', price_en: '$280/yr', tag: '推荐', tag_en: 'Recommended', cover: 'https://picsum.photos/seed/med-p2/600/400', summary: '专家远程视频问诊，电子处方在线开具', summary_en: 'Remote video consultations with online e-prescriptions', desc: 'TeleMed 远程会诊平台连接全国三甲医院专家，支持高清视频问诊、影像共享、电子处方。', desc_en: 'TeleMed connects top-tier hospital experts nationwide with HD video consultations, image sharing, and e-prescriptions.', specs: [{label:'视频质量',label_en:'Video',value:'4K UHD'},{label:'专家库',label_en:'Experts',value:'5,000+ doctors'},{label:'处方',label_en:'Prescription',value:'Online e-prescriptions'},{label:'安全',label_en:'Security',value:'End-to-end encryption'}] },
      { id: 3, name: 'AI影像辅助诊断系统 RadiAI', name_en: 'RadiAI Imaging Assistant', category: 'AI诊断', category_en: 'AI Diagnosis', price: '¥50,000/年', price_en: '$7,000/yr', tag: '新品', tag_en: 'New', cover: 'https://picsum.photos/seed/med-p3/600/400', summary: 'CT/MRI影像AI分析，秒级出具辅助报告', summary_en: 'AI analysis of CT/MRI scans with instant reports', desc: 'RadiAI 影像辅助诊断系统基于深度学习算法，自动识别CT/MRI影像中的病灶，辅助医生快速精准诊断。', desc_en: 'RadiAI uses deep learning to automatically identify lesions in CT/MRI scans, assisting doctors with fast, accurate diagnosis.', specs: [{label:'影像类型',label_en:'Imaging',value:'CT/MRI/X-ray/Ultrasound'},{label:'识别准确率',label_en:'Accuracy',value:'> 96.8%'},{label:'响应时间',label_en:'Response',value:'< 3s'},{label:'覆盖病种',label_en:'Diseases',value:'200+ common diseases'}] },
      { id: 4, name: '家庭医生签约服务包', name_en: 'Family Doctor Service Package', category: '健康管理', category_en: 'Health Management', price: '¥1,200/年', price_en: '$170/yr', tag: '', tag_en: '', cover: 'https://picsum.photos/seed/med-p4/600/400', summary: '专属家庭医生，全年不限次咨询', summary_en: 'Dedicated family doctor with unlimited consultations', desc: '签约家庭医生，享受全年不限次电话咨询、定期健康评估、慢病管理、就医绿色通道。', desc_en: 'Sign up for a family doctor with unlimited phone consultations, regular health assessments, chronic disease management, and priority hospital access.', specs: [{label:'服务周期',label_en:'Duration',value:'12 months'},{label:'咨询方式',label_en:'Consultation',value:'Phone/Video/Text'},{label:'体检',label_en:'Checkup',value:'1 comprehensive per year'},{label:'绿通',label_en:'Priority',value:'Top-tier hospital priority'}] }
    ],
    banners: [
      { id: 1, title: '守护生命 · 健康同行', title_en: 'Protecting Lives · Health for All', subtitle: '全周期健康管理服务，让专业医疗触手可及', subtitle_en: 'Full-cycle health management bringing professional care within reach', image: 'https://picsum.photos/seed/med-b1/1600/600', link: 'product.html' },
      { id: 2, title: '智慧医疗 · 精准诊疗', title_en: 'Smart Healthcare · Precision Treatment', subtitle: 'AI辅助诊断系统，秒级影像分析，辅助医生决策', subtitle_en: 'AI-assisted diagnosis with instant imaging analysis for clinical decisions', image: 'https://picsum.photos/seed/med-b2/1600/600', link: 'product.html' },
      { id: 3, title: '远程会诊 · 专家在手', title_en: 'Telemedicine · Experts at Hand', subtitle: '5000+三甲专家在线，随时随地视频问诊', subtitle_en: '5,000+ top-tier experts online for video consultations anytime', image: 'https://picsum.photos/seed/med-b3/1600/600', link: 'product.html' }
    ],
    videos: [
      { id: 1, title: 'HealthCare+ 品牌介绍', title_en: 'HealthCare+ Brand Introduction', category: '企业宣传', category_en: 'Corporate', cover: 'https://picsum.photos/seed/med-v1/480/270', url: 'https://www.bilibili.com', duration: '04:20', desc: '了解 HealthCare+ 的使命与服务体系', desc_en: 'Learn about HealthCare+ mission and service system' },
      { id: 2, title: 'AI影像辅助诊断演示', title_en: 'AI Imaging Assistant Demo', category: '产品演示', category_en: 'Product Demo', cover: 'https://picsum.photos/seed/med-v2/480/270', url: 'https://www.bilibili.com', duration: '09:30', desc: 'RadiAI 系统实际操作与诊断效果展示', desc_en: 'RadiAI system operation and diagnostic results showcase' }
    ]
  },

  education: {
    name: '教育/培训',
    name_en: 'Education',
    icon: '🎓',
    description: '学校、培训机构、在线教育平台',
    description_en: 'Schools, training institutions, online education platforms',
    colorScheme: 'royal_purple',
    site: {
      name: 'EduCloud',
      name_en: 'EduCloud',
      slogan: '启智润心 · 知行合一',
      slogan_en: 'Inspiring Minds · Knowledge in Action',
      description: '一站式智慧教育服务平台，赋能学校、教师与学生',
      description_en: 'One-stop smart education platform for schools, teachers, and students',
      logo: 'EC',
      phone: '400-777-5566',
      email: 'info@educloud.cn',
      address: '北京市海淀区中关村南大街12号',
      address_en: 'No. 12 Zhongguancun South Street, Haidian, Beijing',
      copyright: '© 2026 EduCloud. All rights reserved.',
      copyright_en: '© 2026 EduCloud. All rights reserved.',
      icp: '京ICP备2026000003号',
      icp_en: 'Beijing ICP No. 2026000003'
    },
    features: [
      { id: 1, icon: 'chart', title: '学情分析', title_en: 'Learning Analytics', desc: '多维度学习数据分析，精准定位知识薄弱点', desc_en: 'Multi-dimensional learning data analysis to pinpoint weak areas' },
      { id: 2, icon: 'cloud', title: '云端课堂', title_en: 'Cloud Classroom', desc: '直播+录播双模式，海量优质课程资源库', desc_en: 'Live + recorded dual-mode with massive course resources' },
      { id: 3, icon: 'shield', title: '安全校园', title_en: 'Safe Campus', desc: '校园安全监控、门禁管理、考勤追踪一体化', desc_en: 'Integrated campus security, access control, and attendance tracking' },
      { id: 4, icon: 'gear', title: '教务管理', title_en: 'Academic Management', desc: '排课、选课、成绩、考勤全流程数字化管理', desc_en: 'Full-process digital management of scheduling, grading, and attendance' },
      { id: 5, icon: 'bolt', title: 'AI助教', title_en: 'AI Teaching Assistant', desc: '智能批改作业、个性化学习路径推荐', desc_en: 'Smart homework grading and personalized learning path recommendations' },
      { id: 6, icon: 'wifi', title: '家校互通', title_en: 'Home-School Communication', desc: '家长端实时查看学习进度，教师在线沟通', desc_en: 'Parents view learning progress in real time, teachers communicate online' }
    ],
    products: [
      { id: 1, name: '智慧校园管理平台 School+', name_en: 'School+ Smart Campus Platform', category: '校园管理', category_en: 'Campus Management', price: '¥15,000/年', price_en: '$2,100/yr', tag: '热销', tag_en: 'Hot', cover: 'https://picsum.photos/seed/edu-p1/600/400', summary: '教务+行政+后勤一体化智慧校园平台', summary_en: 'Integrated academic, admin, and logistics smart campus platform', desc: 'School+ 智慧校园管理平台涵盖教务排课、学生管理、成绩分析、家校沟通等模块。', desc_en: 'School+ covers academic scheduling, student management, grade analysis, and home-school communication.', specs: [{label:'功能模块',label_en:'Modules',value:'Academic/Admin/Logistics/Home-School'},{label:'覆盖人数',label_en:'Capacity',value:'50,000+ teachers and students'},{label:'部署方式',label_en:'Deployment',value:'Public/Private Cloud'},{label:'App',label_en:'App',value:'iOS/Android/Mini Program'}] },
      { id: 2, name: '在线直播课堂 LiveClass', name_en: 'LiveClass Online Streaming', category: '在线教育', category_en: 'Online Education', price: '¥6,000/年', price_en: '$850/yr', tag: '推荐', tag_en: 'Recommended', cover: 'https://picsum.photos/seed/edu-p2/600/400', summary: '高清互动直播课堂，支持万人同时在线', summary_en: 'HD interactive live classroom supporting 10,000+ concurrent users', desc: 'LiveClass 在线直播课堂支持低延迟互动教学，白板共享、屏幕录制、实时答题。', desc_en: 'LiveClass supports low-latency interactive teaching with whiteboard sharing, screen recording, and real-time quizzes.', specs: [{label:'并发支持',label_en:'Concurrency',value:'10,000+ users'},{label:'延迟',label_en:'Latency',value:'< 200ms'},{label:'互动功能',label_en:'Interactivity',value:'Whiteboard/Quiz/Voice'},{label:'录制',label_en:'Recording',value:'Auto-record and replay'}] },
      { id: 3, name: 'AI智能批改系统 GradeAI', name_en: 'GradeAI Smart Grading', category: 'AI教育', category_en: 'AI Education', price: '¥8,000/年', price_en: '$1,100/yr', tag: '新品', tag_en: 'New', cover: 'https://picsum.photos/seed/edu-p3/600/400', summary: '自动批改作业，个性化学习路径推荐', summary_en: 'Auto-grading with personalized learning path recommendations', desc: 'GradeAI 智能批改系统支持数学、语文、英语等学科自动批改，并生成个性化学习建议。', desc_en: 'GradeAI supports auto-grading for math, Chinese, English, and more, generating personalized study suggestions.', specs: [{label:'支持学科',label_en:'Subjects',value:'Math/Chinese/English/Physics'},{label:'批改准确率',label_en:'Accuracy',value:'> 98%'},{label:'批改类型',label_en:'Types',value:'MC/Fill-in/Short Answer/Essay'},{label:'报告',label_en:'Reports',value:'Class + individual analytics'}] },
      { id: 4, name: '家校沟通平台 ParentLink', name_en: 'ParentLink Home-School Platform', category: '家校互通', category_en: 'Home-School', price: '¥3,000/年', price_en: '$420/yr', tag: '', tag_en: '', cover: 'https://picsum.photos/seed/edu-p4/600/400', summary: '家长实时查看成绩，教师在线沟通反馈', summary_en: 'Parents view grades in real time, teachers communicate online', desc: 'ParentLink 家校沟通平台支持成绩推送、作业通知、在线家长会、教师留言等功能。', desc_en: 'ParentLink supports grade notifications, homework alerts, online parent meetings, and teacher messaging.', specs: [{label:'通知方式',label_en:'Notifications',value:'App/SMS/WeChat'},{label:'功能',label_en:'Features',value:'Grades/Homework/Notices/Meetings'},{label:'隐私',label_en:'Privacy',value:'Private grade viewing'},{label:'数据',label_en:'Data',value:'Multi-semester trends'}] }
    ],
    banners: [
      { id: 1, title: '启智润心 · 知行合一', title_en: 'Inspiring Minds · Knowledge in Action', subtitle: '一站式智慧教育平台，赋能每所学校每位教师', subtitle_en: 'One-stop smart education platform empowering every school and teacher', image: 'https://picsum.photos/seed/edu-b1/1600/600', link: 'product.html' },
      { id: 2, title: 'AI赋能 · 因材施教', title_en: 'AI Empowered · Personalized Learning', subtitle: '智能批改+个性化推荐，让每个学生都有专属学习路径', subtitle_en: 'Smart grading + personalized recommendations for every student', image: 'https://picsum.photos/seed/edu-b2/1600/600', link: 'product.html' },
      { id: 3, title: '家校同心 · 共育未来', title_en: 'Home-School Together · Nurturing the Future', subtitle: '实时沟通、数据透明，构建紧密家校教育共同体', subtitle_en: 'Real-time communication and transparent data for a strong home-school community', image: 'https://picsum.photos/seed/edu-b3/1600/600', link: 'product.html' }
    ],
    videos: [
      { id: 1, title: 'EduCloud 智慧教育解决方案', title_en: 'EduCloud Smart Education Solution', category: '企业宣传', category_en: 'Corporate', cover: 'https://picsum.photos/seed/edu-v1/480/270', url: 'https://www.bilibili.com', duration: '06:15', desc: 'EduCloud 全产品线介绍与客户案例', desc_en: 'EduCloud full product line introduction and customer cases' },
      { id: 2, title: '在线直播课堂使用教程', title_en: 'LiveClass Tutorial', category: '教程', category_en: 'Tutorial', cover: 'https://picsum.photos/seed/edu-v2/480/270', url: 'https://www.bilibili.com', duration: '11:20', desc: 'LiveClass 直播课堂功能与操作指南', desc_en: 'LiveClass features and operation guide' }
    ]
  },

  finance: {
    name: '金融/保险',
    name_en: 'Finance/Insurance',
    icon: '💰',
    description: '银行、保险、证券、金融科技公司',
    description_en: 'Banks, insurance, securities, fintech companies',
    colorScheme: 'midnight_dark',
    site: {
      name: 'FinTrust',
      name_en: 'FinTrust',
      slogan: '稳健致远 · 价值共赢',
      slogan_en: 'Prudent and Far-reaching · Shared Value',
      description: '专业金融科技服务平台，提供智能风控与财富管理解决方案',
      description_en: 'Professional fintech platform for smart risk control and wealth management',
      logo: 'FT',
      phone: '400-999-6688',
      email: 'service@fintrust.com',
      address: '上海市黄浦区中山东一路18号',
      address_en: 'No. 18 Zhongshan East 1st Road, Huangpu, Shanghai',
      copyright: '© 2026 FinTrust. All rights reserved.',
      copyright_en: '© 2026 FinTrust. All rights reserved.',
      icp: '沪ICP备2026000004号',
      icp_en: 'Shanghai ICP No. 2026000004'
    },
    features: [
      { id: 1, icon: 'shield', title: '智能风控', title_en: 'Smart Risk Control', desc: 'AI风控引擎，毫秒级欺诈识别，资金安全保障', desc_en: 'AI risk engine with millisecond fraud detection for fund security' },
      { id: 2, icon: 'chart', title: '投研分析', title_en: 'Investment Research', desc: '大数据投研模型，多维度市场分析，辅助投资决策', desc_en: 'Big data investment models with multi-dimensional market analysis' },
      { id: 3, icon: 'bolt', title: '极速交易', title_en: 'Ultra-Fast Trading', desc: '微秒级交易系统，多市场并行，抢占先机', desc_en: 'Microsecond trading system across multiple markets' },
      { id: 4, icon: 'cloud', title: '云端合规', title_en: 'Cloud Compliance', desc: '金融合规云平台，满足监管报送要求', desc_en: 'Financial compliance cloud platform meeting regulatory requirements' },
      { id: 5, icon: 'gear', title: '智能投顾', title_en: 'Robo-Advisor', desc: 'AI驱动的个性化资产配置，风险收益最优匹配', desc_en: 'AI-driven personalized asset allocation with optimal risk-return matching' },
      { id: 6, icon: 'lock', title: '数据安全', title_en: 'Data Security', desc: '国密级加密，多方安全计算，隐私数据不出域', desc_en: 'National-grade encryption with multi-party computation for data privacy' }
    ],
    products: [
      { id: 1, name: '智能风控引擎 RiskGuard', name_en: 'RiskGuard Smart Risk Engine', category: '风控系统', category_en: 'Risk Control', price: '¥80,000/年', price_en: '$11,000/yr', tag: '热销', tag_en: 'Hot', cover: 'https://picsum.photos/seed/fin-p1/600/400', summary: 'AI实时反欺诈，毫秒级风险决策', summary_en: 'AI real-time anti-fraud with millisecond risk decisions', desc: 'RiskGuard 智能风控引擎基于机器学习模型，实时分析交易行为，毫秒级识别欺诈风险。', desc_en: 'RiskGuard uses ML models to analyze transaction behavior in real time, detecting fraud in milliseconds.', specs: [{label:'识别速度',label_en:'Speed',value:'< 50ms'},{label:'准确率',label_en:'Accuracy',value:'> 99.9%'},{label:'模型',label_en:'Models',value:'XGBoost + Deep Learning'},{label:'规则引擎',label_en:'Rules Engine',value:'Visual configuration'}] },
      { id: 2, name: '智能投顾平台 WealthAI', name_en: 'WealthAI Robo-Advisor', category: '财富管理', category_en: 'Wealth Management', price: '¥30,000/年', price_en: '$4,200/yr', tag: '推荐', tag_en: 'Recommended', cover: 'https://picsum.photos/seed/fin-p2/600/400', summary: 'AI驱动的个性化资产配置方案', summary_en: 'AI-driven personalized asset allocation', desc: 'WealthAI 智能投顾平台基于用户风险偏好和市场数据，自动生成个性化资产配置组合。', desc_en: 'WealthAI generates personalized asset allocation based on user risk preferences and market data.', specs: [{label:'配置策略',label_en:'Strategies',value:'200+ portfolio models'},{label:'回测数据',label_en:'Backtest',value:'10 years historical'},{label:'调仓频率',label_en:'Rebalance',value:'Daily/Weekly/Monthly'},{label:'风险等级',label_en:'Risk Level',value:'R1-R5 five tiers'}] },
      { id: 3, name: '极速交易系统 FlashTrade', name_en: 'FlashTrade Ultra-Fast Trading', category: '交易系统', category_en: 'Trading System', price: '¥120,000/年', price_en: '$17,000/yr', tag: '新品', tag_en: 'New', cover: 'https://picsum.photos/seed/fin-p3/600/400', summary: '微秒级交易执行，多市场多品种支持', summary_en: 'Microsecond execution across multiple markets and instruments', desc: 'FlashTrade 极速交易系统支持股票、期货、期权多市场交易，延迟低于10微秒。', desc_en: 'FlashTrade supports stocks, futures, and options across markets with latency below 10 microseconds.', specs: [{label:'交易延迟',label_en:'Latency',value:'< 10μs'},{label:'支持市场',label_en:'Markets',value:'A-share/HK/Futures/Options'},{label:'并发',label_en:'Concurrency',value:'100K orders/sec'},{label:'接口',label_en:'API',value:'FIX/REST/WebSocket'}] },
      { id: 4, name: '合规报送平台 Compliance+', name_en: 'Compliance+ Reporting Platform', category: '合规管理', category_en: 'Compliance', price: '¥20,000/年', price_en: '$2,800/yr', tag: '', tag_en: '', cover: 'https://picsum.photos/seed/fin-p4/600/400', summary: '监管数据自动报送，合规审计留痕', summary_en: 'Automated regulatory reporting with audit trails', desc: 'Compliance+ 合规报送平台支持反洗钱、EAST、1104等监管报表自动生成与报送。', desc_en: 'Compliance+ supports automated generation and submission of AML, EAST, 1104, and other regulatory reports.', specs: [{label:'报表类型',label_en:'Reports',value:'AML/EAST/1104/Credit'},{label:'报送方式',label_en:'Submission',value:'Auto/Manual'},{label:'审计留痕',label_en:'Audit Trail',value:'Full operation logs'},{label:'校验',label_en:'Validation',value:'Built-in logic rules'}] }
    ],
    banners: [
      { id: 1, title: '稳健致远 · 价值共赢', title_en: 'Prudent and Far-reaching · Shared Value', subtitle: '金融科技赋能，让金融服务更安全更高效', subtitle_en: 'Fintech empowerment for safer and more efficient financial services', image: 'https://picsum.photos/seed/fin-b1/1600/600', link: 'product.html' },
      { id: 2, title: '智能风控 · 安全护航', title_en: 'Smart Risk Control · Safe Passage', subtitle: 'AI风控引擎，毫秒级欺诈识别，守护每一笔交易', subtitle_en: 'AI risk engine with millisecond fraud detection for every transaction', image: 'https://picsum.photos/seed/fin-b2/1600/600', link: 'product.html' },
      { id: 3, title: '极速交易 · 抢占先机', title_en: 'Ultra-Fast Trading · Seize the Moment', subtitle: '微秒级交易系统，多市场并行，速度决定一切', subtitle_en: 'Microsecond trading across markets where speed matters', image: 'https://picsum.photos/seed/fin-b3/1600/600', link: 'product.html' }
    ],
    videos: [
      { id: 1, title: 'FinTrust 金融科技品牌介绍', title_en: 'FinTrust Fintech Brand Introduction', category: '企业宣传', category_en: 'Corporate', cover: 'https://picsum.photos/seed/fin-v1/480/270', url: 'https://www.bilibili.com', duration: '07:45', desc: 'FinTrust 核心技术与客户案例', desc_en: 'FinTrust core technologies and customer cases' },
      { id: 2, title: '智能风控引擎实战演示', title_en: 'RiskGuard Engine Live Demo', category: '产品演示', category_en: 'Product Demo', cover: 'https://picsum.photos/seed/fin-v2/480/270', url: 'https://www.bilibili.com', duration: '10:30', desc: 'RiskGuard 风控引擎部署与效果展示', desc_en: 'RiskGuard engine deployment and results showcase' }
    ]
  },

  realestate: {
    name: '房产/物业',
    name_en: 'Real Estate',
    icon: '🏠',
    description: '房地产开发商、物业公司、房产中介',
    description_en: 'Real estate developers, property management, agencies',
    colorScheme: 'warm_orange',
    site: {
      name: 'HomeStar',
      name_en: 'HomeStar',
      slogan: '品质筑家 · 美好生活',
      slogan_en: 'Quality Homes · Better Living',
      description: '一站式房产服务平台，从选房到入住全流程服务',
      description_en: 'One-stop real estate platform from selection to move-in',
      logo: 'HS',
      phone: '400-866-1234',
      email: 'service@homestar.cn',
      address: '广东省深圳市南山区科技园南区',
      address_en: 'South Zone, Science Park, Nanshan, Shenzhen, Guangdong',
      copyright: '© 2026 HomeStar. All rights reserved.',
      copyright_en: '© 2026 HomeStar. All rights reserved.',
      icp: '粤ICP备2026000005号',
      icp_en: 'Guangdong ICP No. 2026000005'
    },
    features: [
      { id: 1, icon: 'location', title: '优质地段', title_en: 'Prime Locations', desc: '核心区位精选项目，交通便利，配套成熟', desc_en: 'Prime location projects with convenient transport and mature amenities' },
      { id: 2, icon: 'shield', title: '品质保障', title_en: 'Quality Assurance', desc: '品牌建材，精工施工，五年质保，放心入住', desc_en: 'Brand materials, fine craftsmanship, 5-year warranty' },
      { id: 3, icon: 'cloud', title: '智慧社区', title_en: 'Smart Community', desc: '人脸门禁、智能停车、社区APP，生活更便捷', desc_en: 'Face access, smart parking, community app for convenient living' },
      { id: 4, icon: 'phone', title: '金牌物业', title_en: 'Gold-Standard Property Management', desc: '7×24物业服务热线，5分钟响应，贴心关怀', desc_en: '24/7 property service hotline with 5-minute response' },
      { id: 5, icon: 'chart', title: '透明交易', title_en: 'Transparent Transactions', desc: '房源信息公开透明，交易流程全链路可追溯', desc_en: 'Transparent listing info with fully traceable transaction process' },
      { id: 6, icon: 'gear', title: '定制装修', title_en: 'Custom Decoration', desc: '多种风格装修套餐，拎包入住，省心省力', desc_en: 'Multiple decoration styles, move-in ready, hassle-free' }
    ],
    products: [
      { id: 1, name: '云山雅居 · 精装三房', name_en: 'Yunshan Residence · Furnished 3BR', category: '住宅', category_en: 'Residential', price: '¥320万起', price_en: 'From $450K', tag: '热销', tag_en: 'Hot', cover: 'https://picsum.photos/seed/home-p1/600/400', summary: '南山核心区位，精装交付，拎包入住', summary_en: 'Prime Nanshan location, furnished delivery, move-in ready', desc: '云山雅居位于南山核心地段，毗邻地铁口，精装三房设计，南北通透，全屋品牌建材。', desc_en: 'Yunshan Residence is in prime Nanshan, near metro, with furnished 3BR design, north-south ventilation, and brand materials.', specs: [{label:'户型',label_en:'Layout',value:'3BR/2LR/2Bath'},{label:'面积',label_en:'Area',value:'98-128㎡'},{label:'交付',label_en:'Delivery',value:'Furnished'},{label:'产权',label_en:'Tenure',value:'70 years'}] },
      { id: 2, name: '智慧物业管理平台 Property+', name_en: 'Property+ Smart Management', category: '物业服务', category_en: 'Property Services', price: '¥5,000/年', price_en: '$700/yr', tag: '推荐', tag_en: 'Recommended', cover: 'https://picsum.photos/seed/home-p2/600/400', summary: '物业缴费+报修+社区服务一体化', summary_en: 'Integrated payment + repair + community services', desc: 'Property+ 智慧物业管理平台支持在线缴费、报修工单、社区公告、访客管理等功能。', desc_en: 'Property+ supports online payments, repair tickets, community notices, and visitor management.', specs: [{label:'功能',label_en:'Features',value:'Payment/Repair/Notices/Visitors'},{label:'覆盖小区',label_en:'Communities',value:'500+ communities'},{label:'用户端',label_en:'User App',value:'App/Mini Program/H5'},{label:'支付',label_en:'Payment',value:'WeChat/Alipay/Bank Card'}] },
      { id: 3, name: 'VR全景看房系统 VRView', name_en: 'VRView Panoramic Viewing', category: '房产科技', category_en: 'PropTech', price: '¥12,000/年', price_en: '$1,700/yr', tag: '新品', tag_en: 'New', cover: 'https://picsum.photos/seed/home-p3/600/400', summary: 'VR全景看房，足不出户身临其境', summary_en: 'VR panoramic viewing from the comfort of home', desc: 'VRView VR全景看房系统支持720°全景浏览、户型漫游、在线讲房，提升客户体验。', desc_en: 'VRView supports 720° panoramic browsing, layout roaming, and online property narration.', specs: [{label:'全景精度',label_en:'Resolution',value:'8K Ultra HD'},{label:'拍摄设备',label_en:'Equipment',value:'Professional panoramic camera'},{label:'交互',label_en:'Interaction',value:'VR roaming + online narration'},{label:'分享',label_en:'Sharing',value:'One-click WeChat sharing'}] },
      { id: 4, name: '房产交易管理系统 DealFlow', name_en: 'DealFlow Transaction Management', category: '交易管理', category_en: 'Transaction Management', price: '¥18,000/年', price_en: '$2,500/yr', tag: '', tag_en: '', cover: 'https://picsum.photos/seed/home-p4/600/400', summary: '房源+客源+合同全流程数字化', summary_en: 'Full-process digital management of listings, clients, and contracts', desc: 'DealFlow 房产交易管理系统覆盖房源录入、客源匹配、合同签订、过户跟踪全流程。', desc_en: 'DealFlow covers listing entry, client matching, contract signing, and transfer tracking.', specs: [{label:'房源管理',label_en:'Listings',value:'Entry/Review/Publish'},{label:'客源匹配',label_en:'Client Matching',value:'AI smart recommendations'},{label:'合同',label_en:'Contracts',value:'E-signature'},{label:'过户',label_en:'Transfer',value:'Real-time progress tracking'}] }
    ],
    banners: [
      { id: 1, title: '品质筑家 · 美好生活', title_en: 'Quality Homes · Better Living', subtitle: '从选房到入住，全流程品质服务', subtitle_en: 'Full-process quality service from selection to move-in', image: 'https://picsum.photos/seed/home-b1/1600/600', link: 'product.html' },
      { id: 2, title: '智慧社区 · 便捷生活', title_en: 'Smart Community · Convenient Living', subtitle: '人脸门禁、智能停车、社区APP，科技改变生活', subtitle_en: 'Face access, smart parking, community app — technology transforms living', image: 'https://picsum.photos/seed/home-b2/1600/600', link: 'product.html' },
      { id: 3, title: 'VR看房 · 身临其境', title_en: 'VR Viewing · Immersive Experience', subtitle: '720°全景看房，足不出户浏览心仪好房', subtitle_en: '720° panoramic viewing from the comfort of your home', image: 'https://picsum.photos/seed/home-b3/1600/600', link: 'product.html' }
    ],
    videos: [
      { id: 1, title: 'HomeStar 品牌宣传片', title_en: 'HomeStar Brand Video', category: '企业宣传', category_en: 'Corporate', cover: 'https://picsum.photos/seed/home-v1/480/270', url: 'https://www.bilibili.com', duration: '05:50', desc: 'HomeStar 开发理念与项目展示', desc_en: 'HomeStar development philosophy and project showcase' },
      { id: 2, title: '云山雅居项目介绍', title_en: 'Yunshan Residence Project Tour', category: '项目展示', category_en: 'Project Showcase', cover: 'https://picsum.photos/seed/home-v2/480/270', url: 'https://www.bilibili.com', duration: '08:30', desc: '云山雅居户型与配套详细展示', desc_en: 'Detailed layout and amenities showcase of Yunshan Residence' }
    ]
  },

  manufacturing: {
    name: '制造/工业',
    name_en: 'Manufacturing',
    icon: '🏭',
    description: '制造业、工业互联网、智能工厂',
    description_en: 'Manufacturing, industrial IoT, smart factories',
    colorScheme: 'elegant_brown',
    site: {
      name: 'InduSmart',
      name_en: 'InduSmart',
      slogan: '智造赋能 · 产业升级',
      slogan_en: 'Smart Manufacturing · Industrial Upgrade',
      description: '工业互联网与智能制造解决方案提供商',
      description_en: 'Industrial IoT and smart manufacturing solution provider',
      logo: 'IS',
      phone: '400-555-9999',
      email: 'info@indusmart.com',
      address: '江苏省苏州市工业园区苏虹中路200号',
      address_en: 'No. 200 Suhong Middle Road, Industrial Park, Suzhou, Jiangsu',
      copyright: '© 2026 InduSmart. All rights reserved.',
      copyright_en: '© 2026 InduSmart. All rights reserved.',
      icp: '苏ICP备2026000006号',
      icp_en: 'Jiangsu ICP No. 2026000006'
    },
    features: [
      { id: 1, icon: 'gear', title: '智能产线', title_en: 'Smart Production Lines', desc: '柔性制造产线，快速换型，OEE提升30%+', desc_en: 'Flexible production lines with quick changeover, 30%+ OEE improvement' },
      { id: 2, icon: 'chart', title: '数据采集', title_en: 'Data Acquisition', desc: '设备数据实时采集，产能分析，瓶颈识别', desc_en: 'Real-time equipment data collection, capacity analysis, bottleneck identification' },
      { id: 3, icon: 'shield', title: '质量追溯', title_en: 'Quality Traceability', desc: '全流程质量追溯，一物一码，品质可控可查', desc_en: 'Full-process quality traceability with one-item-one-code tracking' },
      { id: 4, icon: 'bolt', title: '预测维护', title_en: 'Predictive Maintenance', desc: 'AI设备健康预测，故障提前预警，减少停机', desc_en: 'AI equipment health prediction with early fault warning to reduce downtime' },
      { id: 5, icon: 'cloud', title: '工业云平台', title_en: 'Industrial Cloud', desc: '设备上云，远程监控，多工厂统一管理', desc_en: 'Equipment cloud, remote monitoring, multi-factory unified management' },
      { id: 6, icon: 'wifi', title: '边缘智能', title_en: 'Edge Intelligence', desc: '边缘计算网关，本地实时决策，低延迟响应', desc_en: 'Edge computing gateways for local real-time decisions with low latency' }
    ],
    products: [
      { id: 1, name: '智能柔性产线 FlexLine', name_en: 'FlexLine Smart Production Line', category: '智能产线', category_en: 'Smart Production', price: '¥280,000', price_en: '$40,000', tag: '热销', tag_en: 'Hot', cover: 'https://picsum.photos/seed/indu-p1/600/400', summary: '模块化柔性产线，30分钟快速换型', summary_en: 'Modular flexible line with 30-minute quick changeover', desc: 'FlexLine 智能柔性产线采用模块化设计，支持多品种混线生产，换型时间仅需30分钟。', desc_en: 'FlexLine uses modular design for mixed-product production with 30-minute changeover.', specs: [{label:'换型时间',label_en:'Changeover',value:'< 30 min'},{label:'产能提升',label_en:'Capacity',value:'30%+'},{label:'OEE',label_en:'OEE',value:'> 85%'},{label:'支持产品',label_en:'Products',value:'Multi-product mixed line'}] },
      { id: 2, name: '工业数据采集平台 DataLink', name_en: 'DataLink Industrial Data Platform', category: '工业互联网', category_en: 'Industrial IoT', price: '¥45,000/年', price_en: '$6,300/yr', tag: '推荐', tag_en: 'Recommended', cover: 'https://picsum.photos/seed/indu-p2/600/400', summary: '设备数据实时采集，产能可视化分析', summary_en: 'Real-time equipment data collection with visual capacity analysis', desc: 'DataLink 工业数据采集平台支持200+工业协议，实时采集设备运行数据，可视化展示。', desc_en: 'DataLink supports 200+ industrial protocols for real-time equipment data collection and visualization.', specs: [{label:'协议支持',label_en:'Protocols',value:'200+ (OPC UA/Modbus/MQTT)'},{label:'采集频率',label_en:'Frequency',value:'Millisecond level'},{label:'数据存储',label_en:'Storage',value:'Time-series database'},{label:'可视化',label_en:'Visualization',value:'Real-time dashboard + reports'}] },
      { id: 3, name: 'AI预测性维护系统 MaintAI', name_en: 'MaintAI Predictive Maintenance', category: 'AI运维', category_en: 'AI Operations', price: '¥60,000/年', price_en: '$8,500/yr', tag: '新品', tag_en: 'New', cover: 'https://picsum.photos/seed/indu-p3/600/400', summary: 'AI设备健康预测，故障提前7天预警', summary_en: 'AI equipment health prediction with 7-day early warning', desc: 'MaintAI 预测性维护系统基于振动、温度、电流等多维数据，提前预测设备故障。', desc_en: 'MaintAI uses vibration, temperature, and current data to predict equipment failures in advance.', specs: [{label:'预警提前量',label_en:'Warning Lead',value:'7 days'},{label:'准确率',label_en:'Accuracy',value:'> 92%'},{label:'传感器',label_en:'Sensors',value:'Vibration/Temp/Current/Acoustic'},{label:'覆盖设备',label_en:'Equipment',value:'Motors/Pumps/Bearings/Gearboxes'}] },
      { id: 4, name: '质量追溯系统 TracePro', name_en: 'TracePro Quality Traceability', category: '质量管理', category_en: 'Quality Management', price: '¥25,000/年', price_en: '$3,500/yr', tag: '', tag_en: '', cover: 'https://picsum.photos/seed/indu-p4/600/400', summary: '全流程质量追溯，一物一码精准定位', summary_en: 'Full-process quality traceability with one-item-one-code tracking', desc: 'TracePro 质量追溯系统实现从原料到成品的全链路追溯，扫码即可查看生产全信息。', desc_en: 'TracePro enables full-chain traceability from raw materials to finished products via QR code scanning.', specs: [{label:'追溯维度',label_en:'Traceability',value:'Material/Process/QC/Logistics'},{label:'标识方式',label_en:'ID Method',value:'QR Code/RFID'},{label:'数据保留',label_en:'Retention',value:'5 years'},{label:'查询',label_en:'Query',value:'Instant scan query'}] }
    ],
    banners: [
      { id: 1, title: '智造赋能 · 产业升级', title_en: 'Smart Manufacturing · Industrial Upgrade', subtitle: '工业互联网解决方案，助力制造业数字化转型', subtitle_en: 'Industrial IoT solutions for manufacturing digital transformation', image: 'https://picsum.photos/seed/indu-b1/1600/600', link: 'product.html' },
      { id: 2, title: '柔性产线 · 敏捷制造', title_en: 'Flexible Lines · Agile Manufacturing', subtitle: '30分钟快速换型，多品种混线生产，产能提升30%', subtitle_en: '30-minute changeover, multi-product mixed lines, 30% capacity boost', image: 'https://picsum.photos/seed/indu-b2/1600/600', link: 'product.html' },
      { id: 3, title: '预测维护 · 降本增效', title_en: 'Predictive Maintenance · Cost Reduction', subtitle: 'AI故障预警，提前7天发现隐患，减少非计划停机', subtitle_en: 'AI fault warning 7 days ahead, reducing unplanned downtime', image: 'https://picsum.photos/seed/indu-b3/1600/600', link: 'product.html' }
    ],
    videos: [
      { id: 1, title: 'InduSmart 工业互联网解决方案', title_en: 'InduSmart Industrial IoT Solution', category: '企业宣传', category_en: 'Corporate', cover: 'https://picsum.photos/seed/indu-v1/480/270', url: 'https://www.bilibili.com', duration: '06:40', desc: 'InduSmart 全产品线与客户案例', desc_en: 'InduSmart full product line and customer cases' },
      { id: 2, title: '智能柔性产线换型演示', title_en: 'FlexLine Changeover Demo', category: '产品演示', category_en: 'Product Demo', cover: 'https://picsum.photos/seed/indu-v2/480/270', url: 'https://www.bilibili.com', duration: '05:15', desc: 'FlexLine 30分钟换型全流程', desc_en: 'FlexLine 30-minute changeover full process' }
    ]
  },

  food: {
    name: '餐饮/食品',
    name_en: 'Food & Beverage',
    icon: '🍽️',
    description: '餐饮连锁、食品加工、生鲜配送',
    description_en: 'Restaurant chains, food processing, fresh delivery',
    colorScheme: 'warm_orange',
    site: {
      name: 'FlavorNet',
      name_en: 'FlavorNet',
      slogan: '匠心美味 · 品质生活',
      slogan_en: 'Artisan Flavor · Quality Living',
      description: '餐饮连锁品牌与食品供应链管理平台',
      description_en: 'Restaurant chain brand and food supply chain management platform',
      logo: 'FN',
      phone: '400-366-8888',
      email: 'info@flavornet.cn',
      address: '四川省成都市锦江区红星路三段1号',
      address_en: 'No. 1 Hongxing Road 3rd Section, Jinjiang, Chengdu, Sichuan',
      copyright: '© 2026 FlavorNet. All rights reserved.',
      copyright_en: '© 2026 FlavorNet. All rights reserved.',
      icp: '川ICP备2026000007号',
      icp_en: 'Sichuan ICP No. 2026000007'
    },
    features: [
      { id: 1, icon: 'shield', title: '食品安全', title_en: 'Food Safety', desc: '全链路食材追溯，冷链监控，食品安全可查可控', desc_en: 'Full-chain ingredient traceability with cold chain monitoring' },
      { id: 2, icon: 'cloud', title: '智能点餐', title_en: 'Smart Ordering', desc: '扫码点餐+在线外卖+预约定制，全场景覆盖', desc_en: 'QR ordering + online delivery + reservation for all scenarios' },
      { id: 3, icon: 'chart', title: '数据分析', title_en: 'Data Analytics', desc: '门店营收分析、菜品热度排行、客流量预测', desc_en: 'Store revenue analysis, dish popularity rankings, traffic forecasting' },
      { id: 4, icon: 'gear', title: '中央厨房', title_en: 'Central Kitchen', desc: '标准化菜品工艺，中央厨房统一加工配送', desc_en: 'Standardized recipes with central kitchen processing and distribution' },
      { id: 5, icon: 'bolt', title: '极速配送', title_en: 'Fast Delivery', desc: '30分钟送达承诺，智能调度，保温配送', desc_en: '30-minute delivery guarantee with smart dispatch and insulation' },
      { id: 6, icon: 'location', title: '全国门店', title_en: 'Nationwide Stores', desc: '全国500+门店统一管理，品质如一', desc_en: '500+ stores nationwide with consistent quality' }
    ],
    products: [
      { id: 1, name: '智能点餐收银系统 OrderPro', name_en: 'OrderPro Smart POS System', category: '门店系统', category_en: 'Store Systems', price: '¥3,600/年', price_en: '$500/yr', tag: '热销', tag_en: 'Hot', cover: 'https://picsum.photos/seed/food-p1/600/400', summary: '扫码点餐+收银+外卖一体化', summary_en: 'QR ordering + POS + delivery integration', desc: 'OrderPro 智能点餐收银系统支持扫码点餐、在线支付、外卖接单、会员管理等功能。', desc_en: 'OrderPro supports QR ordering, online payment, delivery management, and membership.', specs: [{label:'功能',label_en:'Features',value:'Ordering/POS/Delivery/Membership'},{label:'支付',label_en:'Payment',value:'WeChat/Alipay/UnionPay'},{label:'外卖',label_en:'Delivery',value:'Meituan/Ele.me integration'},{label:'硬件',label_en:'Hardware',value:'POS + receipt printer'}] },
      { id: 2, name: '中央厨房管理系统 KitchenHub', name_en: 'KitchenHub Central Kitchen Management', category: '供应链', category_en: 'Supply Chain', price: '¥20,000/年', price_en: '$2,800/yr', tag: '推荐', tag_en: 'Recommended', cover: 'https://picsum.photos/seed/food-p2/600/400', summary: '标准化菜品工艺+原料采购+加工配送', summary_en: 'Standardized recipes + procurement + processing + distribution', desc: 'KitchenHub 中央厨房管理系统覆盖菜品标准化配方、原料采购、加工计划、冷链配送。', desc_en: 'KitchenHub covers standardized recipes, ingredient procurement, production planning, and cold chain delivery.', specs: [{label:'配方管理',label_en:'Recipe Mgmt',value:'Standard recipe library'},{label:'采购',label_en:'Procurement',value:'Smart restocking forecast'},{label:'加工',label_en:'Processing',value:'Production scheduling'},{label:'配送',label_en:'Delivery',value:'Cold chain temperature monitoring'}] },
      { id: 3, name: '食材溯源系统 TraceFood', name_en: 'TraceFood Ingredient Traceability', category: '食品安全', category_en: 'Food Safety', price: '¥8,000/年', price_en: '$1,100/yr', tag: '新品', tag_en: 'New', cover: 'https://picsum.photos/seed/food-p3/600/400', summary: '从田间到餐桌全链路食材追溯', summary_en: 'Farm-to-table full-chain ingredient traceability', desc: 'TraceFood 食材溯源系统实现从源头种植、加工、运输到门店全流程追溯。', desc_en: 'TraceFood enables full-chain traceability from farming, processing, transport to stores.', specs: [{label:'追溯环节',label_en:'Stages',value:'Farming/Processing/Transport/Store'},{label:'查询方式',label_en:'Query',value:'QR code scan'},{label:'数据',label_en:'Data',value:'Test reports + cold chain records'},{label:'预警',label_en:'Alerts',value:'Auto abnormal alerts'}] },
      { id: 4, name: '门店数据分析平台 StoreInsight', name_en: 'StoreInsight Analytics Platform', category: '数据分析', category_en: 'Data Analytics', price: '¥6,000/年', price_en: '$850/yr', tag: '', tag_en: '', cover: 'https://picsum.photos/seed/food-p4/600/400', summary: '营收分析+菜品排行+客流预测', summary_en: 'Revenue analysis + dish rankings + traffic forecasting', desc: 'StoreInsight 门店数据分析平台提供多维度营收报表、菜品热度分析、客流预测。', desc_en: 'StoreInsight provides multi-dimensional revenue reports, dish popularity analysis, and traffic forecasting.', specs: [{label:'分析维度',label_en:'Dimensions',value:'Revenue/Dishes/Traffic/Members'},{label:'报表',label_en:'Reports',value:'Daily/Weekly/Monthly'},{label:'预测',label_en:'Forecasting',value:'AI traffic prediction'},{label:'多店',label_en:'Multi-Store',value:'Chain comparison analysis'}] }
    ],
    banners: [
      { id: 1, title: '匠心美味 · 品质生活', title_en: 'Artisan Flavor · Quality Living', subtitle: '从食材到餐桌，每一道工序都精益求精', subtitle_en: 'From ingredients to table, every step refined to perfection', image: 'https://picsum.photos/seed/food-b1/1600/600', link: 'product.html' },
      { id: 2, title: '智能点餐 · 高效运营', title_en: 'Smart Ordering · Efficient Operations', subtitle: '扫码点餐+外卖+会员，全场景数字化管理', subtitle_en: 'QR ordering + delivery + membership for all-scenario digital management', image: 'https://picsum.photos/seed/food-b2/1600/600', link: 'product.html' },
      { id: 3, title: '食材溯源 · 食安可查', title_en: 'Ingredient Traceability · Food Safety', subtitle: '从田间到餐桌全链路追溯，吃得放心', subtitle_en: 'Farm-to-table full-chain traceability for peace of mind', image: 'https://picsum.photos/seed/food-b3/1600/600', link: 'product.html' }
    ],
    videos: [
      { id: 1, title: 'FlavorNet 品牌故事', title_en: 'FlavorNet Brand Story', category: '企业宣传', category_en: 'Corporate', cover: 'https://picsum.photos/seed/food-v1/480/270', url: 'https://www.bilibili.com', duration: '04:50', desc: 'FlavorNet 品牌理念与全国门店展示', desc_en: 'FlavorNet brand philosophy and nationwide store showcase' },
      { id: 2, title: '中央厨房运营实拍', title_en: 'Central Kitchen Operations Footage', category: '运营展示', category_en: 'Operations', cover: 'https://picsum.photos/seed/food-v2/480/270', url: 'https://www.bilibili.com', duration: '07:20', desc: 'KitchenHub 中央厨房标准化加工流程', desc_en: 'KitchenHub central kitchen standardized processing workflow' }
    ]
  },

  retail: {
    name: '零售/电商',
    name_en: 'Retail/E-commerce',
    icon: '🛒',
    description: '零售连锁、电商平台、品牌零售',
    description_en: 'Retail chains, e-commerce platforms, brand retail',
    colorScheme: 'rose_red',
    site: {
      name: 'ShopMax',
      name_en: 'ShopMax',
      slogan: '品质优选 · 智慧零售',
      slogan_en: 'Quality Selection · Smart Retail',
      description: '新零售解决方案，线上线下融合，数据驱动增长',
      description_en: 'New retail solutions integrating online and offline, data-driven growth',
      logo: 'SM',
      phone: '400-222-6699',
      email: 'service@shopmax.cn',
      address: '浙江省杭州市滨江区网商路599号',
      address_en: 'No. 599 Wangshang Road, Binjiang, Hangzhou, Zhejiang',
      copyright: '© 2026 ShopMax. All rights reserved.',
      copyright_en: '© 2026 ShopMax. All rights reserved.',
      icp: '浙ICP备2026000008号',
      icp_en: 'Zhejiang ICP No. 2026000008'
    },
    features: [
      { id: 1, icon: 'chart', title: '精准营销', title_en: 'Precision Marketing', desc: '用户画像+行为分析，千人千面推荐，提升转化', desc_en: 'User profiling + behavior analysis for personalized recommendations' },
      { id: 2, icon: 'cloud', title: '全渠道融合', title_en: 'Omnichannel Integration', desc: '线上商城+线下门店+直播带货，全域触达', desc_en: 'Online mall + offline stores + live streaming for full reach' },
      { id: 3, icon: 'shield', title: '品质保障', title_en: 'Quality Assurance', desc: '正品溯源，假一赔十，7天无理由退换', desc_en: 'Authentic sourcing, 10x compensation, 7-day free returns' },
      { id: 4, icon: 'bolt', title: '极速物流', title_en: 'Fast Logistics', desc: '当日达+次日达，智能仓储，高效配送', desc_en: 'Same-day + next-day delivery with smart warehousing' },
      { id: 5, icon: 'gear', title: '智能选品', title_en: 'Smart Selection', desc: 'AI销售预测，智能补货，降低库存周转', desc_en: 'AI sales forecasting with smart restocking to reduce inventory turnover' },
      { id: 6, icon: 'phone', title: '会员服务', title_en: 'Member Services', desc: '会员积分+优惠券+专属客服，提升复购率', desc_en: 'Points + coupons + dedicated service to boost repurchase rates' }
    ],
    products: [
      { id: 1, name: '全渠道零售平台 OmniRetail', name_en: 'OmniRetail Omnichannel Platform', category: '零售平台', category_en: 'Retail Platform', price: '¥18,000/年', price_en: '$2,500/yr', tag: '热销', tag_en: 'Hot', cover: 'https://picsum.photos/seed/retail-p1/600/400', summary: '线上商城+线下门店+直播一体化', summary_en: 'Online mall + offline stores + live streaming integration', desc: 'OmniRetail 全渠道零售平台整合线上商城、线下POS、直播带货，统一商品库存管理。', desc_en: 'OmniRetail integrates online mall, offline POS, and live streaming with unified inventory management.', specs: [{label:'渠道',label_en:'Channels',value:'PC/App/Mini Program/Live/Stores'},{label:'库存',label_en:'Inventory',value:'Unified management'},{label:'支付',label_en:'Payment',value:'All-channel unified'},{label:'营销',label_en:'Marketing',value:'Coupons/Group-buy/Flash sale'}] },
      { id: 2, name: '智能选品系统 SelectAI', name_en: 'SelectAI Smart Product Selection', category: 'AI零售', category_en: 'AI Retail', price: '¥12,000/年', price_en: '$1,700/yr', tag: '推荐', tag_en: 'Recommended', cover: 'https://picsum.photos/seed/retail-p2/600/400', summary: 'AI销售预测+智能补货+库存优化', summary_en: 'AI sales forecasting + smart restocking + inventory optimization', desc: 'SelectAI 智能选品系统基于销售数据和趋势预测，自动生成补货建议和选品策略。', desc_en: 'SelectAI uses sales data and trend forecasting to auto-generate restocking and selection strategies.', specs: [{label:'预测精度',label_en:'Accuracy',value:'> 90%'},{label:'预测周期',label_en:'Forecast Period',value:'7/14/30 days'},{label:'补货',label_en:'Restocking',value:'Auto-generated suggestions'},{label:'库存',label_en:'Inventory',value:'25% turnover improvement'}] },
      { id: 3, name: '会员营销平台 MemberMax', name_en: 'MemberMax Marketing Platform', category: '会员管理', category_en: 'Member Management', price: '¥6,000/年', price_en: '$850/yr', tag: '新品', tag_en: 'New', cover: 'https://picsum.photos/seed/retail-p3/600/400', summary: '会员积分+优惠券+精准推送', summary_en: 'Points + coupons + precision push notifications', desc: 'MemberMax 会员营销平台支持会员等级、积分体系、优惠券、精准推送，提升复购率。', desc_en: 'MemberMax supports membership tiers, points, coupons, and precision push to boost repurchase.', specs: [{label:'会员体系',label_en:'Membership',value:'Tiers/Points/Benefits'},{label:'营销工具',label_en:'Marketing Tools',value:'Coupons/Group-buy/Bargain/Lottery'},{label:'推送',label_en:'Push',value:'SMS/App/WeChat'},{label:'分析',label_en:'Analytics',value:'RFM model analysis'}] },
      { id: 4, name: '智能仓储系统 WareHouse+', name_en: 'WareHouse+ Smart Warehousing', category: '仓储物流', category_en: 'Warehousing & Logistics', price: '¥25,000/年', price_en: '$3,500/yr', tag: '', tag_en: '', cover: 'https://picsum.photos/seed/retail-p4/600/400', summary: '智能拣选+路径优化+库存盘点', summary_en: 'Smart picking + route optimization + inventory counting', desc: 'WareHouse+ 智能仓储系统支持波次拣选、路径优化、自动盘点、库存预警。', desc_en: 'WareHouse+ supports wave picking, route optimization, auto-counting, and inventory alerts.', specs: [{label:'拣选效率',label_en:'Picking Efficiency',value:'40% improvement'},{label:'盘点',label_en:'Counting',value:'PDA + RFID auto-count'},{label:'对接',label_en:'Integration',value:'ERP/WMS/TMS'},{label:'预警',label_en:'Alerts',value:'Inventory threshold alerts'}] }
    ],
    banners: [
      { id: 1, title: '品质优选 · 智慧零售', title_en: 'Quality Selection · Smart Retail', subtitle: '新零售解决方案，数据驱动每一笔交易', subtitle_en: 'New retail solutions, data-driven for every transaction', image: 'https://picsum.photos/seed/retail-b1/1600/600', link: 'product.html' },
      { id: 2, title: '全渠道融合 · 无界零售', title_en: 'Omnichannel · Boundless Retail', subtitle: '线上+线下+直播，全域触达，统一管理', subtitle_en: 'Online + offline + live streaming for full reach and unified management', image: 'https://picsum.photos/seed/retail-b2/1600/600', link: 'product.html' },
      { id: 3, title: 'AI智能选品 · 精准补货', title_en: 'AI Smart Selection · Precision Restocking', subtitle: 'AI预测销售趋势，自动补货，降低库存压力', subtitle_en: 'AI sales forecasting with auto-restocking to reduce inventory pressure', image: 'https://picsum.photos/seed/retail-b3/1600/600', link: 'product.html' }
    ],
    videos: [
      { id: 1, title: 'ShopMax 新零售解决方案', title_en: 'ShopMax New Retail Solution', category: '企业宣传', category_en: 'Corporate', cover: 'https://picsum.photos/seed/retail-v1/480/270', url: 'https://www.bilibili.com', duration: '05:30', desc: 'ShopMax 全渠道零售平台介绍', desc_en: 'ShopMax omnichannel retail platform introduction' },
      { id: 2, title: '智能选品系统演示', title_en: 'Smart Selection System Demo', category: '产品演示', category_en: 'Product Demo', cover: 'https://picsum.photos/seed/retail-v2/480/270', url: 'https://www.bilibili.com', duration: '08:45', desc: 'SelectAI 销售预测与补货建议演示', desc_en: 'SelectAI sales forecasting and restocking demo' }
    ]
  }
};

// ========== 默认数据 ==========
const DEFAULT_DATA = {
  // 主题配色（当前使用的配色方案 key）
  theme: {
    colorScheme: 'tech_blue'
  },

  // 站点基本信息
  site: {
    name: 'TechVision',
    name_en: 'TechVision',
    slogan: '驱动未来 · 智联世界',
    slogan_en: 'Driving the Future · Connecting the World',
    description: '专注于智能产品与数字化解决方案的企业官网',
    description_en: 'Enterprise website for smart products and digital solutions',
    logo: 'TV',
    phone: '400-888-9999',
    email: 'contact@techvision.com',
    address: '浙江省杭州市余杭区文一西路969号',
    address_en: 'No. 969 Wen Yi West Road, Yuhang District, Hangzhou, Zhejiang',
    copyright: '© 2026 TechVision. All rights reserved.',
    copyright_en: '© 2026 TechVision. All rights reserved.',
    icp: '浙ICP备2026000001号',
    icp_en: 'Zhejiang ICP No. 2026000001'
  },

  // 导航菜单
  nav: [
    { label: '首页', label_en: 'Home', href: 'index.html' },
    { label: '产品中心', label_en: 'Products', href: 'product.html' },
    { label: '视频中心', label_en: 'Videos', href: 'video.html' },
    { label: '联系我们', label_en: 'Contact', href: 'contact.html' }
  ],

  // 首页轮播图
  banners: [
    {
      id: 1,
      title: '智能物联 · 触达未来',
      title_en: 'Smart IoT · Reach the Future',
      subtitle: '端到端物联网解决方案，让每个设备都能智能互联',
      subtitle_en: 'End-to-end IoT solutions making every device smart',
      image: 'https://picsum.photos/seed/banner1/1600/600',
      link: 'product.html'
    },
    {
      id: 2,
      title: '数据驱动 · 精准决策',
      title_en: 'Data Driven · Smart Decisions',
      subtitle: '大数据分析平台，实时洞察业务全貌',
      subtitle_en: 'Big data analytics platform for real-time business insights',
      image: 'https://picsum.photos/seed/banner2/1600/600',
      link: 'product.html'
    },
    {
      id: 3,
      title: '云端协同 · 无界办公',
      title_en: 'Cloud Collaboration · Boundless Work',
      subtitle: '一站式云服务平台，助力企业高效协作',
      subtitle_en: 'One-stop cloud service platform for efficient collaboration',
      image: 'https://picsum.photos/seed/banner3/1600/600',
      link: 'product.html'
    }
  ],

  // 首页推荐模块
  features: [
    { id: 1, icon: 'wifi', title: '智能互联', title_en: 'Smart Connectivity', desc: '支持多种协议接入，毫秒级响应，确保设备稳定在线', desc_en: 'Multi-protocol support with millisecond response for stable device connectivity' },
    { id: 2, icon: 'chart', title: '数据可视化', title_en: 'Data Visualization', desc: '实时数据大屏展示，多维度分析报表，决策一目了然', desc_en: 'Real-time dashboards and multi-dimensional analytics at a glance' },
    { id: 3, icon: 'shield', title: '安全防护', title_en: 'Security Protection', desc: '金融级加密标准，多重身份认证，全方位守护数据安全', desc_en: 'Financial-grade encryption with multi-factor authentication for full data security' },
    { id: 4, icon: 'cloud', title: '弹性云服务', title_en: 'Elastic Cloud', desc: '自动弹性扩缩容，按需付费，降低IT运营成本', desc_en: 'Auto-scaling with pay-as-you-go pricing to reduce IT costs' },
    { id: 5, icon: 'bolt', title: '高性能', title_en: 'High Performance', desc: '99.9%服务可用性，低延迟全球加速，极致体验', desc_en: '99.9% uptime with low-latency global acceleration' },
    { id: 6, icon: 'gear', title: '灵活定制', title_en: 'Flexible Customization', desc: '模块化架构设计，支持二次开发，满足个性化需求', desc_en: 'Modular architecture with secondary development support for custom needs' }
  ],

  // 产品列表
  products: [
    {
      id: 1,
      name: '智能物联网关 TG-2000',
      name_en: 'Smart IoT Gateway TG-2000',
      category: '物联网',
      category_en: 'IoT',
      price: '¥2,800',
      price_en: '$400',
      tag: '热销',
      tag_en: 'Hot',
      cover: 'https://picsum.photos/seed/prod1/600/400',
      summary: '多协议智能网关，支持LoRa/NB-IoT/Wi-Fi/Zigbee',
      summary_en: 'Multi-protocol smart gateway supporting LoRa/NB-IoT/Wi-Fi/Zigbee',
      desc: 'TG-2000智能物联网关是面向智慧城市、工业物联网的核心接入设备，支持多种通信协议并行处理，具备边缘计算能力，可本地处理数据并实时上传云端。采用工业级芯片，支持-40°C至85°C宽温运行，IP65防护等级，满足各类严苛环境部署需求。',
      desc_en: 'The TG-2000 Smart IoT Gateway is a core access device for smart cities and industrial IoT. It supports multiple communication protocols with edge computing capability, processing data locally and uploading to the cloud in real time. Built with industrial-grade chips, it operates from -40°C to 85°C with IP65 protection.',
      specs: [
        { label: '通信协议', label_en: 'Protocol', value: 'LoRa/NB-IoT/Wi-Fi/Zigbee/Bluetooth' },
        { label: '处理器', label_en: 'CPU', value: 'Quad-core ARM Cortex-A53 1.4GHz' },
        { label: '内存', label_en: 'Memory', value: '2GB DDR4' },
        { label: '存储', label_en: 'Storage', value: '8GB eMMC' },
        { label: '工作温度', label_en: 'Temp Range', value: '-40°C ~ 85°C' },
        { label: '防护等级', label_en: 'Protection', value: 'IP65' }
      ]
    },
    {
      id: 2,
      name: '数据可视化平台 DataV Pro',
      name_en: 'DataV Pro Visualization Platform',
      category: '大数据',
      category_en: 'Big Data',
      price: '¥12,000/年',
      price_en: '$1,700/yr',
      tag: '推荐',
      tag_en: 'Recommended',
      cover: 'https://picsum.photos/seed/prod2/600/400',
      summary: '一站式数据可视化平台，拖拽式大屏搭建',
      summary_en: 'One-stop data visualization platform with drag-and-drop dashboards',
      desc: 'DataV Pro 数据可视化平台提供海量数据组件库和行业模板，支持拖拽式大屏搭建，无需编码即可创建专业级数据大屏。内置实时数据引擎，支持百万级数据点毫秒渲染，对接主流数据库与API数据源。',
      desc_en: 'DataV Pro provides a massive component library and industry templates for drag-and-drop dashboard building without coding. Its real-time engine renders millions of data points in milliseconds, connecting to mainstream databases and APIs.',
      specs: [
        { label: '组件数量', label_en: 'Components', value: '200+ visualization widgets' },
        { label: '数据源', label_en: 'Data Sources', value: 'MySQL/PostgreSQL/MongoDB/API/CSV' },
        { label: '渲染性能', label_en: 'Performance', value: 'Millions of points < 100ms' },
        { label: '模板数量', label_en: 'Templates', value: '50+ industry templates' },
        { label: '部署方式', label_en: 'Deployment', value: 'Public/Private Cloud/On-premise' },
        { label: '并发支持', label_en: 'Concurrency', value: '1000+ concurrent users' }
      ]
    },
    {
      id: 3,
      name: 'AI智能安防系统 SecureAI',
      name_en: 'SecureAI Smart Security System',
      category: '智能安防',
      category_en: 'AI Security',
      price: '¥35,000',
      price_en: '$5,000',
      tag: '新品',
      tag_en: 'New',
      cover: 'https://picsum.photos/seed/prod3/600/400',
      summary: 'AI视觉+热成像双模安防，7×24小时智能巡检',
      summary_en: 'AI vision + thermal dual-mode security with 24/7 smart patrol',
      desc: 'SecureAI 智能安防系统融合计算机视觉与热成像技术，支持人脸识别、行为分析、火情检测、入侵报警等多种AI场景。系统内置深度学习引擎，持续优化检测精度，误报率低于0.1%。',
      desc_en: 'SecureAI fuses computer vision with thermal imaging, supporting face recognition, behavior analysis, fire detection, and intrusion alerts. Its deep learning engine continuously optimizes detection accuracy with false alarm rate below 0.1%.',
      specs: [
        { label: 'AI算法', label_en: 'AI Algorithm', value: 'YOLO v8 + proprietary models' },
        { label: '识别精度', label_en: 'Accuracy', value: 'Face recognition > 99.5%' },
        { label: '检测类型', label_en: 'Detection Types', value: 'Face/Behavior/Fire/Intrusion/License Plate' },
        { label: '热成像', label_en: 'Thermal', value: '384×288 resolution, ±0.5°C accuracy' },
        { label: '存储', label_en: 'Storage', value: 'Local + Cloud dual storage' },
        { label: '联动方式', label_en: 'Alert Methods', value: 'Siren/SMS/App/Webhook' }
      ]
    },
    {
      id: 4,
      name: '智慧社区管理平台 Community+',
      name_en: 'Community+ Smart Community Platform',
      category: '智慧社区',
      category_en: 'Smart Community',
      price: '¥8,000/年',
      price_en: '$1,100/yr',
      tag: '热销',
      tag_en: 'Hot',
      cover: 'https://picsum.photos/seed/prod4/600/400',
      summary: '门禁+物业+社区服务一体化管理平台',
      summary_en: 'Integrated access control + property management + community services',
      desc: 'Community+ 智慧社区管理平台整合智能门禁、物业缴费、报修工单、社区活动等模块，为物业公司和居民提供一站式服务。支持人脸门禁、访客预约、车牌识别等智慧场景，助力社区数字化转型。',
      desc_en: 'Community+ integrates smart access control, property payment, repair tickets, and community activities into a one-stop service platform. It supports face recognition entry, visitor booking, and license plate recognition.',
      specs: [
        { label: '功能模块', label_en: 'Modules', value: 'Access/Property/Payment/Repair/Activity/Notice' },
        { label: '门禁方式', label_en: 'Access Methods', value: 'Face/QR Code/IC Card/Password/Remote' },
        { label: '覆盖户数', label_en: 'Capacity', value: '100,000+ households per platform' },
        { label: 'App支持', label_en: 'App Support', value: 'iOS/Android/WeChat Mini Program/H5' },
        { label: '数据统计', label_en: 'Analytics', value: 'Real-time dashboard + multi-dimensional reports' },
        { label: '部署方式', label_en: 'Deployment', value: 'SaaS / On-premise' }
      ]
    },
    {
      id: 5,
      name: '边缘计算盒子 EdgeBox X1',
      name_en: 'EdgeBox X1 Edge Computing Device',
      category: '物联网',
      category_en: 'IoT',
      price: '¥4,500',
      price_en: '$650',
      tag: '',
      tag_en: '',
      cover: 'https://picsum.photos/seed/prod5/600/400',
      summary: '高性能边缘计算节点，本地AI推理加速',
      summary_en: 'High-performance edge computing node with local AI inference',
      desc: 'EdgeBox X1 边缘计算盒子搭载NPU加速芯片，提供本地AI推理能力，支持TensorFlow/PyTorch/MindSpore框架。适用于工厂质检、智能零售、智慧交通等边缘AI场景，降低云端带宽压力。',
      desc_en: 'EdgeBox X1 features an NPU accelerator for local AI inference, supporting TensorFlow/PyTorch/MindSpore. Ideal for factory inspection, smart retail, and smart traffic edge AI scenarios.',
      specs: [
        { label: 'AI算力', label_en: 'AI Power', value: '8 TOPS (INT8)' },
        { label: 'NPU', label_en: 'NPU', value: 'Built-in neural processor' },
        { label: '接口', label_en: 'Interfaces', value: 'Gigabit×2/USB3.0×2/RS485×2/HDMI' },
        { label: '操作系统', label_en: 'OS', value: 'Ubuntu 22.04 / OpenWrt' },
        { label: '功耗', label_en: 'Power', value: '< 15W' },
        { label: '尺寸', label_en: 'Dimensions', value: '120mm × 80mm × 35mm' }
      ]
    },
    {
      id: 6,
      name: '数字乡村平台 RuralTech',
      name_en: 'RuralTech Digital Village Platform',
      category: '智慧社区',
      category_en: 'Smart Community',
      price: '¥6,000/年',
      price_en: '$850/yr',
      tag: '推荐',
      tag_en: 'Recommended',
      cover: 'https://picsum.photos/seed/prod6/600/400',
      summary: '数字乡村综合服务平台，助力乡村振兴',
      summary_en: 'Comprehensive digital village platform for rural revitalization',
      desc: 'RuralTech 数字乡村平台涵盖乡村治理、农业生产、便民服务三大板块。整合GIS地图、物联网传感器、无人机巡检等数据，为乡镇政府提供数字化管理工具，为村民提供便捷的在线服务。',
      desc_en: 'RuralTech covers three major areas: village governance, agricultural production, and convenience services. It integrates GIS maps, IoT sensors, and drone inspection data to provide digital management tools for township governments and convenient online services for villagers.',
      specs: [
        { label: '功能板块', label_en: 'Modules', value: 'Governance/Agriculture/Services/E-commerce' },
        { label: 'GIS能力', label_en: 'GIS', value: 'Tianditu/Amap integration' },
        { label: '物联网接入', label_en: 'IoT', value: 'Water/Soil/Weather/Video monitoring' },
        { label: '村民端', label_en: 'Villager App', value: 'WeChat Mini Program + H5' },
        { label: '管理端', label_en: 'Admin', value: 'PC backend + Mobile App' },
        { label: '部署方式', label_en: 'Deployment', value: 'Government Cloud / Private Cloud' }
      ]
    }
  ],

  // 视频资源
  videos: [
    {
      id: 1,
      title: 'TechVision 2026 企业宣传片',
      title_en: 'TechVision 2026 Corporate Video',
      category: '企业宣传',
      category_en: 'Corporate',
      cover: 'https://picsum.photos/seed/video1/480/270',
      url: 'https://www.bilibili.com/video/BV1example1',
      duration: '05:32',
      desc: '了解 TechVision 的发展历程、核心技术与未来愿景',
      desc_en: 'Learn about TechVision\'s development, core technologies, and future vision'
    },
    {
      id: 2,
      title: '智能物联网关 TG-2000 产品演示',
      title_en: 'Smart IoT Gateway TG-2000 Demo',
      category: '产品演示',
      category_en: 'Product Demo',
      cover: 'https://picsum.photos/seed/video2/480/270',
      url: 'https://www.bilibili.com/video/BV1example2',
      duration: '08:15',
      desc: 'TG-2000网关部署实操与多协议接入演示',
      desc_en: 'TG-2000 gateway deployment and multi-protocol access demonstration'
    },
    {
      id: 3,
      title: 'DataV Pro 数据大屏搭建教程',
      title_en: 'DataV Pro Dashboard Building Tutorial',
      category: '教程',
      category_en: 'Tutorial',
      cover: 'https://picsum.photos/seed/video3/480/270',
      url: 'https://www.bilibili.com/video/BV1example3',
      duration: '12:46',
      desc: '从零开始搭建一个实时数据监控大屏，全流程演示',
      desc_en: 'Build a real-time monitoring dashboard from scratch, full walkthrough'
    },
    {
      id: 4,
      title: 'SecureAI 智能安防系统实战',
      title_en: 'SecureAI Security System in Action',
      category: '产品演示',
      category_en: 'Product Demo',
      cover: 'https://picsum.photos/seed/video4/480/270',
      url: 'https://www.bilibili.com/video/BV1example4',
      duration: '10:22',
      desc: 'AI安防系统部署全过程，含人脸识别与火情检测演示',
      desc_en: 'AI security system deployment with face recognition and fire detection demo'
    },
    {
      id: 5,
      title: '智慧社区解决方案案例分享',
      title_en: 'Smart Community Solution Case Study',
      category: '案例分享',
      category_en: 'Case Study',
      cover: 'https://picsum.photos/seed/video5/480/270',
      url: 'https://www.bilibili.com/video/BV1example5',
      duration: '07:58',
      desc: '某大型社区部署Community+平台的全过程与效果展示',
      desc_en: 'Full deployment process and results of Community+ at a large residential community'
    },
    {
      id: 6,
      title: '边缘计算在工业质检中的应用',
      title_en: 'Edge Computing in Industrial Quality Inspection',
      category: '技术分享',
      category_en: 'Tech Talk',
      cover: 'https://picsum.photos/seed/video6/480/270',
      url: 'https://www.bilibili.com/video/BV1example6',
      duration: '15:30',
      desc: 'EdgeBox X1在制造业质检场景的实际部署与效果分析',
      desc_en: 'Real-world deployment and performance of EdgeBox X1 in manufacturing inspection'
    }
  ],

  // 联系/留言
  messages: [],

  // 后台管理员
  admin: {
    username: 'admin',
    password: 'admin123'
  }
};

// ========== 工具：深拷贝 ==========
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// ========== 数据管理器 ==========
const DB = {
  STORAGE_KEY: 'techvision_data_v1',

  // 初始化：如果 localStorage 中没有数据则写入默认数据
  init() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (!raw) {
      this.save(DEFAULT_DATA);
      return;
    }
    // 数据迁移：补齐缺失的 _en 字段（修复旧数据无国际化字段的问题）
    try {
      const data = JSON.parse(raw);
      if (migrateI18nFields(data)) {
        this.save(data);
      }
    } catch (e) {
      console.error('数据解析失败，重置为默认数据', e);
      this.save(DEFAULT_DATA);
    }
  },

  // 读取全部数据
  load() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (!raw) {
      this.save(DEFAULT_DATA);
      return DEFAULT_DATA;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error('数据解析失败，重置为默认数据', e);
      this.save(DEFAULT_DATA);
      return DEFAULT_DATA;
    }
  },

  // 保存全部数据
  save(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  // 重置为默认数据
  reset() {
    this.save(deepClone(DEFAULT_DATA));
    return DEFAULT_DATA;
  },

  // ========== 主题配色相关 ==========

  // 获取当前配色方案
  getColorScheme() {
    const data = this.load();
    const key = (data.theme && data.theme.colorScheme) || 'tech_blue';
    return COLOR_SCHEMES[key] || COLOR_SCHEMES.tech_blue;
  },

  // 获取当前配色 key
  getColorSchemeKey() {
    const data = this.load();
    return (data.theme && data.theme.colorScheme) || 'tech_blue';
  },

  // 切换配色方案
  setColorScheme(schemeKey) {
    const data = this.load();
    if (!data.theme) data.theme = {};
    data.theme.colorScheme = schemeKey;
    this.save(data);
    return COLOR_SCHEMES[schemeKey] || null;
  },

  // 获取所有配色方案列表
  getAllColorSchemes() {
    return Object.entries(COLOR_SCHEMES).map(([key, val]) => ({
      key, name: val.name, ...val
    }));
  },

  // ========== 行业模板相关 ==========

  // 获取所有行业模板列表（摘要）
  getIndustryList() {
    return Object.entries(INDUSTRY_TEMPLATES).map(([key, val]) => ({
      key,
      name: val.name,
      icon: val.icon,
      description: val.description,
      colorScheme: val.colorScheme
    }));
  },

  // 获取单个行业模板详情
  getIndustryTemplate(key) {
    const tpl = INDUSTRY_TEMPLATES[key];
    return tpl ? deepClone(tpl) : null;
  },

  // 应用行业模板：替换 site/features/products/banners/videos + 配色
  applyIndustryTemplate(key) {
    const tpl = INDUSTRY_TEMPLATES[key];
    if (!tpl) return false;
    const data = this.load();
    // 替换站点信息
    data.site = deepClone(tpl.site);
    // 替换特性
    data.features = deepClone(tpl.features);
    // 替换产品
    data.products = deepClone(tpl.products);
    // 替换轮播
    data.banners = deepClone(tpl.banners);
    // 替换视频
    data.videos = deepClone(tpl.videos);
    // 替换配色
    if (!data.theme) data.theme = {};
    data.theme.colorScheme = tpl.colorScheme;
    // 保留留言和管理员
    this.save(data);
    return true;
  },

  // 获取站点信息
  getSite() {
    const data = this.load();
    return data.site;
  },

  // 获取导航
  getNav() {
    const data = this.load();
    return data.nav;
  },

  // 获取轮播图
  getBanners() {
    const data = this.load();
    return data.banners || [];
  },

  // 获取产品列表
  getProducts() {
    const data = this.load();
    return data.products || [];
  },

  // 获取单个产品
  getProductById(id) {
    const data = this.load();
    return (data.products || []).find(p => p.id === parseInt(id));
  },

  // 获取视频列表
  getVideos() {
    const data = this.load();
    return data.videos || [];
  },

  // 获取留言
  getMessages() {
    const data = this.load();
    return data.messages || [];
  },

  // 新增留言
  addMessage(msg) {
    const data = this.load();
    msg.id = Date.now();
    msg.time = new Date().toLocaleString('zh-CN');
    msg.status = 'unread';
    if (!data.messages) data.messages = [];
    data.messages.unshift(msg);
    this.save(data);
    return msg;
  },

  // 标记留言已读
  markMessageRead(id) {
    const data = this.load();
    const msg = (data.messages || []).find(m => m.id === id);
    if (msg) {
      msg.status = 'read';
      this.save(data);
    }
    return msg;
  },

  // 删除留言
  deleteMessage(id) {
    const data = this.load();
    data.messages = (data.messages || []).filter(m => m.id !== id);
    this.save(data);
  },

  // 新增产品
  addProduct(product) {
    const data = this.load();
    if (!data.products) data.products = [];
    product.id = data.products.length > 0
      ? Math.max(...data.products.map(p => p.id)) + 1
      : 1;
    data.products.push(product);
    this.save(data);
    return product;
  },

  // 更新产品
  updateProduct(id, updates) {
    const data = this.load();
    const product = data.products.find(p => p.id === parseInt(id));
    if (product) {
      Object.assign(product, updates);
      this.save(data);
    }
    return product;
  },

  // 删除产品
  deleteProduct(id) {
    const data = this.load();
    data.products = (data.products || []).filter(p => p.id !== parseInt(id));
    this.save(data);
  },

  // 新增轮播图
  addBanner(banner) {
    const data = this.load();
    if (!data.banners) data.banners = [];
    banner.id = data.banners.length > 0
      ? Math.max(...data.banners.map(b => b.id)) + 1
      : 1;
    data.banners.push(banner);
    this.save(data);
    return banner;
  },

  // 更新轮播图
  updateBanner(id, updates) {
    const data = this.load();
    const banner = data.banners.find(b => b.id === parseInt(id));
    if (banner) {
      Object.assign(banner, updates);
      this.save(data);
    }
    return banner;
  },

  // 删除轮播图
  deleteBanner(id) {
    const data = this.load();
    data.banners = (data.banners || []).filter(b => b.id !== parseInt(id));
    this.save(data);
  },

  // 更新站点信息
  updateSite(site) {
    const data = this.load();
    data.site = Object.assign(data.site, site);
    this.save(data);
    return data.site;
  },

  // 新增视频
  addVideo(video) {
    const data = this.load();
    if (!data.videos) data.videos = [];
    video.id = data.videos.length > 0
      ? Math.max(...data.videos.map(v => v.id)) + 1
      : 1;
    data.videos.push(video);
    this.save(data);
    return video;
  },

  // 更新视频
  updateVideo(id, updates) {
    const data = this.load();
    const video = data.videos.find(v => v.id === parseInt(id));
    if (video) {
      Object.assign(video, updates);
      this.save(data);
    }
    return video;
  },

  // 删除视频
  deleteVideo(id) {
    const data = this.load();
    data.videos = (data.videos || []).filter(v => v.id !== parseInt(id));
    this.save(data);
  },

  // 管理员登录验证
  login(username, password) {
    const data = this.load();
    if (data.admin.username === username && data.admin.password === password) {
      const token = btoa(username + ':' + Date.now());
      sessionStorage.setItem('admin_token', token);
      sessionStorage.setItem('admin_user', username);
      return { success: true, token };
    }
    return { success: false, message: '用户名或密码错误' };
  },

  // 检查登录状态
  isLoggedIn() {
    return !!sessionStorage.getItem('admin_token');
  },

  // 退出登录
  logout() {
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_user');
  },

  // ========== 语言管理 ==========

  // 获取当前语言
  getLang() {
    return detectLang();
  },

  // 设置语言
  setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }
};

// ========== 内容字段翻译辅助函数 ==========
// 用法: tl(product, 'name') → 中文返回 product.name，英文返回 product.name_en
//       tl(site, 'slogan')  → 中文返回 site.slogan，英文返回 site.slogan_en
function tl(item, field) {
  if (!item) return '';
  const lang = detectLang();
  const enField = field + '_en';
  if (lang === 'en' && item[enField]) return item[enField];
  return item[field] || item[enField] || '';
}

// UI 文本翻译: t('nav_home') → 根据 I18N 字典返回当前语言的文本
function t(key) {
  const entry = I18N[key];
  if (!entry) return key;
  const lang = detectLang();
  return entry[lang] || entry.zh || key;
}

// ========== 数据迁移：补齐缺失的 _en 字段 ==========
// 当用户在国际化功能上线前已访问过网站，localStorage 中的旧数据缺少 label_en 等字段，
// 导致切换英文时 tl() 找不到英文翻译、fallback 返回中文。
// 本函数遍历已存储的数据，用 DEFAULT_DATA 中对应的 _en 字段补齐缺失项。
function migrateI18nFields(stored) {
  if (!stored) return false;
  const def = deepClone(DEFAULT_DATA);
  let changed = false;

  // site 对象：补齐所有缺失的 _en 字段
  if (stored.site) {
    for (const key in def.site) {
      if (key.endsWith('_en') && !(key in stored.site)) {
        stored.site[key] = def.site[key];
        changed = true;
      }
    }
  }

  // nav 数组：nav 不可由用户编辑，若缺失 label_en 则整体替换
  if (stored.nav && stored.nav.length) {
    if (!stored.nav[0].label_en) {
      stored.nav = deepClone(def.nav);
      changed = true;
    }
  }

  // 按 id 匹配的数组：features / products / banners / videos
  // 先尝试从 DEFAULT_DATA 补齐，再尝试从 INDUSTRY_TEMPLATES 补齐
  ['features', 'products', 'banners', 'videos'].forEach(arrKey => {
    if (!stored[arrKey] || !def[arrKey]) return;
    stored[arrKey].forEach(item => {
      // 从 DEFAULT_DATA 找匹配项
      let d = def[arrKey].find(x => x.id === item.id);
      // 如果 DEFAULT_DATA 没匹配到，尝试从各行业模板找
      if (!d && typeof INDUSTRY_TEMPLATES !== 'undefined') {
        for (const tk in INDUSTRY_TEMPLATES) {
          const tpl = INDUSTRY_TEMPLATES[tk];
          if (tpl[arrKey]) {
            d = tpl[arrKey].find(x => x.id === item.id);
            if (d) break;
          }
        }
      }
      if (!d) return;
      for (const k in d) {
        if (k.endsWith('_en') && !(k in item)) {
          item[k] = d[k];
          changed = true;
        }
        // 嵌套 specs 数组
        if (k === 'specs' && d.specs && item.specs) {
          item.specs.forEach((s, i) => {
            if (d.specs[i]) {
              for (const sk in d.specs[i]) {
                if (sk.endsWith('_en') && !(sk in s)) {
                  s[sk] = d.specs[i][sk];
                  changed = true;
                }
              }
            }
          });
        }
      }
    });
  });

  // site 也尝试从行业模板补齐
  if (stored.site && typeof INDUSTRY_TEMPLATES !== 'undefined') {
    for (const tk in INDUSTRY_TEMPLATES) {
      const tplSite = INDUSTRY_TEMPLATES[tk].site;
      if (tplSite && tplSite.name === stored.site.name) {
        for (const key in tplSite) {
          if (key.endsWith('_en') && !(key in stored.site)) {
            stored.site[key] = tplSite[key];
            changed = true;
          }
        }
        break;
      }
    }
  }

  return changed;
}

// 自动初始化
DB.init();
