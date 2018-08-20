from odoo import http

class Academy(http.Controller):
    @http.route('/academy/academy', auth='public')
    def index(self, **kw):
        return http.request.render(
        'academy.index',
        {
        'teachers': [
            'Héctor Mendoza',
            'Sebastian Flores',
            'John Campbell',
            ]
        })
