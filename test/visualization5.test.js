const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const chaiJsonSchemaAjv = require("chai-json-schema-ajv");
chai.use(chaiJsonSchemaAjv);

const visualization5SubFurtherTestSchema = require("../schemas/visualization5SubFurtherTest.schema.json");
const visualization5SubTestSchema = require("../schemas/visualization5SubTest.schema.json");
const visualization5TestSchema = require("../schemas/visualization5Test.schema.json");

describe('Visualization 5 test', function () {

  //sub_sector_further test

    describe('GET /sub_sector_further', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/sub_sector_further")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                //check response data structure
                expect(res.body).to.be.jsonSchema(visualization5SubFurtherTestSchema)
                done();
                


            })

      })
    })

     //sub_sector test

     describe('GET /sub_sector', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/sub_sector")
            .end(function(err, res) {
                //check response
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                //check response data structure
                expect(res.body).to.be.jsonSchema(visualization5SubTestSchema)
                done();
                


            })

      })
    })

         //sector test

         describe('GET /Sector', function () {
          it('should return data', function (done) {
            //send http request
            chai.request("https://webproj9.oulu.azatotweb.com")
                .get("/sector")
                .end(function(err, res) {
                    //check response
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
    
                    //check response data structure
                    expect(res.body).to.be.jsonSchema(visualization5TestSchema)
                    done();
                    
    
    
                })
    
          })
        })


        
  });