const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate Unique ID",()=>{
   it("Shold generete  an Unique ID",()=>{
    const id = generateUniqueId();   
    expect(id).toHaveLength(8);
   }) 
});