const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public';
const outputDir = './public/optimized';

// Asegúrate de que el directorio de salida existe
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// Función para optimizar imágenes
async function optimizeImage(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .resize(1920, null, { // máximo 1920px de ancho
                withoutEnlargement: true,
                fit: 'inside'
            })
            .webp({ quality: 80 }) // convierte a WebP con 80% de calidad
            .toFile(outputPath);
        
        console.log(`Optimized: ${inputPath}`);
    } catch (error) {
        console.error(`Error optimizing ${inputPath}:`, error);
    }
}

// Procesa todas las imágenes
fs.readdirSync(inputDir).forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
        optimizeImage(inputPath, outputPath);
    }
}); 