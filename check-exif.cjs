const fs = require('fs');
const path = require('path');
const exifr = require('exifr');

const photosDir = path.join(__dirname, '..', '..', '..', 'public', 'photos'); // Adjust based on scratch dir path
// The scratch dir is C:\Users\JVict\.gemini\antigravity-ide\brain\26d61d81-ecf0-4153-8ee8-7a444f7c7d3f\scratch
// No wait, I'll just write it to the project root.

const projDir = 'c:\\Users\\JVict\\OneDrive\\Área de Trabalho\\Projetos\\roadmap-mavi';
const dir = path.join(projDir, 'public', 'photos');

async function check() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      try {
        const filePath = path.join(dir, file);
        const gps = await exifr.gps(filePath);
        if (gps) {
          console.log(`[GPS FOUND] ${file}: ${gps.latitude}, ${gps.longitude}`);
        } else {
          console.log(`[NO GPS] ${file}`);
        }
      } catch (err) {
        console.log(`[ERROR] ${file}`);
      }
    }
  }
}

check();
