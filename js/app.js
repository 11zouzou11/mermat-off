emailjs.sendForm('service_p95q5eq', 'template_ap3sstw', '#form',
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });