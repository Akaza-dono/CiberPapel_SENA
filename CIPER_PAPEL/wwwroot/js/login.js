class Login {
    constructor(url) {
        this._url = url;
    }

    async validation() {
        const request = await fetch(this._url);
        const data = await request.json();

        return data;
    }
}



class Alerts {
    constructor(alertType) {
        this._alertType = alertType;
        this._icon = ''
    }

    returnAlert() {
        return Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
               });
    }

}

class ReturnView {
    constructor(elm, validation) {
        this._button = elm;
        this._validataion = validation;
    }

    returnViewTable() {
        if (this._validataion) {
            location.href = '/Home/Table'
        }
        else {
            const alert = new Alerts('badRequest');
            alert.returnAlert();
        }
    }
}

let button = document.getElementById('loginButton');
button.addEventListener('click', () => {
    const returnViwe = new ReturnView(button, true)
    returnViwe.returnViewTable();
})
