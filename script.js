const activities = [
    "Explore the city by bike.",
    "Attend a pop-up art gallery or event.",
    "Join a local urban gardening or farming project.",
    "Go street food hopping, tasting different cuisines.",
    "Attend an open-air cinema or theater performance.",
    "Take part in a citywide scavenger hunt.",
    "Organize a rooftop picnic with friends.",
    "Rollerblade or skateboard through city parks.",
    "Attend a live street performance or busking event.",
    "Discover hidden gems: quaint cafes, vintage shops, or secret gardens.",
    "Participate in a city marathon or charity run.",
    "Go wall climbing at an outdoor facility.",
    "Attend outdoor workout or dance classes.",
    "Take a night walk to explore the city's lights and nightlife.",
    "Dive into a local community project or street fair.",
    "Try out a local outdoor fitness park or obstacle course.",
    "Organize a flash mob or spontaneous dance event in a public square.",
    "Take a graffiti or street art tour.",
    "Explore the city's waterfront, whether it's a beach, river, or lake.",
    "Attend or host a BBQ in a city park with local musicians.",
    "Visit a rooftop bar for a panoramic view of the city lights.",
    "Attend a live music gig at a local club.",
    "Dance the night away at a popular nightclub or try a salsa or swing dancing venue.",
    "Embark on a street food tour, exploring the city's delicacies.",
    "Chill in an all-night cafe and chat with friends.",
    "Join an urban stargazing group.",
    "Laugh out loud at a comedy club or open-mic event.",
    "Explore art galleries or exhibitions that stay open late.",
    "Dress up for a themed or costume party at a club.",
    "Take a stroll through a scenic part of the city.",
    "Catch a film at a cinema or an open-air movie venue.",
    "Show off your vocal skills at a karaoke bar.",
    "Engage in urban photography, capturing the essence of the city.",
    "Participate in a midnight run or cycling group.",
    "Challenge friends at an arcade or gaming center.",
    "Book a relaxation session at a local spa.",
    "Discover hidden speakeasies or underground bars.",
    "Engross yourself in a book reading or poetry event.",
    "Browse the offerings at the city's markets or bazaars.",
    "Join a rejuvenating yoga or meditation session."
];

fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
     
        const filteredData = jsonData.filter(item => 
            item.hasOwnProperty('titleUrl') &&
            item.hasOwnProperty('description') &&
            !containsChineseCharacters(item.description) 
        );

        function displayRandomContent(event) {
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            const randomItem = filteredData[randomIndex];
            const randomIndexAct = Math.floor(Math.random() * activities.length);
            const randomItemAct = activities[randomIndexAct];

            const buttonClicked = event.target; 
            const outputArea = buttonClicked.nextElementSibling; 

            const linkElement = outputArea.querySelector('.randomLink');
            linkElement.href = randomItem.titleUrl;
            linkElement.textContent = randomItem.title;

            const descriptionElement = outputArea.querySelector('.randomDescription');
            descriptionElement.textContent = randomItemAct;
        }

        const randomButtons = document.querySelectorAll('.randomBtn');
        randomButtons.forEach(button => {
            button.addEventListener('click', displayRandomContent);
        });

    })
    .catch(error => console.error('Error fetching the JSON data:', error));

function containsChineseCharacters(text) {
    const regex = /[\u4e00-\u9fa5]/;
    return regex.test(text);
}
    