let form = document.querySelector('.rating-scale-form');
let ratingState = document.querySelector('.rating-container');
let thankYouState = document.querySelector('.thank-you-state-container');
let ratingValue = document.querySelector('.thank-you-state-rating-value');

const handleFormSubmit = (event) => {
  event.preventDefault();
  const ratingData = serializeForm(form);
  changeDisplay(ratingData);  
}

const serializeForm = (formNode) => {
  const { elements } = formNode;
  const ratingData = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value, checked } = element;
      return { name, value, checked };
  })
  
  return ratingData;
}

const changeDisplay = (data) => {
  data.map((element) => {
    if(element.checked) {
      ratingState.style.display = 'none';
      thankYouState.style.display = 'flex';
      ratingValue.innerHTML = `You selected ${element.value} out of 5`
    }
  })
}

form.addEventListener('submit', handleFormSubmit);