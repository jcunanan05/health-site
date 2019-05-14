import marked from '../libs/marked';

const benefits = marked(`
* Reduces high cholesterol, blood sugar
* Insomia, enhances sleeping quality
* Lessens stress, fatigue
* Prevents constipation, improves digestion
* Treats body pain (Knee, Back, Menstrual)
* Strengthen body immunity
* Treats arthritis, uric acid
* Detoxifies the body (antioxidant)
* No medicine
* Improves students' concentration
* Makes the skin smoother
* Lightens the scar - good for people with sensitive skin
* Revives libido for couples
* Treatment like going to natural environments (sea, mountain-side)
`);

function renderBenefits() {
  const container = document.querySelector('.js-Benefits');
  const content = document.createElement('div');
  content.innerHTML = benefits;
  container.appendChild(content);
}

renderBenefits();
