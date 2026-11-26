const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// عرض ملفات الموقع
app.use(express.static(path.join(__dirname, 'public')));

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`موقع مسرح الجريمة يعمل على المنفذ ${PORT}`);
});
