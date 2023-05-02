const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const chaiJsonSchemaAjv = require("chai-json-schema-ajv");
chai.use(chaiJsonSchemaAjv);

const visualizationTestSchema = require("../schemas/visualizationTest.schema.json");

describe('Visualization test', function () {


    describe('GET /visualization', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/visualization")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                //check response data structure
                expect(res.body).to.be.jsonSchema(visualizationTestSchema)
                done();
                


            })

      })
    })

    describe('POST /visualization', function () {
      it('should allow post data',  function (done) {
        //send http request
        /*let visdata = {
          "visualization_id":"999999",
          "display_order":"1",
          "line_name":"testi",
          "text":"testit",
        }*/
        chai.request("https://webproj9.oulu.azatotweb.com")
            .post("/visualization")
            .send({
              url: "afasdaaada",
              text: "testi",
              date: "2023-01-01 00:00:01",
              user_id: 666,
              lable: "testi",
              sideBySide: "1"
            })
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();


            })

      })
    })

   /* describe('Delete /visualization', function () {
      it('should allow delete data',  function (done) {
        //send http request
        
        chai.request("https://webproj9.oulu.azatotweb.com")
            .delete("/visualization/")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                done();
                


            })

      })
    })*/


        
  });