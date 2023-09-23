
        // Function to generate and download a PDF
        function generatePDF() {
            const doc = new jsPDF();
            const button = document.getElementById('printButton');

            // Hide the "Print Resume" button while generating the PDF
            button.style.display = 'none';

            // Add your HTML content to the PDF
            doc.html(document.body, {
                callback: function () {
                    // Save the PDF with a specific name (e.g., "resume.pdf")
                    doc.save('resume.pdf');

                    // Show the "Print Resume" button again
                    button.style.display = 'block';
                }
            });
        }

        // Add a click event listener to the "Print Resume" button
        const printButton = document.getElementById('printButton');
        printButton.addEventListener('click', generatePDF);
    
