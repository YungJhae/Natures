const express = require('express');
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe,
} = require('./../controller/userController');
const authController = require('./../controller/authController');

const router = express.Router();

// 3) ROUTES

/*
router.get('/api/v1/tours', getAllTours); // GET ALL TOURS
router.post('/api/v1/tours', createTour); // CREATE A TOUR
router.get('/api/v1/tours/:id', getTour); // GET A PARTICULAR TOUR
router.patch('/api/v1/tours/:id', updateTour); // UPDATE A TOUR
router.delete('/api/v1/tours/:id', deleteTour); // DELETE A TOUR
*/

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgetPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);

router.get('/me', getMe, getUser);
router.patch('/updateMe', updateMe);
router.delete('/deleteMe', deleteMe);

router.use(authController.restrictTo('admin'));

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
