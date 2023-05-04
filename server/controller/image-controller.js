
// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({ storage: storage });


// Define a route to handle file uploads
app.post('/upload', upload.single('image'), async (req, res) => {
  const newImage = new Image({
    name: req.file.originalname,
    contentType: req.file.mimetype,
    data: fs.readFileSync(req.file.path)
  });

  try {
    await newImage.save();
    fs.unlinkSync(req.file.path);
    res.send('File uploaded successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading file!');
  }
});


