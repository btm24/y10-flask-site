async function loadPartials() {
  const here = location.pathname;
  // if we’re inside /lessons/, base is one level up
  const base = here.includes('/lessons/') ? '..' : '.';
  const inject = async (id, path) => {
    const el = document.getElementById(id);
    if (!el) return;
    const res = await fetch(path);
    el.innerHTML = await res.text();
  };
  await inject('header', `${base}/partials/header.html`);
  await inject('footer', `${base}/partials/footer.html`);
  await inject('sidebar', `${base}/partials/sidebar.html`);
}
  