class Solicitudes {
    constructor(url) {
        this._url = url;
    }

    async solicitud() {
        const request = await fetch(this._url);
        const data = await request.json();
        return data;
    }
}

//class Alerts {
//    constructor(alertType) {
//        this._alertType = alertType;
//        this._icon = ''
//    }

//    returnAlert() {
//        return Swal.fire({
//            title: 'Error!',
//            text: 'Do you want to continue',
//            icon: 'error',
//            confirmButtonText: 'Cool'
//        });
//    }

//}

export { Solicitudes };