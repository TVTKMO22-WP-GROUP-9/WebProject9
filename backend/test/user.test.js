const request = require("supertest");
const app = require("../app");
const assert = require("assert");
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbl91c2VyIjoiYXphdG90IiwiaWF0IjoxNjgyNDM3NTMzLCJleHAiOjE3MTM5NzM1MzN9.FozqZLtIQTRHUvNorrbC7Jnb2H5A00XmFx7AFU-KNbo";

let idKey = 49;

describe("GET /user", function () {
  it("responds with an array of users", function (done) {
    request(app)
      .get("/user")
      .set("Accept", "application/json")
      .set({ Authorization: `Bearer ${token}` })
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert(Array.isArray(res.body), true);
        done();
      });
  });
});

describe("POST /user", function () {
  it("responds with a user object", function (done) {
    request(app)
      .post("/user")
      .send({
        login_user: "john",
        fname_user: "John",
        lname_user: "Doe",
        email_user: "johndoe@example.com",
        password_user: "1234",
      })
      .set("Accept", "application/json")
      .set({ Authorization: `Bearer ${token}` })

      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert(res.body.login_user, "john");
        assert(res.body.email_user, "johndoe@example.com");
        console.log("User Created : " + idKey);

        done();
      });
  });
});

describe("GET /user/:id", function () {
  it("responds with a user object", function (done) {
    request(app)
      .get("/user/john")
      .set("Accept", "application/json")
      .set({ Authorization: `Bearer ${token}` })
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert(res.body[0].login_user, "john");
        console.log("res body : " + res.body[0].login_user);
        idKey = res.body[0].id_user;
        console.log("idKey : " + idKey);
        done();
      });
  });
});

describe("DELETE /users/:id", function () {
  it("responds with no content", function (done) {
    request(app)
      .delete("/user/" + idKey)
      .set({ Authorization: `Bearer ${token}` })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        console.log("Deleted!");

        done();
      });
  });
});
