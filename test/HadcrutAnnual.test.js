const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const chaiJsonSchemaAjv = require("chai-json-schema-ajv");
chai.use(chaiJsonSchemaAjv);

const HadcrutAnnualTestSchema = require("../schemas/HadcrutAnnualTest.schema.json");

describe('HadcrutAnnualTest test', function () {

    describe('GET /hadcrud/GlobalAnnual', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/hadcrud/GlobalAnnual")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                //check response data structure
                expect(res.body).to.be.jsonSchema(HadcrutAnnualTestSchema)
                done();
                


            })

      })
    })
    describe('GET /hadcrud/GlobalAnnual/1886', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/hadcrud/GlobalAnnual/1886")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                //check response data structure
                expect(res.body).to.be.jsonSchema(HadcrutAnnualTestSchema)
                done();
                


            })

      })
    })
  });