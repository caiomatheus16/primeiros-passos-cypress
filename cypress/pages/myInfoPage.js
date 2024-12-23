class MyInfoPage{
    selectorsList () {
        const selectors = {
            firstNameField : "[name='firstName']",
            lastNameField : "[name='lastName']",
            genericNameField : ".oxd-input--active",
            middleNameField : "[name='middleName']",
            updateField:".oxd-select-text-input",
            submitField : "[type='submit']",
            genericComboBox : ".oxd-select-text--arrow",
            secondItemComboBox : ".oxd-select-dropdown > :ntd-child(2)",
            thirdItemComboBox : ".oxd-select-dropdown > :ntd-child(3)",
            
        }
        return selectors;
    }

    fillPersonalDetails (firstName,lastName,nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().middleNameField).clear().type(nickName)
    
}

fillEmployeeDetails (EmployeeID,OtherID, driversLicenseNumber,expiryDate,dateAniversary,){ 
    
    cy.get(this.selectorsList().genericNameField).eq(3).clear().type(EmployeeID)
    cy.get(this.selectorsList().genericNameField).eq(4).clear().type(OtherID)
    cy.get(this.selectorsList().genericNameField).eq(5).clear().type(driversLicenseNumber) 
    cy.get(this.selectorsList().genericNameField).eq(6).clear().type(expiryDate)
    cy.get(this.selectorsList().genericNameField).eq(8).clear().type(dateAniversary)
    
    

}


saveform(){
    cy.get(this.selectorsList().submitField).eq(0).click({force : true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

}
fillStatus() {
    cy.get(this.selectorsList().updateField).eq(0).type('click')
    cy.contains('Andorran').click()
    cy.get(this.selectorsList().updateField).eq(1).type('click')
    cy.contains('Married').click()
    cy.get(this.selectorsList().updateField).eq(2).type('click')
    cy.contains('B-').click()
}



}
export default MyInfoPage;