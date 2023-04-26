const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const chaiJsonSchemaAjv = require("chai-json-schema-ajv");
chai.use(chaiJsonSchemaAjv);

const HadcrutAnnualTestSchema = require("../schemas/HadcrutAnnualTest.schema.json");
const HadcrutReconstructionTestSchema = require("../schemas/HadcrutReconstructionTest.schema.json");

describe('Hadcrut Tests', function () {
    //Global tests
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
      it('should return specific data', function (done) {
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

    describe('GET /hadcrud/GlobalMonthly', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/hadcrud/GlobalMonthly/")
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
    describe('GET /hadcrud/GlobalMonthly/1886', function () {
      it('should return specific data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/hadcrud/GlobalMonthly/2008")
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

    //Southern tests
    describe('GET /hadcrud/SouthernAnnual', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/hadcrud/SouthernAnnual")
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
    describe('GET /hadcrud/SouthernAnnual/1950', function () {
      it('should return specific data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/hadcrud/SouthernAnnual/1950")
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

    describe('GET /hadcrud/SouthernMonthly', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/hadcrud/SouthernMonthly/")
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
    describe('GET /hadcrud/SouthernMonthly/1920', function () {
      it('should return specific data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/hadcrud/SouthernMonthly/1920")
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

        //Northen tests
        describe('GET /hadcrud/NorthenAnnual', function () {
          it('should return data', function (done) {
            //send http request
            chai.request("https://webproj9.oulu.azatotweb.com")
                .get("/hadcrud/NorthenAnnual")
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
        describe('GET /hadcrud/NorthenAnnual/1995', function () {
          it('should return specific data', function (done) {
            //send http request
            chai.request("https://webproj9.oulu.azatotweb.com")
                .get("/hadcrud/NorthenAnnual/1995")
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
    
        describe('GET /hadcrud/NorthenMonthly', function () {
          it('should return data', function (done) {
            //send http request
            chai.request("https://webproj9.oulu.azatotweb.com")
                .get("/hadcrud/NorthenMonthly/")
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
        describe('GET /hadcrud/NorthenMonthly/2001', function () {
          it('should return specific data', function (done) {
            //send http request
            chai.request("https://webproj9.oulu.azatotweb.com")
                .get("/hadcrud/NorthenMonthly/2001")
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
        //Reconstruction test

        describe('GET /reconstruction', function () {
          it('should return specific data', function (done) {
            //send http request
            chai.request("https://webproj9.oulu.azatotweb.com")
                .get("/reconstruction")
                .end(function(err, res) {
                    //check response
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
    
                    //check response data structure
                    expect(res.body).to.be.jsonSchema(HadcrutReconstructionTestSchema)
                    done();
                    
    
    
                })
    
          })
        })

        describe('GET /reconstruction/1975', function () {
          it('should return specific data', function (done) {
            //send http request
            chai.request("https://webproj9.oulu.azatotweb.com")
                .get("/reconstruction/1975")
                .end(function(err, res) {
                    //check response
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
    
                    //check response data structure
                    expect(res.body).to.be.jsonSchema(HadcrutReconstructionTestSchema)
                    done();
                    
    
    
                })
    
          })
        })
  });