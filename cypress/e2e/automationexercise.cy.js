describe("automation exercise tests", () => {
  it("Test Case 1: Register User", () => {
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");
    // 3. Verify that home page is visible successfully
    cy.contains(
      "Full-Fledged practice website for Automation Engineers"
    ).should("be.visible");
    // 4. Click on 'Signup / Login' button
    cy.get(".shop-menu > .nav > :nth-child(4)").click();
    // 5. Verify 'New User Signup!' is visible
    cy.get(".signup-form > h2").should("have.text", "New User Signup!");
    // 6. Enter name and email address
    cy.get('[data-qa="signup-name"]').type("zaza").should("have.value", "zaza");
    cy.get('[data-qa="signup-email"]')
      .type("test@zaza10.com")
      .should("have.value", "test@zaza10.com");
    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();
    cy.get("#id_gender2").check();
    cy.get('[data-qa="name"]').should("have.value", "zaza");
    cy.get('[data-qa="email"]').should("have.value", "test@zaza10.com");
    cy.get('[data-qa="password"]').type("123456");
    cy.get('[data-qa="days"]').select("7");
    cy.get('[data-qa="months"]').select(6);
    cy.get('[data-qa="years"]').select("2020");
    cy.get('[data-qa="first_name"]').type("test");
    cy.get('[data-qa="last_name"]').type("test");
    cy.get('[data-qa="company"]').type("test");
    cy.get('[data-qa="address"]').type("test");
    cy.get('[data-qa="address2"]').type("test");
    cy.get('[data-qa="country"]').select(2);
    cy.get('[data-qa="state"]').type("test");
    cy.get('[data-qa="city"]').type("test");
    cy.get('[data-qa="zipcode"]').type(1234);
    cy.get('[data-qa="mobile_number"]').type(453453553);
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should(
      "have.text",
      "Account Created!"
    );
    cy.get('[data-qa="continue-button"]').click();
    cy.get("a > b").should("have.text", "zaza");
    cy.get(".shop-menu > .nav > :nth-child(5) > a").click();
    cy.get("b").should("have.text", "Account Deleted!");
  });




  //აქ ისევ დავარეგისტრირე მეილი, რადგან მეორე ტესტ ქეისის გაკეთება შემძლებოდა

  it("Test Case 1: Register User", () => {
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");
    // 3. Verify that home page is visible successfully
    cy.contains(
      "Full-Fledged practice website for Automation Engineers"
    ).should("be.visible");
    // 4. Click on 'Signup / Login' button
    cy.get(".shop-menu > .nav > :nth-child(4)").click();
    // 5. Verify 'New User Signup!' is visible
    cy.get(".signup-form > h2").should("have.text", "New User Signup!");
    // 6. Enter name and email address
    cy.get('[data-qa="signup-name"]').type("zaza").should("have.value", "zaza");
    cy.get('[data-qa="signup-email"]')
      .type("test@zaza10.com")
      .should("have.value", "test@zaza10.com");
    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();
    cy.get("#id_gender2").check();
    cy.get('[data-qa="name"]').should("have.value", "zaza");
    cy.get('[data-qa="email"]').should("have.value", "test@zaza10.com");
    cy.get('[data-qa="password"]').type("123456");
    cy.get('[data-qa="days"]').select("7");
    cy.get('[data-qa="months"]').select(6);
    cy.get('[data-qa="years"]').select("2020");
    cy.get('[data-qa="first_name"]').type("test");
    cy.get('[data-qa="last_name"]').type("test");
    cy.get('[data-qa="company"]').type("test");
    cy.get('[data-qa="address"]').type("test");
    cy.get('[data-qa="address2"]').type("test");
    cy.get('[data-qa="country"]').select(2);
    cy.get('[data-qa="state"]').type("test");
    cy.get('[data-qa="city"]').type("test");
    cy.get('[data-qa="zipcode"]').type(1234);
    cy.get('[data-qa="mobile_number"]').type(453453553);
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should(
      "have.text",
      "Account Created!"
    );
  });



  
  it("Test Case 2: Login User with correct email and password", () => {
    cy.visit("http://automationexercise.com");
    cy.contains(
      "Full-Fledged practice website for Automation Engineers"
    ).should("be.visible");
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get(".login-form > h2").should("be.visible");
    cy.get('[data-qa="login-email"]').type("test@zaza10.com");
    cy.get('[data-qa="login-password"]').type("123456");
    cy.get('[data-qa="login-button"]').click();
    cy.get("b").should("have.text", "zaza");
    cy.get(".shop-menu > .nav > :nth-child(5) > a").click();
    cy.get("b").should("have.text", "Account Deleted!");
  });

  it("Test Case 3: Login User with incorrect email and password", () => {
    cy.visit("http://automationexercise.com");
    cy.contains(
      "Full-Fledged practice website for Automation Engineers"
    ).should("be.visible");
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get('.login-form > h2').should("be.visible");
    cy.get('[data-qa="login-email"]').type("test@zazattrrt10.com");
    cy.get('[data-qa="login-password"]').type("12345tyryrt6");
    cy.get('[data-qa="login-button"]').click();
    cy.get('.login-form > form > p').should("have.text", "Your email or password is incorrect!");
    
  });

});
