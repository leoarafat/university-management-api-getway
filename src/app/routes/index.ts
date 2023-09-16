import express from 'express';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';

const router = express.Router();

const moduleRoutes = [
  // {
  //     path: '/academic-faculties',
  //     routes: academicFacultyRoutes
  // },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes
  },
  {
    path: '/academic-semesters',
    routes: academicSemesterRoutes
  }
  // {
  //     path: '/buildings',
  //     routes: buildingRoutes
  // },
  // {
  //     path: '/rooms',
  //     routes: roomRoutes
  // },
  // {
  //     path: '/courses',
  //     routes: courseRoutes
  // },
  // {
  //     path: '/semester-registrations',
  //     routes: semesterRegistrationRoutes
  // },
  // {
  //     path: '/offered-courses',
  //     routes: offeredCourseRoutes
  // },
  // {
  //     path: '/offered-course-sections',
  //     routes: offeredCourseSectionRoutes
  // },
  // {
  //     path: '/offered-course-class-schedules',
  //     routes: offeredCourseClassScheduleRoutes
  // },
  // {
  //     path: '/student-enrolled-courses',
  //     routes: studentEnrolledCourseRoutes
  // },
  // {
  //     path: '/student-enrolled-course-marks',
  //     routes: studentEnrolledCourseMarkRoutes
  // },
  // {
  //     path: '/student-semester-payments',
  //     routes: studentSemesterPaymentRoutes
  // }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
