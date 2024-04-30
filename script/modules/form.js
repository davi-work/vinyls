const formToEmail = () => {
  (function() {
    emailjs.init(/* 'your_public_key' */ 'TlnpLvqy8I4Ek47sQ');
  })();
  // Эта конструкция называется "самовызывающаяся функция". Она создает анонимную функцию (без имени) и сразу же вызывает ее. 
  // Это делается для того, чтобы выполнить некоторый код сразу же после загрузки страницы, не создавая глобальных переменных 
  // и не засоряя глобальное пространство имен.

// Внутри этой функции вызывается метод emailjs.init(), который инициализирует библиотеку EmailJS. 
// Он принимает один параметр - ваш публичный ключ (public key), который идентифицирует вашу учетную запись в EmailJS.
  
  const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  // Получаем значения из полей формы
  let name = document.getElementById('name').value;
  let number = document.getElementById('number').value;
  let message = document.getElementById('message').value;

  // Отправляем данные на email с помощью EmailJS
  emailjs.send(/* 'your_service_id' */ 'service_ttvtw0t', /* 'your_template_id' */ 'template_o1b63dd', {
    name: name,
    number: number,
    message: message
  })
  // Метод then используется для регистрации обработчиков, которые 
  // будут вызваны при успешном или неуспешном завершении операции. 
  .then(function(response) {
    console.log('Данные успешно отправлены на email', response.status, response.text);
  }, function(error) {
    console.log('Ошибка при отправке email:', error);
  });
/*   1. Первая функция (function(response) { ... }) - это обработчик успешного выполнения операции. Она будет вызвана, 
  когда операция завершится успешно (в случае отправки письма - когда письмо будет успешно отправлено). 
  В этой функции вы можете обработать результат операции, который передается в параметр response.

  2. Вторая функция (function(error) { ... }) - это обработчик ошибки. Она будет вызвана, 
  когда операция завершится с ошибкой (в случае отправки письма - когда произойдет какая-либо ошибка при отправке).
   В этой функции вы можете обработать ошибку, которая передается в параметр error. */
  
  form.reset()
});
}

export default formToEmail; 


/* form.addEventListener('submit', function(event) {
  event.preventDefault();

  const data = {};

  // Получаем все элементы формы
  const formElements = form.elements;

  // Перебираем элементы формы и добавляем их значения в объект data
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.name) {
      data[element.name] = element.value;
    }
  }

  console.log(data);
});
 */