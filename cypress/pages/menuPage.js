class MenuPage {
    selectorsList () {
        const selectors = {
            myInfoButton : '[href="/web/index.php/pim/viewMyDetails"]',
            performanceInfoButton : '[href="/web/index.php/performance/viewPerformanceModule"]'
        }
        return selectors;
    }
    acessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click();
        
    }
    acessPerformanceInfo() {
        cy.get(this.selectorsList().performanceInfoButton).click();
    }
}

export default MenuPage