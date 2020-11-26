class Cadastro {

    constructor() {

        this.pessoas = []
    }

    adicionar() {

        let nomeCad = document.getElementById("nome").value
        let sexoCad = document.querySelector("[name=sexo]:checked").value

        let p = { nome: nomeCad, sexo: sexoCad }
        this.pessoas.push(p)

    }

    masculino() {

        for (let i = 0; i < this.pessoas.length; i++) {

            if (this.pessoas[i].sexo == "m") {
                console.log(this.pessoas[i])
            }




        }
        

    }
    feminino(){

        for (let i = 0; i < this.pessoas.length; i++) {

            if (this.pessoas[i].sexo == "f") {

                console.log(this.pessoas[i])
            }
        }
    }
}

var cadastro = new Cadastro()