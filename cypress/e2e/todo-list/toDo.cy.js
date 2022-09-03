beforeEach(() => {
        // cy.request('DELETE', 'http://localhost:8000/api/test/reset')
        cy.visit('http://localhost:3000');
});
describe('ToDo list compiled', () => {
    it('page initial compiled', () => {
        
        cy.contains('Mi lista de tareas');
    })

    it('has input text', () => {
        cy.get('#input-task').type('nueva tarea');
    })
    it('add task', () => {
        cy.get('#input-task').type('nueva tarea');
        cy.get('#add-btn').click();
        cy.get('.label-task').should('contain','nueva tarea');
    })
})