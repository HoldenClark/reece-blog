// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });


// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const buttons = document.querySelectorAll('.post-button');
const returnButtons = document.querySelectorAll('.return-home-button');
const hiddenElements = document.querySelectorAll('.hidden');

async function mappingTheInvisibleSky() {
    buttons.forEach(button => button.disabled = true);
    returnButtons.forEach(button => button.disabled = true);

    let pageTransition = async () => {
        let page = document.querySelector('.main');
        page.classList.remove('show');
        page.classList.add('hidden-left');
        await sleep(2000);
        page.classList.remove('hidden-left');
        page.classList.add('hidden-right');
    };
    
    let articleTransition = async () => {
        let article = document.querySelector('.mapping-the-invisible-sky');
        article.classList.remove('hidden-right');
        article.classList.add('show');
    };

    await Promise.all([
        pageTransition(),
        articleTransition(),
    ]);

    buttons.forEach(button => button.disabled = false);
    returnButtons.forEach(button => button.disabled = false);
}

async function returnHome() {
    buttons.forEach(button => button.disabled = true);
    returnButtons.forEach(button => button.disabled = true);

    let articleTransition = async () => {
        let article = document.querySelector('.mapping-the-invisible-sky');
        article.classList.remove('show');
        article.classList.add('hidden-left');
        await sleep(2000);
        article.classList.remove('hidden-left');
        article.classList.add('hidden-right');
    };

    let pageTransition = async () => {
        let page = document.querySelector('.main');
        page.classList.remove('hidden-right');
        page.classList.add('show');
    };

    await Promise.all([
        articleTransition(),
        pageTransition(),
    ]);

    buttons.forEach(button => button.disabled = false);
    returnButtons.forEach(button => button.disabled = false);
}