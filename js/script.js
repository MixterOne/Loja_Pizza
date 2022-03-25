//varieveis------
let somaMussarela = 0;
let somaQuatroQueijo = 0;
let somaModa = 0;

let vendaMussarela = 0.00;
let vendaQuatroQueijo = 0.00;
let vendaModa = 0.00;

let btnVendas = document.querySelector('.vendas');
let btnEstorno = document.querySelector('.estorno');
let btnPlanilha = document.querySelector('.export');

//eventos---------

btnVendas.addEventListener('click', venda);
btnEstorno.addEventListener('click', estorno);
btnPlanilha.addEventListener('click', planilha);

//funcçoes--------

function venda(e){
    if(document.querySelector('.mussarela').checked){
        
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 30.00;
        
        document.querySelector('.resultadoMussarela').innerHTML = somaMussarela
        document.querySelector('.valorMussarela').innerHTML = vendaMussarela.toFixed(2)
    }else if(document.querySelector('.quatroQueijos').checked){
        somaQuatroQueijo = somaQuatroQueijo + 1;
        vendaQuatroQueijo = vendaQuatroQueijo + 35.00;

        document.querySelector('.resultadoQuatroQueijo').innerHTML = somaQuatroQueijo
        document.querySelector('.valorQuatroQueijo').innerHTML = vendaQuatroQueijo.toFixed(2)
    }else if(document.querySelector('.moda').checked){
        somaModa = somaModa + 1;
        vendaModa = vendaModa + 45.00

        document.querySelector('.resultadoModa').innerHTML = somaModa
        document.querySelector('.valorModa').innerHTML = vendaModa.toFixed(2)
    }

}

function estorno(e){
    if(document.querySelector('.mussarela').checked){
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 30.00;
        if(somaMussarela < 0){
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }

        document.querySelector('.resultadoMussarela').innerHTML = somaMussarela;
        document.querySelector('.valorMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.querySelector('.quatroQueijos').checked){
        somaQuatroQueijo = somaQuatroQueijo - 1;
        vendaQuatroQueijo = vendaQuatroQueijo - 35.00;
        if(somaQuatroQueijo < 0){
            somaQuatroQueijo = 0;
            vendaQuatroQueijo = 0.00;
        }

        document.querySelector('.resultadoQuatroQueijo').innerHTML = somaQuatroQueijo;
        document.querySelector('.valorQuatroQueijo').innerHTML = vendaQuatroQueijo.toFixed(2);
    }else if(document.querySelector('.moda').checked){
        somaModa = somaModa - 1;
        vendaModa = vendaModa - 45.00;
        if(somaMussarela < 0){
            somaModa = 0;
            vendaModa = 0.00;
        }

        document.querySelector('.resultadoModa').innerHTML = somaModa
        document.querySelector('.valorModa').innerHTML = vendaModa.toFixed(2)
    }

}

function planilha(e){
    TableToExcel.convert(document.getElementById('table'));
}