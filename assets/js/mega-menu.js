/* ==========================================================================
   MEGA MENU (desktop ≥ lg)
   - Edit menu content in MEGA_MENU below. Badge: 'NEW' | 'FREE' | undefined.
   - Each top-level button in the header has data-mega="<index>".
   ========================================================================== */
const MEGA_MENU = [
  {
    title: 'Thiết kế Website',
    cats: [
      { name: 'Website Doanh nghiệp', icon: 'building', groups: [
        { h: 'Gói thiết kế', links: [['Gói Zero (1 – 6 triệu)'], ['Gói Hero (7 – 60 triệu+)'], ['Thiết kế cao cấp theo brand', 'NEW']] },
        { h: 'Theo lĩnh vực', links: [['Công ty – Dịch vụ'], ['Sản xuất – Công nghiệp'], ['Giáo dục – Đào tạo'], ['Y tế – Phòng khám']] },
        { h: 'Tính năng mở rộng', links: [['Đa ngôn ngữ'], ['Tích hợp CRM'], ['Chatbot AI', 'NEW']] },
      ] },
      { name: 'Website Bán hàng', icon: 'cart', badge: 'NEW', groups: [
        { h: 'Giải pháp bán hàng', links: [['Website bán lẻ'], ['Website đa kênh (Omni)', 'NEW'], ['Website B2B – Đại lý']] },
        { h: 'Thanh toán & Vận chuyển', links: [['Cổng thanh toán VNPay, MoMo'], ['Kết nối GHN, GHTK'], ['Đồng bộ Shopee, Lazada']] },
        { h: 'Tăng trưởng', links: [['Mã giảm giá & Flash sale'], ['Tích điểm thành viên'], ['Tracking Pixel & GA4']] },
      ] },
      { name: 'Landing Page', icon: 'layout', groups: [
        { h: 'Theo mục tiêu', links: [['Thu Lead quảng cáo'], ['Ra mắt sản phẩm'], ['Sự kiện – Hội thảo']] },
        { h: 'Tối ưu chuyển đổi', links: [['A/B Testing', 'NEW'], ['Form & Popup thông minh'], ['Tốc độ tải dưới 2 giây']] },
      ] },
      { name: 'Thiết kế theo yêu cầu', icon: 'pen', groups: [
        { h: 'Quy trình', links: [['Khảo sát & Tư vấn'], ['Thiết kế UI/UX'], ['Lập trình & Tích hợp'], ['Bàn giao & Đồng hành']] },
        { h: 'Hỗ trợ', links: [['Báo giá nhanh', 'FREE'], ['Tư vấn 1:1 với chuyên gia']] },
      ] },
    ],
  },
  {
    title: 'Mẫu Website',
    layout: 'grid', // flat grid of categories, no sub-columns
    cats: [
      { name: 'Bất động sản & Dự án', icon: 'city' },
      { name: 'Xây dựng & Nội thất', icon: 'hardhat' },
      { name: 'Thương mại & Bán lẻ', icon: 'store' },
      { name: 'Thời trang & Phụ kiện', icon: 'shirt' },
      { name: 'Y tế, Dược & Thẩm mỹ Spa', icon: 'health' },
      { name: 'Nhà hàng, Cafe & F&B', icon: 'coffee' },
      { name: 'Du lịch, Resort & Khách sạn', icon: 'plane' },
      { name: 'Giáo dục & Trung tâm Đào tạo', icon: 'grad' },
      { name: 'Sản xuất & Cơ khí Công nghiệp', icon: 'factory' },
      { name: 'Công nghệ, IT & Phần mềm', icon: 'cpu' },
      { name: 'Vận tải & Logistics Quốc tế', icon: 'truck' },
      { name: 'Tài chính, Luật & Doanh nghiệp', icon: 'briefcase' },
      { name: 'Ô tô, Xe máy & Showroom', icon: 'car' },
      { name: 'Truyền thông, Quảng cáo & Sự kiện', icon: 'megaphone' },
    ],
  },
  {
    title: 'Chăm sóc Website',
    cats: [
      { name: 'Quản trị & Cập nhật nội dung', icon: 'edit', groups: [
        { h: 'Gói chăm sóc', links: [['Gói Cơ bản'], ['Gói Nâng cao'], ['Gói Toàn diện', 'NEW']] },
        { h: 'Dịch vụ lẻ', links: [['Viết bài chuẩn SEO'], ['Đăng sản phẩm'], ['Thiết kế banner']] },
      ] },
      { name: 'Bảo trì & Tối ưu tốc độ', icon: 'gauge', groups: [
        { h: 'Bảo trì', links: [['Cập nhật mã nguồn & plugin'], ['Sao lưu định kỳ'], ['Giám sát uptime 24/7']] },
        { h: 'Tối ưu', links: [['Tối ưu Core Web Vitals'], ['Nén ảnh & CDN'], ['Kiểm tra tốc độ', 'FREE']] },
      ] },
      { name: 'Bảo mật & Chống mã độc', icon: 'shield', groups: [
        { h: 'Bảo vệ', links: [['Quét mã độc định kỳ'], ['Tường lửa Web (WAF)', 'NEW'], ['Chống DDoS']] },
        { h: 'Khắc phục', links: [['Gỡ mã độc khẩn cấp'], ['Khôi phục website bị hack']] },
      ] },
    ],
  },
  {
    title: 'Audit Website',
    cats: [
      { name: 'Đo lường hiệu suất SEO', icon: 'search', groups: [
        { h: 'Audit SEO', links: [['SEO On-page'], ['SEO Technical'], ['Phân tích từ khóa']] },
        { h: 'Báo cáo', links: [['Báo cáo SEO tổng quan', 'FREE'], ['Theo dõi thứ hạng hàng tháng']] },
      ] },
      { name: 'Trải nghiệm người dùng (UX)', icon: 'cursor', groups: [
        { h: 'Đánh giá UX', links: [['Heatmap & Session replay'], ['Phân tích phễu chuyển đổi'], ['Kiểm tra trên mobile']] },
        { h: 'Đề xuất', links: [['Thiết kế lại giao diện'], ['Tối ưu CTA & Form', 'NEW']] },
      ] },
      { name: 'An toàn bảo mật SSL', icon: 'lock', groups: [
        { h: 'Kiểm tra', links: [['Kiểm tra SSL/TLS', 'FREE'], ['Quét lỗ hổng bảo mật'], ['Kiểm tra phân quyền']] },
        { h: 'Xử lý', links: [['Cài đặt & gia hạn SSL'], ['Vá lỗ hổng']] },
      ] },
    ],
  },
  {
    title: 'Dịch vụ Website',
    cats: [
      { name: 'Tên miền', icon: 'globe', badge: 'NEW', groups: [
        { h: 'Đăng ký', links: [['Tên miền .vn'], ['Tên miền quốc tế'], ['Kiểm tra tên miền', 'FREE']] },
        { h: 'Quản lý', links: [['Chuyển tên miền về MATBAO'], ['Bảo vệ tên miền', 'NEW']] },
      ] },
      { name: 'Cloud Web Hosting', icon: 'cloud', groups: [
        { h: 'Hosting', links: [['Hosting WordPress'], ['Cloud Hosting tốc độ cao'], ['Hosting Business']] },
        { h: 'Máy chủ', links: [['Cloud VPS'], ['Máy chủ riêng']] },
      ] },
      { name: 'Email Doanh nghiệp', icon: 'mail', groups: [
        { h: 'Email theo tên miền', links: [['Email Pro'], ['Email Business']] },
        { h: 'Email đối tác', links: [['Microsoft 365'], ['Google Workspace']] },
      ] },
      { name: 'Chứng chỉ SSL', icon: 'ssl', groups: [
        { h: 'Chứng chỉ', links: [['SSL DV cơ bản'], ['SSL OV doanh nghiệp'], ['SSL EV cao cấp']] },
        { h: 'Hỗ trợ', links: [['Cài đặt SSL miễn phí', 'FREE']] },
      ] },
    ],
  },
];

