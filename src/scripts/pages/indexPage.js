import marked from '../libs/marked';

const benefits = marked(`
* High Cholesterol
* Insomia
* Stress
* Constipation
* Body Pain (Knee, Back, Menstrual)
* Fatigue
* Arthritis, Uric Acid
* Detoxifies the body
* No medicine
* Improves students' concentration
`);

function renderBenefits() {
  const container = document.querySelector('.js-Benefits');
  const content = document.createElement('div');
  content.innerHTML = benefits;
  container.appendChild(content);
}

renderBenefits();
