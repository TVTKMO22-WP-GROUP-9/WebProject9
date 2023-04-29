const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const chaiJsonSchemaAjv = require("chai-json-schema-ajv");
chai.use(chaiJsonSchemaAjv);

const Visualization4TestSchema = require("../schemas/visualization4Test.schema.json");

describe('Visualization 4 test', function () {

  //Visualization 4

    describe('GET /Visualization4', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/Visualization4")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                //check response data structure
                expect(res.body).to.be.jsonSchema(Visualization4TestSchema)
                done();
                


            })

      })
    })

    describe('GET /Visualization4/1984', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/Visualization4/1984")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                //check response data structure
                expect(res.body).to.be.jsonSchema(Visualization4TestSchema)
                done();
                


            })

      })
    })

        
  });