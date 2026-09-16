window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    if (loader) {
      setTimeout(function () {
        loader.classList.add('loader-hidden');
      }, 200);
    }
  });

  /* True masonry (shortest-column-first) for the closing photo grid,
     matching the reference site: two even columns, each photo placed
     into whichever column is currently shortest and shown at its own
     natural size — nothing cropped, resized, or singled out into its
     own block. This placement is computed directly (rather than left to
     CSS), so there's no way for it to strand a gap. Runs only at
     tablet/desktop widths — mobile keeps its plain single-column stack,
     untouched. */
  (function () {
    function layoutMasonry(container) {
      var width = window.innerWidth;
      var cols = width >= 640 ? 2 : 1;
      var imgs = Array.prototype.slice.call(container.querySelectorAll('img'));

      if (cols <= 1) {
        if (container.classList.contains('masonry-ready')) {
          imgs.forEach(function (img) { container.appendChild(img); });
          Array.prototype.slice.call(container.querySelectorAll('.masonry-col')).forEach(function (c) { c.remove(); });
          container.classList.remove('masonry-ready');
        }
        return;
      }

      var heights = new Array(cols).fill(0);
      var colEls = [];
      for (var i = 0; i < cols; i++) {
        var d = document.createElement('div');
        d.className = 'masonry-col';
        colEls.push(d);
      }
      imgs.forEach(function (img) {
        var ratio = parseFloat(img.getAttribute('data-ratio')) || (img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1.5);
        var shortest = 0;
        for (var j = 1; j < cols; j++) {
          if (heights[j] < heights[shortest]) shortest = j;
        }
        colEls[shortest].appendChild(img);
        heights[shortest] += 1 / ratio;
      });

      var frag = document.createDocumentFragment();
      colEls.forEach(function (c) { frag.appendChild(c); });
      container.innerHTML = '';
      container.appendChild(frag);
      container.classList.add('masonry-ready');
    }

    function initAll() {
      Array.prototype.slice.call(document.querySelectorAll('.photo-grid.masonry-js')).forEach(layoutMasonry);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAll);
    } else {
      initAll();
    }
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAll, 150);
    });
  })();