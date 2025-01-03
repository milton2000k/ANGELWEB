// CONTACT ME BUTTON - FAKE POP-UP WINDOWS XP STYLE
document.getElementById("contactBtn").addEventListener("click", function () {
    const contactPopup = window.open("", "Contact Me", "width=400,height=250");
    contactPopup.document.write(`
        <html>
        <head>
            <title>Contact Me</title>
            <style>
                body {
                    font-family: 'Metal Mania', cursive;
                    background-color: #111;
                    color: #d3d3d3;
                    margin: 0;
                    padding: 20px;
                    text-align: center;
                    overflow-wrap: break-word; /* Prevents text overflow */ /* UPDATED */
                }
                h2 {
                    color: #ff0000;
                    text-shadow: 0 0 5px black, 0 0 10px #800000;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 16px;
                    margin: 10px 0;
                    color: #ff6666;
                    word-wrap: break-word; /* Wraps long text like emails */ /* UPDATED */
                }
                strong {
                    font-size: 14px;
                    color: #ffffff;
                }
                button {
                    background-color: #800000;
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    cursor: pointer;
                    font-size: 14px;
                    border-radius: 5px;
                    transition: all 0.3s ease;
                }
                button:hover {
                    background-color: #ff0000;
                    color: #111;
                }
            </style>
        </head>
        <body>
            <h2>📞 Contact Me</h2>
            <p>📧 Email: <strong>milton2k@outlook.com</strong></p>
            <p>📸 Instagram: <strong>@angeldelbloque</strong></p>
            <p>📞 Phone: <strong>07706457742</strong></p>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `);
    contactPopup.document.close();
});


