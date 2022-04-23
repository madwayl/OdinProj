// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

const container = document.querySelector('#container');

const p = document.createElement('p');
p.setAttribute('style','color: red');
p.textContent = "Hey, I'm red";

const h3 = document.createElement('h3');
h3.style.setProperty('color','blue');
h3.textContent = "Hey,I'm blue h3";

container.append(h3);
container.insertBefore(p,h3);

const div = document.createElement('div');
div.classList.add('inner-container');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p1 = document.createElement('p');
p1.textContent = "ME TOO";

div.append(p1);
div.insertBefore(h1,p1);

container.append(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
e.target.style.background = 'blue';});