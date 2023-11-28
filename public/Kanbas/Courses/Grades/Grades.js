import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "/Kanbas/Courses/CourseNavigation/CourseNavigation.js";
import React from 'react';

function Grades() {
  return `<div class="wd-bg-color-black d-block d-md-none">
  <a href="/Kanbas/KanbasNavigation/index.html">Kanbas Navigator</a>
  <a href="/Kanbas/Courses/CourseNavigation/index.html">Course Navigator</a>
</div>
<div class="wd-flex-row-container">
  <!--kanbasnavigation-->
  <div class="wd-bg-color-black d-none d-md-block">
    ${KanbasNavigation("Courses")}
  </div>

  <div class="wd-flex-column-container">
    <!--breadcrumb-->
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
            Grades
          </li>
        </ol>
      </nav>
      <hr />
    </div>
    <div class="wd-flex-row-container">
      <!--coursenavigation-->
      <div>
        ${CourseNavigation("Grades")}
      </div>
      <!--grades-->
      <div>
        <!--why these three are not lined up on the same line? The issue with your code is that the <select> element in Bootstrap's form-select class has some inherent styling that may affect its alignment. To ensure that all three elements are lined up on the same line, you can apply Bootstrap's d-flex and align-items-center classes to the containing <div>-->
        <div class="float-end d-flex align-items-center">
          <button class="btn btn-light"><i class="fa fa-sign-in" aria-hidden="true"></i>Import</button>
          <select class="form-select mx-2">
            <option><i class="fa fa-sign-out" aria-hidden="true"></i>Export</option>
            <option><i class="fa fa-sign-out" aria-hidden="true"></i>UnPublish</option>
          </select>
          <button class="btn btn-light"><i class="fa fa-cog" aria-hidden="true"></i></button>
        </div>
        
        <table class="table">
          <tbody>
            <tr>
              <td>
                Student Names <br />
                <input
                class="form-control"
                  placeholder="Search Students"
                />
              </td>
              <td>
                Assignment Names <br />
                <input class="form-control"
                placeholder="Search Assignments"/>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-light"><i class="fa fa-clone" aria-hidden="true"></i>Apply Filters</button>

        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>A1 SETUP Out of 100</th>
                <th>A2 HTML Out of 100</th>
                <th>A3 CSS Out of 100</th>
                <th>A4 BOOTSTRAP Out of 100</th>
                <th>A5 JAVASCRIPT Out of 100</th>
                <th>A6 REACT Out of 100</th>
                <th>A7 REDUX Out of 100</th>
                <th>A8 NODE Out of 100</th>
                <th>A9 MONGO Out of 100</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="red-text">Alice Wonderland</td>
                <td>89</td>
                <td>87</td>
                <td>90</td>
                <td>89</td>
                <td>94</td>
                <td>88</td>
                <td>87</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td class="red-text">Bob Builder</td>
                <td>88</td>
                <td>86</td>
                <td>77</td>
                <td>95</td>
                <td>87</td>
                <td>
                  <div class="d-flex">
                    <input type="text" value="98" class="form-control">
                    <button class="btn btn-light ms-2"><i class="fa fa-sign-out" aria-hidden="true"></i></button>
                  </div>
                </td>
                <td>83</td>
                <td>80</td>
                <td>99</td>
              </tr>
              <tr>
                <td class="red-text">Charlie Chaplin</td>
                <td>68</td>
                <td>88</td>
                <td>100</td>
                <td>100</td>
                <td>87</td>
                <td>95</td>
                <td>83</td>
                <td>88</td>
                <td>89</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

export default Grades;
    
