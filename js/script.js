document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var instancesSidenav = M.Sidenav.init(sidenav);

    var modal = document.querySelectorAll('.modal');
    var instancesModal = M.Modal.init(modal);

    var media = document.querySelectorAll('.materialboxed');
    var instancesMedia = M.Materialbox.init(media);
  });

 