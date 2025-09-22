window.copyCode = async function(btn){
    const pre = btn.nextElementSibling; // <pre><code>...
    const text = pre?.innerText || '';
    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(()=>btn.textContent = old, 1200);
    } catch {}
  };
  