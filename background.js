let mdLink = ''

let queryInfo = {
    "active" : true, 
    "currentWindow" : true
}

document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', mdLink);
    e.preventDefault();
  });

chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query(queryInfo, (tab) => {
        if(tab == null){
            alert('Error : tab null')
            return;   
        }

        let title = tab[0].title
        let url = tab[0].url
        mdLink = '(' + title + ')[' + url + ']'
        document.execCommand('copy');
    })
});