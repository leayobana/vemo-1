
app
//------------------------------
// TODO: API menu
// por lo pronto colocar aqui el menu para su Modelo, vease test1
//------------------------------
    .factory("menuService", function(authService) {


    var sections = [
        /*
        {
          title: 'Getting Started',
          state: 'getting-started',
          url: '/getting-started',
          type: 'link'
        }
        */
    ];

    sections.push({
        title: 'Dashboard',
        state: 'app.dashboard',
        type: 'link'
    });

    sections.push({
        //title: 'Sección ui',
        //type: 'heading',
        menu: [{
            title: 'U.I.',
            type: 'toggle',
            state: 'ui',
            menu_items: [{
                title: 'Test 1 uno más',
                state: 'ui.test1',
                type: 'link'
            }, {
                title: '2Test 2',
                state: 'ui.test2',
                type: 'link'
            }, {
                title: 'Test 3',
                state: 'ui.test3',
                type: 'link'
            }, {
                title: 'Test 4',
                state: 'ui.test4',
                type: 'link'
            }, {
                title: 'Test 5',
                state: 'ui.test5',
                type: 'link'
            }, {
                title: 'Test Directivas',
                state: 'ui.dir',
                type: 'link'
            }, ]
        }]
    });

    sections.push({

        menu: [{
            title: 'Auths System',
            type: 'toggle',
            state: 'auths.system',
            menu_items: [{
                title: 'xx',
                state: 'auths.system.xx',
                type: 'link'
            }, {
                title: 'Grupos',
                state: 'auths.system.ct',
                type: 'link'
            }, {
                title: 'Permission',
                state: 'auths.system.permission',
                type: 'link'
            }, {
                title: 'Menu',
                state: 'auths.system.menu',
                type: 'link'
            }, {
                title: 'Log',
                state: 'auths.system.log',
                type: 'link'
            }, ]
        }]
    });


    sections.push({

        menu: [{
            title: 'Cliente',
            type: 'toggle',
            state: 'catalogo.catalogo',
            menu_items: [{
                title: 'Categorías',
                state: 'catalogo.catalogo.categorias',
                type: 'link'
            }, {
                title: 'Autores',
                state: 'catalogo.catalogo.autores',
                type: 'link'
            }, ]
        }]
    });


    sections.push({

        menu: [{
            title: 'Modelo',
            type: 'toggle',
            state: 'modelo.modelo',
            menu_items: [{
                title: 'Marca',
                state: 'modelo.modelo.marca',
                type: 'link'
            }, {
                title: 'N.motor',
                state: 'catalogo.catalogo.autores',
                type: 'link'
            }, ]
        },]
    });

/*ERROR DE COMPILACION REPARAR */
    sections.push({

        menu: [{
            title: 'PRODUCTOS',
            type: 'toggle',
            state: 'catalogo.catalogo',
            menu_items: [{
                title: 'MOTOS',
                state: 'catalogo.catalogo.categorias',
                type: 'link'
            }, {
                title: 'ACCESORIOS',
                state: 'catalogo.catalogo.autores',
                type: 'link'
            }, {
                title: 'Cliente',
                state: 'modelo.modelo.cliente',
                type: 'link'
            }, ]
        }]
    });

    sections.push({

        menu: [{
            title: 'MARCAS',
            type: 'toggle',
            state: 'marcas.vemo',
            menu_items: [{
                title: 'SUSUKI',
                state: 'catalogo.vemo.catalogacion',
                type: 'link'
            },  ]
        }]
    });


    sections.push({

        menu: [{
            title: 'REPUESTO',
            type: 'toggle',
            state: 'marcas.vemo',
            menu_items: [{
                title: 'REPUESTOS DE MOTOR',
                state: 'catalogo.vemo.catalogacion',
                type: 'link'
            }, {
                title: 'REPUESTOS DE MASCARA',
                state: 'catalogo.vemo.catalogacion',
                type: 'link'

            } {
                title: 'CAJA DE HERRAMIENTAS',
                state: 'catalogo.vemo.catalogacion',
                type: 'link'
            }]
        }]
    });


    authService.getMenu().then(function(r) {
        menu = r.data;
        console.log("menuService.authService.getMenu():" + JSON.stringify(menu));
        sections.push(

            menu
        );

    }, function(error) {
        console.log("error in menuService.authService.getMenu():" + JSON.stringify(error));
    });








    return {
        sections: sections,
    };
});





