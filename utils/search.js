function filterFAQs() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm.length === 0) {
    resetFAQs();
    return;
  }

  if (searchTerm.length < 2) {
    return;
  }

  const faqItems = document.querySelectorAll('.queandans');

  faqItems.forEach(item => {
    const questionElement = item.querySelector('.faq-q');
    const answerElement = item.querySelector('.faq-a');

    const originalQuestion = questionElement.textContent;
    const originalAnswer = answerElement.textContent;

    const question = originalQuestion.toLowerCase();
    const answer = originalAnswer.toLowerCase();

    if (question.includes(searchTerm) || answer.includes(searchTerm)) {

      const highlightedQuestion = highlightText(originalQuestion, searchTerm);
      const highlightedAnswer = highlightText(originalAnswer, searchTerm);

      questionElement.innerHTML = highlightedQuestion;
      answerElement.innerHTML = highlightedAnswer;

      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function resetFAQs() {
  const faqItems = document.querySelectorAll('.queandans');
  faqItems.forEach(item => {
    const questionElement = item.querySelector('.faq-q');
    const answerElement = item.querySelector('.faq-a');
    questionElement.innerHTML = questionElement.textContent;
    answerElement.innerHTML = answerElement.textContent;
    item.style.display = 'block';
  });
}

function highlightText(text, searchTerm) {
  return text.replace(new RegExp(searchTerm, 'gi'), `<span class="highlight">$&</span>`);
}

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', filterFAQs);
  filterFAQs();
});