(function () {
  const content = window.siteContent;
  const profile = content.profile;

  function setText(id, value) {
    document.getElementById(id).textContent = value;
  }

  function makeLink(item) {
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.label;
    if (item.url !== "#") {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    return link;
  }

  document.title = profile.name + " | Cryosphere Hydrology & Remote Sensing";
  setText("nav-name", profile.name);
  setText("hero-name", profile.name);
  setText("hero-field", profile.field);
  setText("hero-role", profile.role);
  setText("hero-summary", profile.summary);
  setText("about-text", profile.about);
  setText("field-quote", content.fieldNote.quote);
  setText("field-caption", content.fieldNote.caption);
  setText("interest-text", content.personalInterest.text);
  setText("contact-intro", profile.contactIntro);
  setText("footer-name", profile.name);
  setText("year", new Date().getFullYear());

  const photo = document.getElementById("profile-photo");
  photo.src = profile.photoUrl;
  photo.alt = profile.photoAlt;

  const cvLink = document.getElementById("cv-link");
  if (profile.cvUrl) {
    cvLink.href = profile.cvUrl;
    cvLink.textContent = "Download CV";
  } else {
    cvLink.removeAttribute("href");
    cvLink.removeAttribute("target");
    cvLink.removeAttribute("rel");
    cvLink.classList.add("disabled");
  }
  const scholarLink = document.getElementById("scholar-link");
  scholarLink.href = profile.scholarUrl;

  const emailLinks = document.getElementById("email-links");
  profile.emails.forEach(function (item, index) {
    const email = document.createElement("a");
    email.className = "button " + (index === 0 ? "primary" : "secondary");
    email.href = "mailto:" + item.address;
    email.textContent = item.address;
    email.setAttribute("aria-label", item.label + ": " + item.address);
    emailLinks.appendChild(email);
  });

  const metrics = document.getElementById("metrics");
  profile.metrics.forEach(function (item) {
    const group = document.createElement("div");
    group.className = "metric";
    group.innerHTML = "<dt>" + item.value + "</dt><dd>" + item.label + "</dd>";
    metrics.appendChild(group);
  });

  const profiles = document.getElementById("profile-links");
  const socials = document.getElementById("social-links");
  profile.profiles.forEach(function (item) {
    profiles.appendChild(makeLink(item));
    socials.appendChild(makeLink(item));
  });

  const researchCards = document.getElementById("research-cards");
  content.research.forEach(function (item, index) {
    const card = document.createElement("article");
    card.className = "research-card";
    card.innerHTML =
      '<span class="research-number">0' +
      (index + 1) +
      "</span><h3>" +
      item.title +
      "</h3><p>" +
      item.description +
      "</p>";
    researchCards.appendChild(card);
  });

  const publications = document.getElementById("publication-list");
  content.publications.forEach(function (item) {
    const publication = document.createElement("article");
    publication.className = "publication";
    publication.innerHTML =
      '<span class="publication-year">' +
      item.year +
      '</span><div><h3>' +
      item.title +
      "</h3><p>" +
      item.authors +
      " · " +
      item.journal +
      '</p></div><a href="' +
      item.url +
      '" target="_blank" rel="noreferrer">' +
      item.type +
      "</a>";
    publications.appendChild(publication);
  });

  const articleList = document.getElementById("article-list");
  content.articles.forEach(function (item) {
    const article = document.createElement("article");
    article.className = "article";
    article.innerHTML =
      '<span class="article-meta">' +
      item.category +
      " · " +
      item.date +
      "</span><h3>" +
      item.title +
      "</h3><p>" +
      item.excerpt +
      '</p><a href="' +
      item.url +
      '" target="' +
      (item.url.indexOf("http") === 0 ? "_blank" : "_self") +
      '" rel="noreferrer">Read more →</a>';
    articleList.appendChild(article);
  });

  const interestItems = document.getElementById("interest-items");
  content.personalInterest.items.forEach(function (item) {
    const pill = document.createElement("span");
    pill.textContent = item;
    interestItems.appendChild(pill);
  });

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  const button = document.querySelector(".menu-button");
  const links = document.getElementById("nav-links");
  button.addEventListener("click", function () {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    links.classList.toggle("open", !expanded);
  });
  links.addEventListener("click", function () {
    links.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  });
})();
