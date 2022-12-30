import express from "express";
import { userRouter } from "./users/users.js";

const port = 3000;
const app = express();

app.use((req, res, next) => {
  console.log("Время ", Date.now());
  next();
});

app.get("/hello", (req, res) => {
  // res.send({ success: true }); //hello, helo (?) hello, hellllo (+)
  // res.setHeader("Content-Type", "application/json");
  // res.append('Warning', 'aaa')
  // res.cookie("token", "123", {
  //   domain: "",
  //   path: "/",
  //   secure: true,
  //   expires: 6000000,
  // });
  // res.clearCookie('token', {
  //   path: '/'
  // })
  res.status(201).json({ success: true });
  // res.download('./test.pdf', 'teeest.pdf')
  // res.redirect(301, 'https://example.com')
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server launched on: ${port}`);
});
