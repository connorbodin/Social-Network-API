const router = require('express').Router();
const {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getUsers,
} = require('../../controllers/userController.js');

// /api/courses
router.route('/').get(getUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:userId')
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
