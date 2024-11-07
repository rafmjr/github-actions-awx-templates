const express = require('express')
const app = express()
const port = 8000

app.post('/api/v2/job_templates/:templateId/launch', (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Mock app listening on port ${port}`)
})
