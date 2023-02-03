const express = require('express');
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('./../controller/userController');

const router = express.Router();

// 3) ROUTES

/*
router.get('/api/v1/tours', getAllTours); // GET ALL TOURS
router.post('/api/v1/tours', createTour); // CREATE A TOUR
router.get('/api/v1/tours/:id', getTour); // GET A PARTICULAR TOUR
router.patch('/api/v1/tours/:id', updateTour); // UPDATE A TOUR
router.delete('/api/v1/tours/:id', deleteTour); // DELETE A TOUR
*/

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
