//card picture values 
const cardNumber = document.getElementById("number");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const cardCvc = document.getElementById("cvc");

// card input values.
const numberInp = document.getElementById("card_number");
const nameInp = document.getElementById("card_name");
const monthInp = document.getElementById("card_month");
const yearInp = document.getElementById("card_year");
const cvcInp = document.getElementById("card_cvc");


nameInp.addEventListener('input', function () {
  if (nameInp.value.length == 0) {
    document.getElementById('name').innerHTML = 'Jane Appleseed';
  } else {
    document.getElementById('name').innerHTML = this.value;
  }
});

numberInp.addEventListener('input', function () {
  if (numberInp.value.length == 0) {
    document.getElementById('number').innerHTML = '0000 0000 0000 0000';
  } else {
    document.getElementById('number').innerHTML = this.value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
  }
});

monthInp.addEventListener('input', function () {
  if (monthInp.value.length == 0) {
    document.getElementById('month').innerHTML = '00';
  } else {
    document.getElementById('month').innerHTML = this.value;
  }
});

yearInp.addEventListener('input', function () {
  if (yearInp.value.length == 0) {
    document.getElementById('year').innerHTML = '00';
  } else {
    document.getElementById('year').innerHTML = this.value;
  }
});

cvcInp.addEventListener('input', function () {
  if (cvcInp.value.length == 0) {
    document.getElementById('cvc').innerHTML = '00';
  } else {
    document.getElementById('cvc').innerHTML = this.value;
  }
});





const setSubmit = () => {
  const submitBtn = document.querySelector(".submit_btn");
  const completed = document.querySelector(".thank");
  const form = document.querySelector("form");


  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!nameInp.value) {
      nameInp.classList.add("error");
      nameInp.parentElement.classList.add("error_message");
    } else {
      nameInp.classList.remove("error");
      nameInp.parentElement.classList.remove("error_message");

    }
    if (!numberInp.value) {
      numberInp.classList.add("error");
      numberInp.parentElement.classList.add("error_message");
    } else {
      numberInp.classList.remove("error");
      numberInp.parentElement.classList.remove("error_message");
    }
    if (!yearInp.value) {
      yearInp.classList.add("error");
      yearInp.parentElement.classList.add("error_message");
    } else {
      yearInp.classList.remove("error");
      yearInp.parentElement.classList.remove("error_message");
    }
    if (!monthInp.value) {
      monthInp.classList.add("error");
      monthInp.parentElement.classList.add("error_message");
    } else {
      monthInp.classList.remove("error");
      monthInp.parentElement.classList.remove("error_message");
    }
    if (!cvcInp.value) {
      cvcInp.classList.add("error");
      cvcInp.parentElement.classList.add("error_message");
    } else {
      cvcInp.classList.remove("error");
      cvcInp.parentElement.classList.remove("error_message");
    }
    if (
      nameInp.value &&
      numberInp.value &&
      monthInp.value &&
      yearInp &&
      cvcInp.value
    ) {
      form.classList.add("hidden");
      completed.classList.remove("hidden");
    }
  });

}

setSubmit();
