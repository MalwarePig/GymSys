var ValoresAlmacen;

function DashboardStatus() {
    document.querySelector("#TotalAlumnos").innerHTML = 120
    document.querySelector("#TotalAcreditados").innerHTML = 85
    document.querySelector("#TotalVencidos").innerHTML = 35
    document.querySelector("#TotalBajas").innerHTML = 15
    /* $.ajax({
        url: '/DashboardStatus/' + localStorage.getItem('PlantaGeneral'),
        success: function (data) {
            ValoresAlmacen = data

            document.querySelector("#DespachosCard").innerHTML = "s"
            document.querySelector("#RetornosCard").innerHTML = data[1].Total
            document.querySelector("#RequeridosCard").innerHTML = 5
            document.querySelector("#CriticosCard").innerHTML = data[3].Total
        } //Funcion success
    }); //Ajax 
 */
    setTimeout(() => {
        Graficos()
    }, 500);
}

function Graficos() {
    GraficaDona()
    GraficoBarras()
}

function GraficaDona() {

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Estado', 'Valores'],
            ['Acreditado', 3500],
            ['Vencido', 500]
        ]);

        var options = {
            title: 'Percepciones',
            pieHole: 0.1,
            /* backgroundColor: {
                fill: '#2b3035',//Modo oscuro
                fillOpacity: 0.8
            }, */
            textStyle: {
                fontName: 'Times-Roman',
                fontSize: 60,
                bold: true,
                italic: true,
                // The color of the text.
                color: '#871b47',
                // The color of the text outline.
                auraColor: '#d799ae',
                // The transparency of the text.
                opacity: 0.8
            }, slices: { 0: { color: '#198754' }, 1: { color: '#ffc107' }, 2: { color: '#ffc107' }, 3: { color: '#dc3545' } }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }
}
/* 
function GraficoBarras() {
    $.ajax({
        url: '/TopDespachos/',
        success: function (data) {
            // console.log(data);
            var Productos = []
            var Cantidades = []
            for (let index = 0; index < data.length; index++) {
                Productos.push(data[index].producto)
                Cantidades.push(data[index].Salidas)
            }

            google.charts.load('current', { 'packages': ['bar'] });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                    ['Productos', Productos[0], Productos[1], Productos[2], Productos[3], Productos[4], Productos[5]],
                    ['Despachos', Cantidades[0], Cantidades[1], Cantidades[2], Cantidades[3], Cantidades[4], Cantidades[5]]
                ]);

                var options = {
                    chart: {
                        title: 'Despachos',
                        subtitle: 'Top articulos despachados en 3 meses',
                    },
                    /* backgroundColor: {
                        fill: '#2b3035',//Modo oscuro
                        fillOpacity: 0.8
                    }, */
                /*};

                var chart = new google.charts.Bar(document.getElementById('columnchart_values'));

                chart.draw(data, google.charts.Bar.convertOptions(options));
            }

        } //Funcion success
    }); //Ajax  

} */

function GraficoBarras() {
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Productos', "Agua", "Vendas", "Sueros", "Guantes", "Snack", "Casco"],
            ['Despachos', 500, 450, 230, 180, 140, 90]
        ]);

        var options = {
            chart: {
                title: 'Ventas insumos',
                subtitle: 'Top venta de articulos mes actual',
            },
            /* backgroundColor: {
                fill: '#2b3035',//Modo oscuro
                fillOpacity: 0.8
            }, */
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_values'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}