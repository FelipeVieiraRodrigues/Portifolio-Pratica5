(function() {
    emailjs.init("q2Y8_OS4E2r0irjoj");
})();

window.onload = function() {
    document.querySelector('input[name="time"]').value = new Date().toLocaleString();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        console.log('Dados do formulário sendo enviados:');
        for (let [key, value] of formData.entries()) {
            console.log(key + ': ' + value);
        }

        emailjs.sendForm('service_Felipe', 'template_178rj6o', this)
            .then(function(response) {
                console.log('SUCESSO!', response.status, response.text);
                alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('ERRO NO ENVIO...', error);
                alert('Falha no envio da mensagem. Tente novamente ou entre em contato diretamente por e-mail: felipevieirar@yahoo.com.br\nErro: ' + JSON.stringify(error));
            });
    });
};
