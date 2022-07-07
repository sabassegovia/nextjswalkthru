// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
  res.json({message: 'GETTED'})
})
  .post((req, res) => {
  res.json({message: 'message POST'})
})
  .put((req, res) => {
  res.json({message: 'message PUT'})
})
  .delete((req, res) => {
  res.json({message: 'message DELETE'})
})

export default handler;
