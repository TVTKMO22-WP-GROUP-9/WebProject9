const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const chaiJsonSchemaAjv = require("chai-json-schema-ajv");
chai.use(chaiJsonSchemaAjv);

const HadcrutReconstructionTestSchema = require("../schemas/icebergTest.schema.json");
const MaunaAnnualTestSchema = require("../schemas/maunaAnnualTest.schema.json");
const MauanaMonthlyTestShema = require("../schemas/mauanaMonthlyTest.schema.json");

describe('Iceberg & icecore tests', function () {

  //iceberg 1

    describe('GET /iceberg1', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/iceberg1")
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
    describe('GET /iceberg1/1902', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/iceberg1/1902")
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

    //iceberg 2

    describe('GET /iceberg2', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/iceberg2")
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
    describe('GET /iceberg2/1940', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/iceberg2/1940")
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

    //iceberg 3

    describe('GET /iceberg3', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/iceberg3")
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
    describe('GET /iceberg3/1954', function () {
      it('should return data', function (done) {
        //send http request
        chai.request("https://webproj9.oulu.azatotweb.com")
            .get("/iceberg3/1954")
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

        //Icecore annual

        describe('GET /maunaAnnual', function () {
          it('should return data', function (done) {
            //send http request
            chai.request("https://webproj9.oulu.azatotweb.com")
                .get("/maunaAnnual")
                .end(function(err, res) {
                    //check response
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
    
                    //check response data structure
                    expect(res.body).to.be.jsonSchema(MaunaAnnualTestSchema)
                    done();
                    
    
    
                })
    
          })
        })

                //Icecore Monthly

                describe('GET /mauanaMonthly', function () {
                  it('should return data', function (done) {
                    //send http request
                    chai.request("https://webproj9.oulu.azatotweb.com")
                        .get("/mauanaMonthly")
                        .end(function(err, res) {
                            //check response
                            expect(err).to.be.null;
                            expect(res).to.have.status(200);
            
                            //check response data structure
                            expect(res.body).to.be.jsonSchema(MauanaMonthlyTestShema)
                            done();
                            
            
            
                        })
            
                  })
                })


        
  });