var express = require('express');
var router = express.Router();
const db = require('../db');

router.post('/csvupload_csvfiledata', async (req, res, next) => {
  try {
    const {start = 0, length = 10} = req.body;
    const offset = +start;
    const pageLimit = length;
    const query1 = 'select * from public.csvupload_csvfiledata order by id asc offset $1 limit $2';
    const result = await db.query(query1, [+offset, +pageLimit]);
    const recordsTotal = await db.query('select count(*) from public.csvupload_csvfiledata');
    return res.json({
      message: 'done',
      recordsTotal: recordsTotal.rows[0].count,
      recordsFiltered: recordsTotal.rows[0].count,
      data: result.rows
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'error',
      error: err.message,
    });
  }
});

router.post('/csvupload_uploadnew', async (req, res, next) => {
  try {
    const {start = 0, length = 10} = req.body;
    const offset = +start;
    const pageLimit = length;
    const query2 = 'select * from public.csvupload_uploadnew order by id asc offset $1 limit $2';
    const result = await db.query(query2, [+offset, +pageLimit]);
    const recordsTotal = await db.query('select count(*) from public.csvupload_uploadnew');
    return res.json({
      message: 'done',
      recordsTotal: recordsTotal.rows[0].count,
      recordsFiltered: recordsTotal.rows[0].count,
      data: result.rows
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'error',
      error: err.message,
    });
  }
});

module.exports = router;
