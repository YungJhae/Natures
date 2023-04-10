const express = require('express');
const tourController = require('./../controller/tourController');
const authController = require('./../controller/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

// 3) ROUTES

/*
router.get('/api/v1/tours', getAllTours); // GET ALL TOURS
router.post('/api/v1/tours', createTour); // CREATE A TOUR
router.get('/api/v1/tours/:id', getTour); // GET A PARTICULAR TOUR
router.patch('/api/v1/tours/:id', updateTour); // UPDATE A TOUR
router.delete('/api/v1/tours/:id', deleteTour); // DELETE A TOUR
*/

// router.param('id', tourController.checkID);

// POST /tour/234rdgg/reviews
// GET /tour/234rdgg/reviews
// GET /tour/234rdgg/reviews/6576667

// router
//   .route('/:tourId/reviews')
//   .post(
//     authController.protect,
//     authController.restrictTo('user'),
//     reviewController.createReview,
//   );

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTour, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    tourController.getMonthlyPlan,
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/34.189780,-118.444831/unit/mi

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.createTour,
  );

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.updateTour,
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

module.exports = router;
