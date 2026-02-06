
const pdfUrl     = "tex/TuttiFoodi/main.pdf"; // Pfad zu deiner PDF (ohne #page)
const totalPages = 80;                         // <-- auf echte Seitenzahl setzen!


const generateBtn = document.getElementById("generateBtn");
const anotherBtn  = document.getElementById("anotherBtn");
const openTab     = document.getElementById("openTab");
const pdfFrame    = document.getElementById("pdfFrame");
const pdfCanvas   = document.getElementById("pdfCanvas");


const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);


function pickRandomPage() {
    if (!Number.isInteger(totalPages) || totalPages < 1) {
        alert("Config-Fehler: totalPages ist nicht korrekt gesetzt.");
        return 1;
    }
  // einfache Random-Page
  let index = 0;
  while(index <= 5){
    index = Math.floor(Math.random() * totalPages) + 1; 
  }
  return index;
}

function iframeShow(url) {
    pdfFrame.src = url;
    pdfFrame.style.display  = "block";
    pdfCanvas.style.display = "none";
    anotherBtn.style.display = "inline-block";
    openTab.style.display    = "inline-block";
    openTab.href             = url;
}

async function canvasShow(page) {

    pdfFrame.style.display  = "none";
    pdfCanvas.style.display = "block";
    anotherBtn.style.display = "inline-block";
    openTab.style.display    = "none"; // neuer Tab auf Mobil macht hier wenig Sinn

    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
    const p   = await pdf.getPage(page);


    const desiredWidth = Math.min(window.innerWidth * 0.95, 800);
    const viewport0    = p.getViewport({ scale: 1 });
    const pixelRatio = window.devicePixelRatio || 1;
    const scale = (desiredWidth / viewport0.width) * pixelRatio * 1.2; // 1.2 = Vergrößerun
    const viewport     = p.getViewport({ scale });

    const ctx = pdfCanvas.getContext("2d");
    pdfCanvas.width  = viewport.width;
    pdfCanvas.height = viewport.height;
    ctx.clearRect(0, 0, viewport.width, viewport.height);

    await p.render({ canvasContext: ctx, viewport }).promise;
}


async function showRecipe() {
    const page = pickRandomPage();

     try {
        await canvasShow(page);
    } catch (e) {
        console.error(e);
        alert("Konnte die Seite nicht rendern.");
    }

}

// ====== Events ======
generateBtn.addEventListener("click", showRecipe);
anotherBtn.addEventListener("click", showRecipe);
