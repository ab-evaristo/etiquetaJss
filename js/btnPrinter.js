function btnPrinter() {
    let firstLine = document.getElementById("field-firstname");
    let SecondLine = document.getElementById("field-secondname");
    let ThirdLine = document.getElementById("field-thirdname");
    
    let txtZpl  =   "^XA^CFP,30,30^FO10,10^FD"+
                    firstLine.value+
                    "^FS^FO10,40^FD"+
                    SecondLine.value+
                    "^FS^FO10,70^FD"+
                    ThirdLine.value+
                    "^FS^XZ"
                    
    //alert(txtZpl);
    imprimirString(txtZpl);
}


function imprimirString(txt) {
    // Cria um objeto de impressão
    var janelaImpressao = window.open('', '', 'width=800,height=600');
  
    // Adiciona a string que você deseja imprimir
    janelaImpressao.document.write(txt);
  
    // Chama a função de impressão
    janelaImpressao.print();
  
    // Fecha a janela de impressão após a impressão
    janelaImpressao.onafterprint = function () {
      janelaImpressao.close();
    };
  }
  
  
