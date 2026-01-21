(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const YEAR = document.querySelector('.site-footer time');
  const saved = localStorage.getItem('theme');

  function applyTheme(t){
    document.documentElement.setAttribute('data-theme', t);
    const btn = document.getElementById('theme-toggle');
    if(btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  if(saved){
    applyTheme(saved);
  }else{
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  if(toggle){
    toggle.addEventListener('click', ()=>{
      const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = cur === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  // 年份显示（fallback）
  const footer = document.querySelector('.site-footer');
  if(footer) footer.textContent = footer.textContent.replace(/\d{4}/, new Date().getFullYear());
})();
