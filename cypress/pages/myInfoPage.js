class MyInfoPage{
    selectorsList () {
        const selectors = {
            firstNameField : "[name='firstName']",
            lastNameField : "[name='lastName']",
            genericNameField : ".oxd-input--active",
            middleNameField : "[name='middleName']",
            updateField:".oxd-select-text-input",
            submitField : "[type='submit']",
        }
        return selectors;
    }

    fillPersonalDetails (firstName,lastName,nickName) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().middleNameField).type(nickName)
    
}

fillEmployeeDetails (otherId,DriversLicenseDate) { 
    cy.get(this.selectorsList().genericNameField).eq(4).type(otherId)
    cy.get(this.selectorsList().genericNameField).eq(5).type (DriversLicenseDate)
}

fillStatus() {
    cy.get(this.selectorsList().updateField).eq(0).type('click')
    cy.contains('Albanian').click()
    cy.get(this.selectorsList().updateField).eq(1).type('click')
    cy.contains('Married').click()
    cy.get(this.selectorsList().updateField).eq(2).type('click')
    cy.contains('B-').click()
}

// saveform() {
//     cy.get(this.selectorsList().submitField).eq(0).click({force : true})
//     cy.get('body').should('contain', 'Sucessfully Updated')
//     cy.get('.oxd-toast-close')
    
// }

}
export default MyInfoPage;