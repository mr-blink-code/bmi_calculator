class BMI {
  h = "";
  w = "";
  calculateBmi() {
    this.w = weight.value;
    this.h = height.value;
    if (this.h == '' || this.w == '') {
      this.pushResult(`Error`, "Enter both height and weight")
    }
    else {
      const m = (this.h / 100);
      const bmiResult = this.w / (m ** 2);
      var bmi = `${bmiResult.toFixed(2)} kg/m<sup>2</sup>`;
      this.pushResult("Result", bmi)
    }
  }
  pushResult(m_title, value) {
    var modal = new bootstrap.Modal(document.getElementById('result'));
    if (m_title == "Error") {
      title.innerHTML = m_title;
      modal_body.innerHTML = value;
      modal.show();
    }
    else {
      title.innerHTML = m_title;
      let num = parseFloat(value);
      if (num <= 18.5) {
        modal_body.innerHTML = `
        <div class=fs-1 fw-bold text-primary>BMI is ${num} Kg/M<sup>2</sup></div>
        <img src="./assets/1.png"></img>
        <div class=fs-3 fw-bold text-primary>Having a below normal body mass index indicating underweight.
        <h2>Common Causes</h3>
        <p>Low body weight is not always related to an underlying condition. It may be caused by:</p>
        <ul><li>Family history</li><li>High metabolism</li><li>Increased physical activity</li></ul></div>`
      }

      else if (num > 18.5 && num <= 24.9) {
        modal_body.innerHTML = `
        <div class=fs-1 fw-bold text-info>BMI is ${num} Kg/M<sup>2</sup></div>
        <img src="./assets/2.png"></img>
        <div class=fs-1 fw-bold text-info><p>A normal BMI is between 18.5 and 25.Don't worry.</p></div>`
      }

      else if (num > 25 && num <= 29.9) {
        modal_body.innerHTML = `
        <div class=fs-1 fw-bold text-success>BMI is ${num} Kg/M<sup>2</sup></div>
        <img src="./assets/3.png"></img>
        <div class=fs-5 fw-bold text-success><p>Being overweight according to BMI (Body Mass Index) can 
        indicate potential health risks associated with carrying excess body fat. However, it's essential 
        to remember that BMI is a straightforward measurement based on height and weight, and doesn't 
        account for factors like muscle mass or body composition. It's always best to consult with a healthcare 
        professional for a comprehensive assessment of health and wellness.</p></div>`
      }
      else if (num > 30 && num <= 34.9) {
        modal_body.innerHTML = `
        <div class=fs-1 fw-bold text-light>BMI is ${num} Kg/M<sup>2</sup></div>
        <img src="./assets/4.png"></img>
        <div class=fs-5 fw-bold text-light><p>Being classified as obese stage 1 according to BMI indicates a higher level of excess body weight that may pose significant health risks. This classification is based on the BMI range of 30-34.9, where individuals may experience increased likelihood of developing conditions like type 2 diabetes, heart disease, and certain cancers. It's crucial for individuals in this category to seek guidance from healthcare professionals to manage their weight and reduce associated health risks through lifestyle changes such as diet, exercise, and potentially medical intervention.</p></div>`
      }
      else if (num > 35 && num <= 39.9) {
        modal_body.innerHTML = `
        <div class=fs-1 fw-bold text-warning>BMI is ${num} Kg/M<sup>2</sup></div>
        <img src="./assets/5.png"></img>
        <div class=fs-5 fw-bold text-warning><p>Obese stage 2, classified with a BMI between 35 and 39.9, signifies a more severe level of excess body weight. At this stage, individuals face even greater health risks compared to stage 1 obesity, including heightened chances of developing serious conditions such as cardiovascular disease, hypertension, sleep apnea, and joint problems. It becomes increasingly important for those in this category to prioritize weight management strategies under the supervision of healthcare professionals. This may involve more intensive lifestyle changes, dietary adjustments, regular physical activity, and sometimes medical interventions to mitigate health risks associated with obesity.</p></div>`
      }
      else {
        modal_body.innerHTML = `
        <div class=fs-1 fw-bold text-danger>BMI is ${num} Kg/M<sup>2</sup></div>
        <img src="./assets/5.png"></img>
        <div class=fs-5 fw-bold text-danger><p>Obese stage 3, also known as morbid obesity, is characterized by a BMI of 40 or higher. This classification indicates a very high level of excess body weight that significantly increases the risk of serious health complications. Individuals in this category are at elevated risk for conditions such as type 2 diabetes, heart disease, stroke, certain cancers, and severe respiratory problems like sleep apnea.<br><br>Managing morbid obesity requires a comprehensive approach that may include medical interventions such as weight loss surgery (bariatric surgery), along with intensive lifestyle changes involving diet, exercise, and behavioral modifications. It's crucial for individuals in this stage to seek professional guidance from healthcare providers specializing in obesity management to address both the physical and emotional aspects of their health. Early intervention and sustained efforts are essential for improving health outcomes and quality of life.</p></div>`
      }
      modal.show();
      weight.value = "";
      height.value = "";
    }
  }
}

const obj = new BMI()