(function(){
  "use strict";

  // ---------- WhatsApp: injeta o link em todos os pontos ----------
  document.querySelectorAll("#whatsapp-nav, #whatsapp-hero, #whatsapp-footer").forEach(function(a){
    a.href = WHATSAPP_URL;
  });

  // ---------- Navegação por abas ----------
  var views = document.querySelectorAll(".view");
  var navButtons = document.querySelectorAll(".nav-links button[data-view]");

  function showView(name){
    views.forEach(function(v){ v.classList.toggle("active", v.id === "view-" + name); });
    navButtons.forEach(function(b){
      var isActive = b.dataset.view === name;
      b.classList.toggle("active", isActive);
      b.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});
  }

  navButtons.forEach(function(b){
    b.addEventListener("click", function(){ showView(b.dataset.view); });
  });
  document.querySelectorAll("[data-goto]").forEach(function(el){
    el.addEventListener("click", function(){ showView(el.dataset.goto); });
  });

  // ---------- Filtros de aulões ----------
  var filtro = { prova: "saepe", serie: "9" };

  document.querySelectorAll(".toggle-group").forEach(function(group){
    var key = group.dataset.filter;
    group.querySelectorAll("button").forEach(function(btn){
      btn.addEventListener("click", function(){
        filtro[key] = btn.dataset.value;
        group.querySelectorAll("button").forEach(function(b){ b.classList.toggle("active", b === btn); });
        renderGrid();
      });
    });
  });

  // ---------- Render da grade de cards ----------
  var grid = document.getElementById("grid-auloes");

  function cardHTML(a){
    var tags = a.descritores.length
      ? '<ul class="card-desc-list">' + a.descritores.map(function(d){
          var txt = (a.descritorLabels && a.descritorLabels[d]) || DESCRITORES[d] || "";
          return '<li><b>' + d + '</b><span>' + txt + '</span></li>';
        }).join("") + '</ul>'
      : '<p class="card-desc-pending">Descritores em preparação.</p>';

    var footAction = a.status === "ready"
      ? '<button class="play" data-abrir="' + a.id + '">Jogar</button>'
      : '<span class="badge-soon">Em breve</span>';

    return (
      '<article class="card ' + a.status + '" data-jogo="' + a.corJogo + '">' +
        '<div class="card-top">' +
          '<span class="card-game"><span class="ic">' + a.icone + '</span>' + a.jogo + '</span>' +
          '<span class="card-num">Aulão ' + a.numero + '</span>' +
        '</div>' +
        '<h3>' + a.titulo + '</h3>' +
        '<p class="card-desc">' + a.resumo + '</p>' +
        tags +
        '<div class="card-foot">' + footAction + '</div>' +
      '</article>'
    );
  }

  function renderGrid(){
    var lista = AULOES.filter(function(a){ return a.prova === filtro.prova && a.serie === filtro.serie; });
    lista.sort(function(x,y){ return x.numero - y.numero; });
    grid.innerHTML = lista.map(cardHTML).join("");

    grid.querySelectorAll("[data-abrir]").forEach(function(btn){
      btn.addEventListener("click", function(){
        var aulao = AULOES.find(function(a){ return a.id === btn.dataset.abrir; });
        if (aulao) abrirAulao(aulao);
      });
    });
  }

  // ---------- Painel/overlay do aulão ----------
  var overlay = document.getElementById("player-overlay");
  var frame = document.getElementById("player-frame");
  var titleEl = document.getElementById("player-title");
  var closeBtn = document.getElementById("player-close");

  function abrirAulao(aulao){
    titleEl.textContent = "Aulão " + aulao.numero + " · " + aulao.titulo;
    frame.src = aulao.path;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function fecharAulao(){
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    frame.src = "about:blank"; // libera memória/áudio ao fechar
  }

  closeBtn.addEventListener("click", fecharAulao);
  overlay.addEventListener("click", function(e){ if (e.target === overlay) fecharAulao(); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape" && overlay.classList.contains("open")) fecharAulao(); });

  // ---------- Apoiar via Pix ----------
  var pixOverlay = document.getElementById("pix-overlay");
  var pixOpenBtn = document.getElementById("apoiar-btn");
  var pixCloseBtn = document.getElementById("pix-close");
  var pixCopyBtn = document.getElementById("pix-copy");

  if (pixOpenBtn) {
    pixOpenBtn.addEventListener("click", function(){
      pixOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
  function fecharPix(){
    pixOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (pixCloseBtn) pixCloseBtn.addEventListener("click", fecharPix);
  pixOverlay.addEventListener("click", function(e){ if (e.target === pixOverlay) fecharPix(); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape" && pixOverlay.classList.contains("open")) fecharPix(); });

  if (pixCopyBtn) {
    pixCopyBtn.addEventListener("click", function(){
      function marcarCopiado(){
        var original = "Copiar chave Pix";
        pixCopyBtn.textContent = "Chave copiada!";
        pixCopyBtn.classList.add("copied");
        setTimeout(function(){ pixCopyBtn.textContent = original; pixCopyBtn.classList.remove("copied"); }, 2200);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(PIX_PAYLOAD).then(marcarCopiado).catch(function(){
          // fallback abaixo
          copiarComFallback();
        });
      } else {
        copiarComFallback();
      }
      function copiarComFallback(){
        var ta = document.createElement("textarea");
        ta.value = PIX_PAYLOAD;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); marcarCopiado(); } catch(e) {}
        document.body.removeChild(ta);
      }
    });
  }

  // ---------- Estatística do hero ----------
  document.getElementById("stat-prontos").textContent = AULOES.filter(function(a){ return a.status === "ready"; }).length;

  // ---------- Primeira pintura ----------
  renderGrid();
})();
