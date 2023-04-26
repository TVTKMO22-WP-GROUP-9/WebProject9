const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const chaiJsonSchemaAjv = require("chai-json-schema-ajv");
chai.use(chaiJsonSchemaAjv);

const carbondioxideSchema = require("../schemas/carbondioxideTest.schema.json");

describe('Carbondioxide test', function () {

    describe('GET /carbondioxide/1990', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/carbondioxide/1990")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                //check response data structure
                expect(res.body).to.be.jsonSchema(carbondioxideSchema)
                done();
                


            })

      })
    })
    describe('GET /carbondioxide/20', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/carbondioxide/")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                //check response data structure
                expect(res.body).to.be.jsonSchema(carbondioxideSchema)
                done();
                


            })

      })
    })
  });