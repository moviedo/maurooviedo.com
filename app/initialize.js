import App from './components/App.svelte';

document.addEventListener('DOMContentLoaded', () => {
  new App({
    target: document.getElementById('appContainer')
  });
});
