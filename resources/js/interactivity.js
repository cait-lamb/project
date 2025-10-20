function toggleDisplay(elem) {
    if (getComputedStyle(elem).display === "none") {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  }

  function toggleContent(e) {
    const topic = e.currentTarget;
    const content = topic.nextElementSibling;
    toggleDisplay(content);
    const arrow = topic.querySelector('.arrow');
    arrow.classList.toggle('arrow-down');
    arrow.classList.toggle('arrow-up');
  }

  window.addEventListener('load', function(e) {
    const resumeDropdown = document.querySelectorAll('.topic');
    for (topic of resumeDropdown) {
        topic.addEventListener('click', toggleContent);
    }
  });

