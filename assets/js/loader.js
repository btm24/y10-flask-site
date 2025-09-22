async function loadPartials() {
  // If we're inside /lessons/, go up one level for partials; otherwise stay here.
  const inLessons = location.pathname.includes('/y10-flask-site/lessons/') ||
                    location.pathname.endsWith('/lessons/') ||
                    location.pathname.includes('/lessons/');

  const base = inLessons ? '..' : '.';  // relative base

  const inject = async (id, path) => {
    const el = document.getElementById(id);
    if (!el) return;
    const res = await fetch(path);
    el.innerHTML = await res.text();
  };

  await inject('header',  `${base}/partials/header.html`);
  await inject('footer',  `${base}/partials/footer.html`);
  await inject('sidebar', `${base}/partials/sidebar.html`);
}
