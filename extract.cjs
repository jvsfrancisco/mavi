const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src', 'sections');
const files = fs.readdirSync(sectionsDir).filter(f => f.startsWith('Event'));

const results = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(sectionsDir, file), 'utf8');
  
  // Extract Image
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
  const photoUrl = imgMatch ? imgMatch[1] : null;

  // Extract Title (usually in <h2 or <h3 or TextScrub)
  // Let's just grab the MapPin text for location, and the main title text
  const mapPinMatch = content.match(/<MapPin[^>]*>[\s\S]*?<\/MapPin>/); // sometimes it's <MapPin className="..." />
  // actually MapPin is usually followed by a span or text.
  
  const lines = content.split('\n');
  let locationText = '';
  let titleText = '';
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<MapPin')) {
      // the next line usually has the location text
      if (lines[i+1]) locationText = lines[i+1].replace(/<[^>]+>/g, '').trim();
    }
    if (lines[i].includes('<TextScrub')) {
      if (lines[i+1]) titleText = lines[i+1].replace(/<[^>]+>/g, '').trim();
    }
  }

  results.push({
    file,
    photoUrl,
    locationText,
    titleText
  });
});

console.log(JSON.stringify(results, null, 2));
