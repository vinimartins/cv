const load = () => {
  console.log('Acessando JS')
 
}  


function enviar(){  
  const name = document.querySelector('.name').value
  const subject = document.querySelector('.subject').value
  const email = document.querySelector('.email').value
  const message = document.querySelector('.message').value
  
  const msg = {
    from: "leandro.faria@assessoria.app",
    to: email,
    subject: subject,
    text: `
        Nome: ${name},
        Email: ${email},
        Message: ${subject}
        `
   
      };

      console.log(msg)
fetch('https://fiap-sender.herokuapp.com/email/send',
    {   
   
        method: 'POST',
        headers: {
            'Accept': '/',
            'Content-Type': 'application/json',
            'accept-encoding': 'gzip, deflate',
        },
        
        body: JSON.stringify(msg)
  }
).then(data => {
    console.log(data);
    alert('E-mail enviado com sucesso!');
}).catch(erro => {
    console.error(erro);
    alert('Erro ao enviar email');
})
}
