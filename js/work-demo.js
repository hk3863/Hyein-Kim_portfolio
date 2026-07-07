document.addEventListener('DOMContentLoaded', function () {
  var sections = Array.from(document.querySelectorAll('.reveal-section'));
  var navLinks = Array.from(document.querySelectorAll('.work-demo-nav-link'));
  var clickableProjects = Array.from(document.querySelectorAll('.archive-project-card[data-href]'));

  if (!sections.length || !navLinks.length) {
    return;
  }

  function setCurrentSection(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-current', isActive);
    });
  }

  setCurrentSection(sections[0].getAttribute('id'));

  var activeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        setCurrentSection(entry.target.getAttribute('id'));
      });
    },
    {
      threshold: 0.45
    }
  );

  sections.forEach(function (section) {
    activeObserver.observe(section);
  });

  clickableProjects.forEach(function (project) {
    var href = project.getAttribute('data-href');

    if (!href) {
      return;
    }

    project.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        return;
      }

      window.location.href = href;
    });

    project.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      window.location.href = href;
    });
  });
});
