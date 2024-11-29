export const weatherservice = (() => {
    async function getJSONData (location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?IconSet=icons1&key=W8SRDE35NC9EZSAB2UEM3ZD9H`);
        if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    }
    catch (e){
        console.error(e.message);
    }
    }
    return { getJSONData };
})();