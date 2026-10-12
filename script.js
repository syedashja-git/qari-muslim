'use strict';
// Keep one answer open at a time, while preserving native keyboard accessibility.
const answers = document.querySelectorAll('.faq-list details');
answers.forEach(answer => answer.addEventListener('toggle', () => {
  if (answer.open) answers.forEach(other => { if (other !== answer) other.open = false; });
}));
