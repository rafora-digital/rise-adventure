const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const form = document.getElementById('tripForm');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const value = key => String(data.get(key) || '').trim();
  const lines = [
    'Halo RISE Adventure Tour & Travel, saya ingin konsultasi perjalanan.', '',
    'Nama: ' + value('nama'),
    'Nomor WhatsApp: ' + value('telepon'),
    'Layanan: ' + value('layanan'),
    'Jumlah peserta: ' + value('peserta'),
    'Tanggal rencana: ' + (value('tanggal') || 'Belum ditentukan'),
    'Destinasi: ' + (value('destinasi') || 'Mohon rekomendasi'),
    'Catatan: ' + (value('catatan') || '-')
  ];
  const url = 'https://wa.me/6285799189589?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank', 'noopener,noreferrer');
});
document.querySelectorAll('.package-ask').forEach(link => {
  link.addEventListener('click', () => {
    const packageName = link.dataset.package || 'Paket wisata';
    const service = document.querySelector('[name="layanan"]');
    if (service) {
      const map = {
        'Dieng Sehari': 'Trip 1 hari',
        'Dieng 2 Hari 1 Malam': 'Trip 2 hari 1 malam',
        'Trip Custom': 'Trip custom / rombongan'
      };
      service.value = map[packageName] || 'Paket wisata Dieng';
    }
  });
});
