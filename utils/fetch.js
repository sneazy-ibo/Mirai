fetch('https://raw.githubusercontent.com/rebelonion/Dantotsu/dev/app/src/main/res/values/strings.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');
    const questions = xmlDoc.querySelectorAll('string[name^="question_"]');
    const answers = xmlDoc.querySelectorAll('string[name^="answer_"]');
    
    const faqContainer = document.getElementById('faq-container');
    
    questions.forEach((question, index) => {
      let questionText = question.textContent.trim();
      questionText = questionText.replace(/Can\\\'t/g, "Can't").replace(/can\\\'t/g, "can't");
      
      let answerText = answers[index].textContent.trim().replace(/\\n/g, '<br>').replace(/\\'/g, '\'').replace(/&amp;/g, '&');
      
      answerText = answerText.replace(/\[([^[]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
      answerText = answerText.replace(/`([^`]+)`/g, '<span style="background-color: purple; color: white; padding: 0.2em;">$1</span>');
      answerText = answerText.replace(/Can\\\'t/g, "Can't").replace(/can\\\'t/g, "can't");
      answerText = answerText.replace(/-/g, '•');
      
      const faqDiv = document.createElement('div');
      faqDiv.classList.add('queandans');
      
      const questionPara = document.createElement('p');
      questionPara.classList.add('faq-q');
      questionPara.textContent = questionText;
      
      const answerPara = document.createElement('p');
      answerPara.classList.add('faq-a');
      answerPara.innerHTML = answerText;
      
      faqDiv.appendChild(questionPara);
      faqDiv.appendChild(answerPara);
      
      faqContainer.appendChild(faqDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));