async function loadPartials() {
    const inject = async (id, path) => {
      const el = document.getElementById(id);
      if (el) {
        const res = await fetch(path);
        el.innerHTML = await res.text();
      }
    };
    await inject('header', '/partials/header.html');
    await inject('footer', '/partials/footer.html');
    await inject('sidebar', '/partials/sidebar.html');
  }
  