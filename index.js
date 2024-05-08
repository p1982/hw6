//Task1 Quasi-Tagged Templates
const translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    }
};

function localize(strings, ...keys) {
    const language = "fr";
    const translation = translations[language];
    
    let result = '';
    
    keys.forEach((key, index) => {
        result += strings[index] + translation[key];
    });
    
    result += strings[strings.length - 1];
    
    return result;
}

const language = "fr";
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting);
console.log(localizedIntroduction);


//Task 2: Advanced Tagged Template
function highlightKeywords(template, keywords) {
    const pattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    return template.replace(pattern, '<span class="highlight">$&</span>');
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";
const highlighted = highlightKeywords(template, keywords);

console.log(highlighted, 'task2');


//Task 3: Multiline Tagged Template
function multiline(strings, ...values) {
    const template = strings.reduce((result, string, index) => {
        return result + string + (values[index] || '');
    }, '');

    const lines = template.split('\n');
    const numberedLines = lines.map((line, index) => `${index + 1} ${line}`);
    return numberedLines.join('\n');
}

const code = multiline`
function add(a, b) {
    return a + b;
}
`;

console.log(code);


//Task4 Implementing Debounce Function
function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function debouncedSearch(query) {
    console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);
const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
    debouncedSearchHandler(event.target.value);
});


//Task 5: Implementing Throttle Function
function throttle(func, interval) {
    let lastExecutionTime = 0;

    return function(...args) {
        const currentTime = Date.now();

        if (currentTime - lastExecutionTime >= interval) {
            func.apply(this, args);
            lastExecutionTime = currentTime;
        }
    };
}

function onScroll(event) {
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);
window.addEventListener("scroll", throttledScrollHandler);

//Task 6: Currying Function Implementation
function curry(func, arity) {
    return function curried(...args) {
        if (args.length >= arity) {
            return func(...args);
        } else {
            return function(...remainingArgs) {
                return curried(...args, ...remainingArgs);
            };
        }
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2);
const step2 = step1(3);
const result = step2(4);

console.log("Result:", result);