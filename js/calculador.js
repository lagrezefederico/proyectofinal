const tagCreator = (element) => {
    // destructuring;
    const { title, price, suscriptionType, description, color } = element;
    const tagHeader = document.createElement('div');
    const tagTitle = document.createElement('h4');
    const tagBody = document.createElement('div');
    const tagPrice = document.createElement('h1');
    const tagSuscriptionType = document.createElement('small');
    const tagDrescription = document.createElement('ul');
    const button = document.createElement('button');
    const container = document.createElement('div');
    
    tagHeader.appendChild(tagTitle);
    tagBody.appendChild(tagPrice);
    tagBody.appendChild(tagSuscriptionType);
    tagBody.appendChild(tagDrescription);
    tagBody.appendChild(button);
    container.className = `card mb-4 shadow-sm ${color}`;
    tagHeader.className = 'card-header';
    tagTitle.className = 'my-0 font-weight-normal';
    tagBody.className = 'card-body';
    tagTitle.innerHTML = title;
    tagPrice.className = 'my-0 font-weight-normal';
    tagPrice.innerHTML = `U$D ${price}`;
    tagSuscriptionType.className = 'text-muted';
    tagSuscriptionType.innerHTML = suscriptionType;
    tagDrescription.className = 'list-unstyled mt-3 mb-4';
    button.innerHTML = 'Lo quiero';
    button.className = 'button';
  
    description.forEach((text) => {
      const li = document.createElement('li');
      li.innerHTML = text;
      tagDrescription.appendChild(li);
    })
  
    const tags = [tagHeader, tagBody];
    tags.forEach((tag) => {
      container.appendChild(tag);
    });
  
    return container;
  };
  
  window.onload = function(){
    const input = document.getElementById("calculador_pacientes");
    const monto = document.getElementById('monto_calculado');
    const costOfEachPacient = 0.25;
    const name = window.prompt('Hola decime tu nombre antes de empezar');
    alert(`Hola ${name}!, en el campo de abajo ingresá cuantos pacientes tiene tu plataforma para calcular el costo total.`);
  
    const calculateCostOfAmountPacients = (pacientsAmount) => {
      return pacientsAmount * costOfEachPacient;
    };
  
    const handleChangeInput = (event) => {
      const value = event.target.value;
      const cost = calculateCostOfAmountPacients(value); 
      monto.innerHTML = `Monto en U$D: ${cost}`;
    };
  
    input.addEventListener('change', handleChangeInput);
  
    const array = [
      {
        title: 'Prueba por 15 días',
        price: 0,
        suscriptionType: 'x mes',
        description: [
          '100 usuarios',
          'Solo plataforma web',
          'Plantillas incluidas',
          'Descuento de contratacion',
        ],
        color: 'gratis',
      },
      {
        title: 'Dorado',
        price: 15,
        suscriptionType: 'x mes',
        description: [
          '200 usuarios incluidos',
          'Plantillas de planes',
          'Soporte por 3 meses',
          'Whatsapp widget incluído',
        ],
        color: 'dorado',
      },
      {
        title: 'Plata',
        price: 29,
        suscriptionType: 'x mes',
        description: [
          '600 usuarios',
          'Todo el plan dorado',
          'App personalizada',
          'Newsletters',
        ],
        color: 'plata',
      },
    ];
  
    const cards = array.map(tagCreator);
    const container = document.getElementById('suscripciones');
    const flexBox = document.getElementById('flexbox_suscripciones');
    container.appendChild(flexBox);
    cards.forEach((card) => {
      flexBox.appendChild(card);
    });
  };