(function () {
  const ICONS = {
    city: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4"/>',
    hardhat: '<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5M4 15v-3a6 6 0 0 1 6-6M14 6a6 6 0 0 1 6 6v3"/>',
    store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4M2 7h20"/>',
    health: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
    coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    grad: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    layout: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    sparkle: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
    shirt: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>',
    gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    cursor: '<path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    ssl: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><rect x="9" y="10.5" width="6" height="5" rx="1"/><path d="M10 10.5V9a2 2 0 0 1 4 0v1.5"/>',
  };

  const badge = (b) => {
    if (b === 'NEW') return '<span class="inline-flex items-center px-1.5 py-px rounded-[4px] bg-[#6cc24a] text-white text-[9.5px] font-extrabold tracking-wide leading-[14px]">NEW</span>';
    if (b === 'FREE') return '<span class="inline-flex items-center px-2 py-px -skew-x-12 bg-[#e32227] text-white text-[9.5px] font-black italic tracking-wide leading-[14px]">FREE</span>';
    return '';
  };
  const icon = (name) => `<svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;

  const header = document.querySelector('header');
  const panel = document.getElementById('megaMenu');
  const tops = Array.from(document.querySelectorAll('[data-mega]'));
  if (!header || !panel || !tops.length) return;

  const catList = panel.querySelector('[data-mega-cats]');
  const cols = panel.querySelector('[data-mega-cols]');
  let openIdx = -1;
  let activeCat = 0;
  let openTimer, closeTimer;

  function renderCols(menu, ci) {
    const cat = menu.cats[ci];
    cols.innerHTML = cat.groups.map((g) => `
      <div class="min-w-[150px] xl:min-w-[170px]">
        <p class="mb-4 text-[11.5px] font-extrabold uppercase tracking-[.06em] text-[#ee6624]">${g.h}</p>
        <ul class="space-y-3.5">
          ${g.links.map(([label, b]) => `
            <li><a href="#" class="inline-flex items-center gap-2.5 whitespace-nowrap text-[14px] xl:text-[15px] font-medium text-slate-700 hover:text-[#e32227] transition-colors">${label}${badge(b)}</a></li>`).join('')}
        </ul>
      </div>`).join('');
    catList.querySelectorAll('[data-cat]').forEach((el, k) => el.classList.toggle('is-active', k === ci));
  }

  const COLS_SPLIT = cols.className; // default: columns next to the category list
  const COLS_GRID = 'flex-1 min-w-0 grid grid-cols-3 xl:grid-cols-4 content-start gap-x-6 gap-y-1 py-8';

  function renderGrid(menu) {
    catList.classList.add('hidden');
    cols.className = COLS_GRID;
    cols.innerHTML = menu.cats.map((c) => `
      <a href="#" class="group/cat flex min-w-0 items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] xl:text-[15px] font-medium text-slate-700 transition-colors hover:bg-white/70 hover:text-[#ee6624]">
        <span class="grid place-items-center w-9 h-9 shrink-0 rounded-[10px] bg-white/80 text-slate-500 shadow-[0_2px_6px_-2px_rgba(15,23,42,.12)] transition-colors group-hover/cat:bg-[#fff1ec] group-hover/cat:text-[#ee6624]">${icon(c.icon)}</span>
        <span class="min-w-0 leading-snug">${c.name}</span>${badge(c.badge)}
      </a>`).join('');
  }

  function renderMenu(i) {
    const menu = MEGA_MENU[i];
    if (menu.layout === 'grid') return renderGrid(menu);
    catList.classList.remove('hidden');
    cols.className = COLS_SPLIT;
    catList.innerHTML = menu.cats.map((c, k) => `
      <li>
        <a href="#" data-cat="${k}"
          class="group/cat flex items-center gap-3 px-3 py-2.5 text-[15px] -mx-3 rounded-xl whitespace-nowrap font-medium text-slate-700 transition-colors hover:text-[#ee6624] [&.is-active]:text-[#ee6624] [&.is-active]:bg-white/70">
          <span class="text-slate-500 group-hover/cat:text-[#ee6624] group-[.is-active]/cat:text-[#ee6624]">${icon(c.icon)}</span>
          <span>${c.name}</span>${badge(c.badge)}
        </a>
      </li>`).join('');
    catList.querySelectorAll('[data-cat]').forEach((el) => {
      const k = +el.dataset.cat;
      el.addEventListener('mouseenter', () => { activeCat = k; renderCols(menu, k); });
      el.addEventListener('focus', () => { activeCat = k; renderCols(menu, k); });
    });
    activeCat = 0;
    renderCols(menu, 0);
  }

  function open(i) {
    clearTimeout(closeTimer);
    if (openIdx !== i) renderMenu(i);
    openIdx = i;
    panel.classList.add('is-open');
    tops.forEach((t, k) => { t.classList.toggle('is-active', k === i); t.setAttribute('aria-expanded', String(k === i)); });
  }
  function close() {
    clearTimeout(openTimer);
    panel.classList.remove('is-open');
    tops.forEach((t) => { t.classList.remove('is-active'); t.setAttribute('aria-expanded', 'false'); });
    openIdx = -1;
  }

  tops.forEach((btn) => {
    const i = +btn.dataset.mega;
    btn.addEventListener('mouseenter', () => {
      clearTimeout(openTimer); clearTimeout(closeTimer);
      // switch instantly if a panel is already open, otherwise wait a beat to avoid accidental opens
      openTimer = setTimeout(() => open(i), openIdx === -1 ? 120 : 0);
    });
    btn.addEventListener('click', () => (openIdx === i ? close() : open(i)));
  });
  header.addEventListener('mouseleave', () => { clearTimeout(openTimer); closeTimer = setTimeout(close, 180); });
  header.addEventListener('mouseenter', () => clearTimeout(closeTimer));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  document.addEventListener('click', (e) => { if (!header.contains(e.target)) close(); });
})();
