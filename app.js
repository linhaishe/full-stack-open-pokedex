const express = require('express')
const path = require('path')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// ✅ 1. 指定静态文件目录（dist）
app.use(express.static(path.join(__dirname, 'dist')))

// ✅ 2. 所有其他请求都返回 index.html（SPA fallback）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// ✅ 3. 启动服务器
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`)
})
