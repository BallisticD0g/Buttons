document.getElementById('Button2').addEventListener('click', fetchData);

async function fetchData() {
    fetch(' https://random-data-api.com/api/v2/beers')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response as JSON
        })
        .then(data => {
            console.log(data)
        
            const brand = data.brand
            console.log(brand);
            document.getElementById('result').innerHTML = brand;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


const fullscreenBtn = document.getElementById('fullscreenBtn');

fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenEnabled) {
        // If fullscreen mode is supported
        if (!document.fullscreenElement) {
            // If not already in fullscreen mode
            document.documentElement.requestFullscreen().catch(err => {
                console.error('Error attempting to enable full-screen mode:', err);
            });
        } else {
            // If already in fullscreen mode, exit fullscreen
            document.exitFullscreen().catch(err => {
                console.error('Error attempting to exit full-screen mode:', err);
            });
        }
    } else {
        alert('Fullscreen mode is not supported by your browser.');
    }
});