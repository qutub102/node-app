const express = require("express");
const app = express();
const cors = require("cors");

const Form = require("./models/FormSchema");
const { db } = require("./db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
db();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World"
  });
});

app.get('/test',(req,res) => {
  console.log("test")
  res.json({
    message: "testing of CI/CD pipeline"
  })
})

app.get('/demo',(req,res) => {
  res.send("Hello")
})
// create form - POST
app.post("/createform", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(200).json({
      message: "Form created",
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Form not created",
      status: 500,
    });
  }
});

// fetch form data - get
app.get("/getForm", async (req, res) => {
  try {
    const form = await Form.find();
    if (!form) return res.status(404).json({ message: "Form Empty" });

    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({
      message: "Form not created",
      status: 500,
    });
  }
});

// fetch form by id - get
app.get("/getForm/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) res.status(404).json({ message: "Form Empty" });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({
      message: "Form not created",
      status: 500,
    });
  }
});

// update form - patch
app.patch("/updateForm/:id", async (req, res) => {
  // const { name, email, gender, color, country, message} = req.body
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!form) return res.status(404).json({ message: "Form not found" });
    res.status(200).json({
      message: "Form updated",
    });
  } catch (error) {
    res.status(500).json({
      message: "Form not created",
      status: 500,
    });
  }
});

// delete form - delete
app.delete("/deleteform/:id", async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);

    if (!form) return res.status(404).json({ message: "Form not found" });

    res.status(200).json({
      message: "Form updated",
    });
  } catch (error) {
    res.status(500).json({
      message: "Form not created",
      status: 500,
    });
  }
});
 
app.listen(process.env.PORT || 8000, () => console.log("app is running!!!"));
