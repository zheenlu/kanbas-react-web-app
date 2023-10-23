import React from 'react';

function KanbasNavigation(active) {
  const links = [
    {name: "Account", url: "/Kanbas/Account/Profile/screen.html", icon: "fa-user-circle-o", class: "wd-black-white" },
    {name: "Dashboard", url: "/Kanbas/Dashboard/screen.html", icon: "fa-tachometer"},
    {name: "Courses", url: "/Kanbas/Courses/Home/index.html", icon: "fa-book"},
    {name: "Calender", url: "/Kanbas/Calender/screen.html", icon: "fa-calendar"},
    {name: "Inbox", url: "/Kanbas/Inbox/screen.html", icon: "fa-inbox"},
    {name: "History", url: "/Kanbas/History/screen.html", icon: "fa-history"},
    {name: "Studio", url: "/Kanbas/Studio/screen.html", icon: "fa-desktop"},
    {name: "Commons", url: "/Kanbas/Commons/screen.html", icon: "fa-sign-out"},
    {name: "Help", url: "/Kanbas/Help/screen.html", icon: "fa-question-circle"},
  ];
  return `<ul class="wd-kanbas-navigation">
  ${links
    .map(
      (link) => ` 
      <li class="${link.name === active ? "wd-active" : ""}">
        <a href="${link.url}">
          <i class="fa ${link.icon}" aria-hidden="true"></i>
          ${link.name}
        </a>
      </li>`
    )
    .join("")}
</ul>`;
}
export default KanbasNavigation;



