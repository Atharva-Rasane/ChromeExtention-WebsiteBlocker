const blocked = [
  'facebook.com',
  'twitter.com',
  'instagram.com',
  'tiktok.com',
  'youtube.com',
  'google.com',
  'wikipedia.org',
  'stackoverflow.com',
  'github.com',
  'reddit.com',
  'medium.com',
]

for (const website of blocked) {
    if(window.location.href.includes(website)){
        alert("This Website is Blocked")
        window.location.href = 'https://www.google.com/';
    }    
}
