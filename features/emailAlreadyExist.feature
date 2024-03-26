Feature: Register User

Scenario: Email Already exist

  Given I am on the register screen
  When I fill in the following details:
    | Field           | Value                                 |
    |-----------------|---------------------------------------|
    | Gender          | Male                                 |
    | First Name      | FirstNameUser                          |
    | Last Name       | LastNameUser                           |
    | Date of Birthday | 28/11/1985                            |
    | Email           | test@test.com                           |
    | Company Name    | Company Test                           |
    | Newsletter      | Unchecked (disable)                    |
    | Password         | test123                               |
    | Confirm Password | test123                               |
  And I click the "Register" button
  Then I should see a success message indicating registration is complete