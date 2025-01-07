// This Chrome extension locally renders Benchling's AA color scheme
// 2025.01.07 Jiang

// AA color list
const aminoAcidColors = {
    A: "#BFBFBF", // Ala #BFBFBF
    R: "#89ACFF", // Arg #89ACFF
    N: "#7FEDED", // Asn #7FEDED
    D: "#F28484", // Asp #F28484
    C: "#F2F27F", // Cys #F2F27F
    Q: "#7FEDED", // Gln #7FEDED
    E: "#F28484", // Glu #F28484
    G: "#DFDFDF", // Gly #DFDFDF
    H: "#C0C0E8", // His #C0C0E8
    I: "#87C087", // Ile #87C087
    L: "#87C087", // Leu #87C087
    K: "#89ACFF", // Lys #89ACFF
    M: "#F2F27F", // Met #F2F27F
    F: "#9898D4", // Phe #9898D4
    P: "#EDCAC0", // Pro #EDCAC0
    S: "#FCCA7F", // Ser #FCCA7F
    T: "#FCCA7F", // Thr #FCCA7F
    W: "#D9ACD9", // Trp #D9ACD9
    Y: "#9898D4", // Tyr #9898D4
    V: "#87C087", // Val #87C087
    "*" : "#FFFBCC", // stop codon #FFFBCC
};

function changeAminoAcidColors() {
    const aminoAcids = document.querySelectorAll('.amino-acid');

    // Obtain AA one-letter abbreviations
    aminoAcids.forEach(textElement => {
        const residue = textElement.textContent.trim();
        const parentPath = textElement.closest('g.amino-acid-group')?.querySelector('path');

        if (parentPath) {
            const color = aminoAcidColors[residue] || "#FFFFFF"; // Default background to white if not mapped (NNK, etc.)
            parentPath.setAttribute('fill', color); // Background color
            textElement.setAttribute('fill', '#000000'); // Text color - black
        }
    });
}

const observer = new MutationObserver(changeAminoAcidColors);
observer.observe(document.body, { childList: true, subtree: true });

changeAminoAcidColors();

