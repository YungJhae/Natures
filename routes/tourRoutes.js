const express = require('express');
const tourController = require('./../controller/tourController');
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

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTour, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
