
//const total = document.getElementById('total');
//let donutchartData = [];
//let columnChart = [];
//(function () {
//	fetch('/panel/getalldata')
//		.then(response => {
//			if (!response.ok) {
//				throw new Error('Network response was not ok ' + response.statusText);
//			}
//			return response.json();
//		})
//		.then(data => {
//			console.log(data)
//			total.innerHTML = data.getAllSells

//			let obj = {}
//			data.estadoVentas.forEach(e => {
//				let type = ''
//				switch (e.idVentaState) {
//					case 1:
//						type = 'creada'
//						break
//					case 2:
//						type = 'en curso'
//						break
//					case 3:
//						type = 'finalizada'
//						break
//					case 4:
//						type = 'cancelada'
//						break
//				}
//				if (!obj.hasOwnProperty(type)) {
//					obj[type] = 1
//				} else {
//					obj[type]++
//				}
//			})

//			for (let o in obj) {
//				donutchartData.push({
//					y: (obj[o] * 100) / data.total,
//					label: o
//				})
//			}

//			data.getProductos.forEach(e => {
//				columnChart.push({
//					label: e.nombre,
//					y: e.cantidad
//				})
//			})

//			addData(data.getDailySells)
//			showCharts()
//		})
//		.catch(error => {
//			console.error('There has been a problem with your fetch operation:', error);
//		});
//})();


//	var chart = new CanvasJS.Chart("chartContainerDonut", {
//		animationEnabled: true,
//		title: {
//			text: "Estado ventas"
//		},
//		data: [{
//			type: "pie",
//			startAngle: 240,
//			yValueFormatString: "##0.00\"%\"",
//			indexLabel: "{label} {y}",
//			dataPoints: donutchartData
//		}]
//	});




//var chart2 = new CanvasJS.Chart("chartContainerLinear", {
//	animationEnabled: true,
//	theme: "light2",
//	title: {
//		text: "Elementos en Stock"
//	},
//	axisY: {
//		title: "Cantidad Stock",
//		suffix: "Q"
//	},
//	axisX: {
//		title: "Elementos"
//	},
//	data: [{
//		type: "column",
//		yValueFormatString: "#,##0.0#\"%\"",
//		dataPoints: columnChart
//	}]
//});


//var dataPoints = [];

//var chart3 = new CanvasJS.Chart("chartContainerSells", {
//	animationEnabled: true,
//	theme: "light2",
//	title: {
//		text: "Daily Sales Data"
//	},
//	axisY: {
//		title: "Units",
//		titleFontSize: 24,
//		includeZero: true
//	},
//	data: [{
//		type: "column",
//		yValueFormatString: "#,### Units",
//		dataPoints: dataPoints
//	}]
//});



//function addData(data) {
//	for (var i = 0; i < data.length; i++) {
//		dataPoints.push({
//			x: new Date(data[i].date),
//			y: data[i].total
//		});
//	}
//}


//const showCharts = () => {
//	chart.render();
//	chart2.render();
//	chart3.render();
//}
