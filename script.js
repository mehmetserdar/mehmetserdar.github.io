const links = [
  {
    name: "Applist Soft",
    url: "https://applistsoft.netlify.app",
    icon: "fas fa-font",
  },
  { name: "Biri", url: "https://biri.link/serdar", icon: "fa-solid fa-b" },
  {
    name: "GitHub",
    url: "https://github.com/mehmetserdar",
    icon: "fab fa-github",
  },
  {
    name: "Play Store",
    url: "https://play.google.com/store/apps/dev?id=7123957245789156225",
    icon: "fab fa-google-play",
  },
  {
    name: "Youtube",
    url: "https://youtube.com/@mehmet-serdar?sub_confirmation=1",
    icon: "fab fa-youtube",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/meh.ser.dar/",
    icon: "fab fa-instagram",
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/mobuygdev",
    icon: "fas fa-code",
  },
];

const linksContainer = document.getElementById("links");

// Dynamically create link items
links.forEach(function (link) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");

  const linkElement = document.createElement("a");
  linkElement.href = link.url;
  linkElement.target = "_blank";
  linkElement.innerHTML = `<i class="${link.icon}"></i> ${link.name}`;

  listItem.appendChild(linkElement);
  linksContainer.appendChild(listItem);
});

const netlifyLinks = [
  {
    name: "Quran App",
    url: "https://kuranikerim.netlify.app/",
    icon: "fas fa-book-quran",
  },
  {
    name: "Simple Notepad",
    url: "https://simplenotepad.netlify.app",
    icon: "fa-solid fa-note-sticky",
  },
  {
    name: "Strong Password Generator",
    url: "https://spwd.netlify.app/",
    icon: "fas fa-lock",
  },
];
const netlifyContainer = document.getElementById("netlify");

// Dynamically create link items
netlifyLinks.forEach(function (link) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");

  const netLink = document.createElement("a");
  netLink.href = link.url;
  netLink.target = "_blank";
  netLink.innerHTML = `<i class="${link.icon}"></i> ${link.name}`;

  listItem.appendChild(netLink);
  netlifyContainer.appendChild(listItem);
});

// Fetch and display selected repositories from GitHub
const githubUsername = "mehmetserdar";
const reposContainer = document.getElementById("repos");

fetch(`https://api.github.com/users/${githubUsername}/repos`)
  .then((response) => response.json())
  .then((data) => {
    // Filter and select the repositories you want to display

    // Dynamically create repository items
    data.forEach(function (repo) {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");

      const repoLink = document.createElement("a");
      repoLink.href = repo.html_url;
      repoLink.target = "_blank";
      repoLink.innerHTML = `<i class="fab fa-github"></i> ${repo.name}`;

      listItem.appendChild(repoLink);
      reposContainer.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching repositories:", error));
