import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "/Kanbas/Courses/CourseNavigation/CourseNavigation.js";
 

function Home() {
  return `
  <div class="wd-bg-color-black d-block d-md-none">
  <a href="/Kanbas/KanbasNavigation/index.html">Kanbas Navigator</a>
  <a href="/Kanbas/Courses/CourseNavigation/index.html">Course Navigator</a>
</div>

<div class="wd-flex-row-container">
  <div class="wd-bg-color-black d-none d-md-block">
    ${KanbasNavigation("Courses")}
  </div>
  <div class="wd-flex-column-container">
    <div class="d-none d-md-block">
      <button class="btn btn-light float-end">Student View</button>
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/Kanbas/Courses/Home/index.html"
              >CS5610.11550.202410</a
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Modules
          </li>
        </ol>
      </nav>

      <hr />
    </div>
    <div class="wd-flex-row-container">
      <div>
       ${CourseNavigation("Home")}
      </div>
      <div>
        
        <button class="btn btn-secondary float-end">Collapse All</button>
        <button class="btn btn-secondary float-end">View Progress</button>
        <div class="dropdown float-end">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa fa-check-circle" aria-hidden="true"></i>
            Publish All
          </button>
          <ul class="dropdown-menu" data-bs-auto-close="outside">
            <li><a class="dropdown-item" href="#">Publish All</a></li>
            <li><a class="dropdown-item" href="#">UnPublish</a></li>
            <li><a class="dropdown-item" href="#">Public some</a></li>
          </ul>
        </div>
        <!-- <select class="btn btn-secondary">
          <option><i class="fa fa-check-circle" aria-hidden="true"></i> Publish All</option>
          <option>Public all items and modules</option> 
          <option><i class="fa fa-check-circle" aria-hidden="true"></i> UnPublish</option>
        </select> -->
        <button class="btn btn-danger float-end">
          <i class="fa fa-plus" aria-hidden="true"></i>Module
        </button>
        
        

        <div class="clearfix"></div>
        <hr />
        <div>
          <ul class="list-group">
            <li class="list-group-item">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              Week 0 - INTRO
              <i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> LEARNING OBJECTIVES<i class="fa fa-check-circle float-end" aria-hidden="true"></i></li>
            <li class="list-group-item active" aria-current="true"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3">Introduction to the course<i class="fa fa-check-circle float-end" aria-hidden="true"></i></span>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3">Learn what is Web Development<i class="fa fa-check-circle float-end" aria-hidden="true"></i></span>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3">Creating a development environment</span><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3">Creating a Web Application</span><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                >Getting started with the 1st Assignment</span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>

            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> READING<i class="fa fa-check-circle float-end" aria-hidden="true"></i></li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                >Full Stack Developer - Chapter 1 - Introduction</span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                >Full Stack Developer - Chaper 2 - Creating User Interfaces
                with HTML</span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> SLIDES<i class="fa fa-check-circle float-end" aria-hidden="true"></i></li>
            <li class="list-group-item red-link"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                ><a href="#"
                  >Introduction to Web Development Links to an external
                  site.</a
                ></span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item red-link"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                ><a href="#"
                  >Creating an HTTP server with Node.js Links to an external
                  site.</a
                ></span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item red-link"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                ><a href="#"
                  >Creating a React Application Links to an external
                  sites</a
                ></span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> Week 1 - HTML<i class="fa fa-check-circle float-end" aria-hidden="true"></i></li>

            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> LEARNING OBJECTIVES<i class="fa fa-check-circle float-end" aria-hidden="true"></i></li>

            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                >Learn how to create user interfaces with HTML</span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3">Keep working on assignment 1</span><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3">Deploy the assignment to Netlify</span><i class="fa fa-check-circle float-end" aria-hidden="true"></i>

            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> READING<i class="fa fa-check-circle float-end" aria-hidden="true"></i></li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                >Full Stack Developer - Chapter 1 - Introduction</span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                >Full Stack Developer - Chaper 2 - Creating User Interfaces
                with HTML</span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> Week 2<i class="fa fa-check-circle float-end" aria-hidden="true"></i></li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> LEARNING OBJECTIVES<i class="fa fa-check-circle float-end" aria-hidden="true"></i></li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3">Introduction to the course</span><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3">Introduction to the course website</span><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3">Introduction to the course tools</span><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
            <li class="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
              <span class="ms-3"
                >Introduction to the course assignments</span
              ><i class="fa fa-check-circle float-end" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-none d-xl-block">
        <h3>Course Status<br /></h3>
        <button class="btn-light">Unpublish</button>
        <button>
          <i class="btn-light fa fa-check-circle" aria-hidden="true"></i
          >Published</button
        ><br />
        <ul>
          <li><a href="#">Import Existing Content</a></li>
          <li><a href="#">Import From Commons</a></li>
          <li><a href="#">Choose Home Page</a></li>
          <li><a href="#">View Course Stream</a></li>
          <li><a href="#">New Announcement</a></li>
          <li><a href="#">New Analytics</a></li>
          <li><a href="#">View Course Notifications</a></li>
        </ul>
        <h3>Comming up <br /></h3>
        <a href="#">View Calendar</a><br />
        <ul>
          <li>
            <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
          <li>
            <a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
          </li>
          <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `;
}    

export default Home;