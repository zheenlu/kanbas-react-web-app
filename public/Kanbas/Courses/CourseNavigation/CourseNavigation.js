import React from 'react';

function CourseNavigation(active) {
  const links = [
    { name: "Home", url: "/Kanbas/Courses/Home/index.html" },
    { name: "Modules", url: "/Kanbas/Courses/Modules/index.html" },
    { name: "Piazza", url: "/Kanbas/Courses/Piazza/index.html" },
    { name: "Zoom Meetings", url: "/Kanbas/Courses/Zoom%20Meetings/index.html" }, // Replaced space with %20
    { name: "Assignments", url: "/Kanbas/Courses/Assignments/AssignmentsEditor/index.html" },
    { name: "Quizzes", url: "/Kanbas/Courses/Quizzes/index.html" },
    { name: "Grades", url: "/Kanbas/Courses/Grades/screen.html" },
    { name: "People", url: "/Kanbas/Courses/People/index.html" },
    { name: "Panopto Video", url: "/Kanbas/Courses/Panopto%20Video/index.html" }, // Replaced space with %20
    { name: "Discussions", url: "/Kanbas/Courses/Discussions/index.html" },
    { name: "Announcement", url: "/Kanbas/Courses/Announcement/index.html" },
    { name: "Pages", url: "/Kanbas/Courses/Pages/index.html" },
    { name: "Files", url: "/Kanbas/Courses/Files/index.html" },
    { name: "Rubrics", url: "/Kanbas/Courses/Rubrics/index.html" },
    { name: "Outcomes", url: "/Kanbas/Courses/Outcomes/index.html" },
    { name: "Collaborations", url: "/Kanbas/Courses/Collaborations/index.html" },
    { name: "Syllabus", url: "/Kanbas/Courses/Syllabus/index.html" },
  ];
  return `
    <ul class="wd-course-navigation">
      ${links
        .map(
          (link) =>
            `<li class="${link.name === active ? "wd-active" : ""}">
              <a href="${link.url}">
              ${link.name}</a>
            </li>`
        )
        .join("")}
    </ul>
  `;
}

export default CourseNavigation;
