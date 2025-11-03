        // Put your PDF files in a "recipes/" folder next to this index.html
        // Update the filenames below to match the actual files you have.
        const recipes = "tex/TuttiFoodi/main.pdf#page=";

        const generateBtn = document.getElementById('generateBtn');
        const anotherBtn = document.getElementById('anotherBtn');
        const viewer = document.getElementById('viewer');
        const pdfFrame = document.getElementById('pdfFrame');
        const openTab = document.getElementById('openTab');

        let lastIndex = -1;

        function pickRandomIndex() {
            let idx;
            do { idx = Math.floor(Math.random() * 80); } while (idx === lastIndex);
            return idx;
        }

        function showRecipe() {
            const idx = pickRandomIndex();
            if (idx === -1) {
                alert("No recipes found. Place PDF files in the 'recipes/' folder and update the recipes array in this file.");
                return;
            }
            lastIndex = idx;
            const path = recipes + idx.toString();
            window.open(path, "_blank");

            anotherBtn.style.display = "inline-block";
        }

        generateBtn.addEventListener('click', showRecipe);
        anotherBtn.addEventListener('click', showRecipe);

        // Optional: allow Enter/Space on focused buttons to work on some devices
        [generateBtn, anotherBtn].forEach(btn => {
            btn.addEventListener('keyup', (e) => { if (e.key === 'Enter' || e.key === ' ') btn.click(); });
        });