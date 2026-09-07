// ICPC Uruguay — puntuacion de Codeforces por integrante.
// Se consulta la API publica de Codeforces desde el navegador de cada
// visitante (no desde el servidor), con cache en localStorage por 1 hora
// para no golpear la API en cada visita. Si la API falla o no hay
// conexion, simplemente no se muestra el badge: nunca rompe la pagina.

(function () {
  var CACHE_KEY = 'icpc-cf-ratings-v1';
  var CACHE_TTL = 60 * 60 * 1000;

  function tierColor(rating) {
    if (typeof rating !== 'number') return '#9fb3d1';
    if (rating < 1200) return '#9fb3d1';
    if (rating < 1400) return '#4caf50';
    if (rating < 1600) return '#17b6ae';
    if (rating < 1900) return '#4fb4e8';
    if (rating < 2100) return '#a463f2';
    if (rating < 2400) return '#ff9d33';
    return '#ff5c5c';
  }

  function rankLabel(rank) {
    if (!rank) return '';
    return rank.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function renderBadges(data) {
    document.querySelectorAll('[data-cf-handle]').forEach(function (el) {
      if (el.querySelector('.cf-elo')) return;
      var handle = el.getAttribute('data-cf-handle').toLowerCase();
      var info = data[handle];
      if (!info || typeof info.rating !== 'number') return;
      var elo = document.createElement('span');
      elo.className = 'cf-elo';
      elo.textContent = ' · ELO: ' + info.rating;
      var label = rankLabel(info.rank);
      if (label) el.title = label;
      elo.style.color = tierColor(info.rating);
      el.appendChild(elo);
    });
  }

  function readCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || (Date.now() - parsed.ts) > CACHE_TTL) return null;
      return parsed.data;
    } catch (e) {
      return null;
    }
  }

  function writeCache(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: data }));
    } catch (e) {
      /* localStorage no disponible: seguimos sin cache */
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var handles = Array.prototype.map.call(
      document.querySelectorAll('[data-cf-handle]'),
      function (el) { return el.getAttribute('data-cf-handle'); }
    );
    if (!handles.length) return;

    var cached = readCache();
    if (cached) {
      renderBadges(cached);
      return;
    }

    fetch('https://codeforces.com/api/user.info?handles=' + encodeURIComponent(handles.join(';')))
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json.status !== 'OK' || !Array.isArray(json.result)) return;
        var data = {};
        json.result.forEach(function (u) {
          data[u.handle.toLowerCase()] = { rating: u.rating, rank: u.rank };
        });
        writeCache(data);
        renderBadges(data);
      })
      .catch(function () {
        /* sin ratings visibles si la API no responde */
      });
  });
})();
